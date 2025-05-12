const express = require("express")
const app = express()

let curso = "Programador Back-End"

//Rota principal
app.get('/', (req, res) => {
 res.send('Servidor Express funcionando!');

})

//Nova rota: /sobre
app.get('/sobre', (req, res) => {
    res.send('Bem-vindo à página Sobre!');
   

})

app.get('/usuario', (req, res) => {
    res.send('Lorran Furtado');
   

})

app.get('/senai', (req, res) => {
    res.send(curso);
   

})

app.listen(3000, () => {
 console.log('Servidor rodando em http://localhost:3000')

})