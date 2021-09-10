const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json({
        "tittle": "Vem aqui",
        "version": "1.0.0",
        "mensagem": "Um app funcional para mapear idosos em seu bairro que precisam de ajuda no dia a dia. "
    })
})

module.exports = router