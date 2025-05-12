const express = require("express")
const app = express()
let curso = "Programador Back-End"

app.use(express.json())

//Rota principal
app.get('/', (req, res) => {
 res.send('Bem-vindo ao servidor Express!');

})

//Nova rota: /sobre
app.get('/sobre', (req, res) => {
    res.send('Este é um projeto de exemplo com rotas.');
   

})

app.get('/contato', (req, res) => {
    res.send('Entre em contato pelo e-mail:lorranflourenco@gmail.com');
   

})

app.post('/usuario', (req,res) => {
   const nome = req.body.nome
   const cargo = req.body.cargo
   res.send("Usuario " + nome + " criado com sucesso. " + "Cargo: " + cargo)

})

app.listen(3000, () => {
    console.log ('Servidor rodando em http://localhost:3000')
})