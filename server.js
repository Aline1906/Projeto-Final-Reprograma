const express = require('express')
const app = express()

const db = require('./src/data/database')
db.connect()

const idosoRouter = require('./src/routes/idoso.routes')
app.use('idosos', idosoRouter)

app.use(express.json())

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))