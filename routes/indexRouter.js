const { Router } = require("express");

const indexRouter = Router();
const financas = [
    {
      nome: "Chocolate",
      preco: 5.90,
      added: new Date()
    },
    {
      nome: "Pirulito",
      preco: 2.32,
      added: new Date()
    }
  ];
  
indexRouter.get("/", (req, res) => 
    res.render("index", { financas: financas })
  );
  indexRouter.get("/new",(req,res)=>{
      res.render("form")
  })
  indexRouter.post("/new",(req,res)=>{


    financas.push({nome:req.body.nome,preco:req.body.preco,added:new Date()})
    res.redirect("/");
    
})
  module.exports = indexRouter;