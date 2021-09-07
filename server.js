const express = require('express')
const app = express()
const cors = require('cors')

const db = require('./src/data/database')
db.connect()

app.use(cors());
app.use(express.json());

const idososRouter = require('./src/routes/idoso.routes')
app.use('/idosos', idososRouter)

app.use(express.json())

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))