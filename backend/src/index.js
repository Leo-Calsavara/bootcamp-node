import express from "express";
import {init} from "./db/init.js";

const PORT = 3000;
const server = express();

init();
server.get('/ad',(req,res)=>{
    res.send("facas ginsu 2000!!") 
})

server.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
});