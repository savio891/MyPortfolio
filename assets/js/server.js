const express = require('express')
const app = express()

app.use(urlencoded({extended: true}))

app.post('/users', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Cadastro Concluído com sucesso</h1>')
})

app.listen(5500)