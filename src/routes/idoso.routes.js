const { request } = require('express')
const express = require('express')
const { getAll } = require('../controllers/idosoController')
const router = express.Router()
const controllers = require('../controllers/idosoController')


//msg de apresentação
router.get('/', (req, res)=>{
    res.status(200).json({
        "tittle": "Vem aqui",
        "version": "1.0.0",
        "mensagem": "Um app funcional para mapear idosos que precisam de ajuda no dia a dia. "
    })
})

// READ - listar todos os idosos cadastrados  -> get -> find
router.get('/', controllers.getAll)

// encontrar idoso por id

router.get('/:id', controllers.getCadastroPorId)
// CREAT criar cadastro -> post -> save 
router.post('/cadastrar', controllers.createIdoso)

// Atualizar um cadastro via id ->   ->
router.patch('/:id', controllers.atualizaCadastro)

// DELETE um cadastro via id ->   ->
router.delete('/:id', controllers.deleteIdoso)

module.exports = router
