const { response } = require('express')
const mongoose = require('mongoose')
const Idoso = require('../models/idoso')

const getAll = async(request, response)=>{
    const idosos = await Idoso.find()
    response.status(200).json(idosos)
}

const createIdoso = async(request, response) =>{
    // permito a criação de um cadastro
    const idoso = new Idoso({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        endereco: request.body.endereco,
        criadoEm: request.body.criadoEm
   })
   
   const idosoJacadastrado = await Idoso.findOne({endereco: request.body.endereco})
   if(idosoJacadastrado){
       return res.status(409).json({error: 'Idoso já cadastrado pelo endereço informado'})
   }

   try{
    const novoCadastro = await idoso.save()
   response.status(201).json(novoCadastro)

}   catch(err){
      res.status(400).json({message: err.message})
    }
}

const atualizaIdoso = async(request, response) =>{
    
    let requestId = req.params.id;
    let newEndereco = req.body.endereco;

    let filteredPost = postsJason.find(post=>post.id == requestId);
    filteredPost.endereco = newEndereco;

    res.status(200).send({
        "Message": "Endereço atualizado com sucesso",
        filteredPost
    })
}

const deleteIdoso = async(request, response) =>{

    const requestId = res.params.id;
    res.status(200).send({"menssagem": "Cadastro deletado com sucesso"})

    
    }


module.exports = {
    getAll,
    createIdoso,
    deleteIdoso,
    atualizaIdoso
}