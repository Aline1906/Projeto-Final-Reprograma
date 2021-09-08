const { request } = require('express')
const express = require('express')
const { getAll } = require('../controllers/idosoController')
const router = express.Router()
const controllers = require('../controllers/idosoController')


router.get("/oi", (req, res)=>{
    resp.status(200).send({"menssagem": "ta funcionado"})
})
// READ - listar todos os idosos cadastrados  -> get -> find
router.get('/', controllers.getAll)

// CREAT criar cadastro -> post -> save 
router.post('/', controllers.createIdoso)

// Atualizar um cadastro via id ->   ->
router.patch('/idoso/:id/atualiza', controllers.atualizaIdoso)

// DELETE um cadastro via id ->   ->
router.delete('/idoso/:id/delete', controllers.deleteIdoso)

module.exports = router
