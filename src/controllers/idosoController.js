const { response } = require('express')
const mongoose = require('mongoose')
const idoso = require('../models/idoso')
const Idoso = require('../models/idoso')



const getAll = async(request, response)=>{

    const idosos = await Idoso.find()
    response.status(200).json(idosos)
}

const getCadastroPorId = async (req, res) => { 
    const { cadIdosos } = req.params
    
    Idoso.find({ idosos : cadIdosos }) 
    
    .then((list)=> { 
    
    if(!list.length > 0) return res.status(404).send({"message": "Cadastro n encontrado, tente novamente."}) 
    
    return res.status(200).send(list) }) 
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
       return response.status(409).json({error: 'Idoso já cadastrado pelo endereço informado'})
   }

   try{
    const novoCadastro = await idoso.save()
   response.status(201).json(novoCadastro)

}   catch(err){
      res.status(400).json({message: err.message})
    }
}

const atualizaCadastro = async(req,res) => {
            // encontrar um cadastro pelo id
        try{
         
            const idosos = await Idoso.findById(req.params.id)
            
            //se não encontrar retorne um erro
            if(idosos == null){
                return res.status(404).json({message: "Cadastro não encontrado"})
            }
            // se no corpo da requisicao tem algo digitado, considere a alteração
            if(req.body.nome != null){

                idosos.nome = req.body.nome
                idosos.endereco = req.body.endereco
            
         }
            //salvando novo cadastro
            const cadastroAtualizado = await idosos.save()
    
         //retorne o documento atualizado
            res.status(200).json(cadastroAtualizado)
            }catch(err){
    
            //se houve qualquer erro mostre o erro acima
            res.status(500).json({message: err.message})
        }
    
      }

const deleteIdoso = async(req, res) =>{
         try{
        const idosos = await Idoso.findById(req.params.id)
     // se vc nao encontrar me retorne um erro
    
         if(idosos == null){
             return res.status(404).json({message: "Cadastro não encontrado"})
          }
    
       //deletando o cadastro
        await idosos.remove()
    
       //retorne o documento deletados
        res.status(200).json({message: "Cadastro deletado"})
       }catch(err){
    
          //se houve qualquer erro mostre o erro acima
        res.status(500).json({message: err.message})
      }
    }
    


module.exports = {
    getAll,
    getCadastroPorId,
    createIdoso,
    atualizaCadastro,
    deleteIdoso

}