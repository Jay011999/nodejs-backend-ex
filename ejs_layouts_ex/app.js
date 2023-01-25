const express = require('express')
const bodyParser=require('body-parser')
var app=express();
const port = 3000
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

app.get('/',function(req,res){
   res.render("Home")

})

app.get('/about',function(req,res){
    res.render("about")
 
 })


app.listen(port,function(){
        console.log("server started")
})
