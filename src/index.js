const express = require('express')
const app = express()
//const port=3000
const cors =require('cors')
const path = require('path')
const user=require('./routes/users.js')
const jq=require('../node_modules/jquery/dist/jquery')
const http = require('http')
const server = http.createServer(app)
const fs=require('fs')
const mediaserver=require('mediaserver')



app.set('title', 'aplicacion hecha en node.js')
app.set('port', process.env.PORT || 4000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
//seccion de middleware
app.use(express.static(path.join(__dirname, 'public')))
//app.use(cors())
app.use(express.urlencoded({extended:false}))




//rutas
app.get('/',(req,res)=>{
    res.render('index')
})
app.use('/users',user)

server.listen(app.get('port'),()=>{
    console.log('mi'+ app.get('title')+ ' esta en el puerto ' + app.get('port'))
})
app.use('/jquery',jq)