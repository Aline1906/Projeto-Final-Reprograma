const { request } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Idoso = require('../models/idoso')

// READ - listar todos os idosos cadastrados  -> get -> find

router.get('/', async(req, res)=>{
    const idosos = await Idoso.find()
    response.status(200).json(idosos)
})

// CREAT criar cadastro -> post -> save 

router.post('/', async(req, res) =>{
    // permito a criação de um cadastro
    const idoso = new Idoso({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        endereco: request.body.endereco,
        criadoEm: request.body.criadoEm
   })
   // salvar o cadastro criado 
   const novoCadastro = await idoso.save()
   //enviar resposta do servidor
   response.status(201).json(novoCadastro)
})

module.exports = router
