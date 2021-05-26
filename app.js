const express = require('express')
const mysql = require('mysql')

const app = express()

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'diplomatura'
});
conexion.connect();



app.get('/', (req, res) => {
    conexion.query('select * from persona', (error, resultados) => {
        // console.log(resultados)
        res.send('ok')
        // Motores de template / Template Engines (Handlebars)
        // let html = "<ul>";
        // resultados.forEach(unaPersona => {
        //     html += `<li>${unaPersona.nombre}</li>`;
        // })
        // html += "</ul>"
        // res.send(html)
    })
})



app.get('/persona/:id', (req, res) => {
    try {
        conexion.query('select * from persona where id=?', [req.params.id], (error, resultados) => {
            res.send('Seleccionaste la persona con nombre ' + resultados[0].nombre)
        })
        // console.log(respuesta)
    } catch(e) {
        res.send('La persona no existe')
    }
})






app.listen(3000, () => {console.log('App corriendo en el puerto 3000')})
