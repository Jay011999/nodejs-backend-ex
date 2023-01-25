const express = require('express')
const bodyParser=require('body-parser')
var app=express();
const port = 3000
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))
var items=[];
app.get('/',function(req,res){
   res.render("list",{ejes:items})

})

app.post("/",function(req,res){
    var item=req.body.ele1;
    items.push(item);
    res.redirect("/");
});


app.listen(port,function(){
        console.log("server started")
})
