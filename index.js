let express = require('express');
let cors = require('cors')
let route = require("./router/route")
let connect = require("./connection");
const { error } = require('console');
server = express()
//body parser - middleware
server.use(express.json())
server.use(express.urlencoded({extended:false}))
server.use(cors());
connect("mongodb://127.0.0.1:27017/lastestCURD").then(()=>{console.log("connection success")}).catch((err)=>{console.log(err)})

server.get("/" , (req , res)=>{ req.header("hello my get")})


server.use('/' , route)
server.listen(8000 , () => {
    console.log("the server is running")
})