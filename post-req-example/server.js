const express = require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(express.urlencoded({extended:true}));
const port = 3000


app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/",function(req,res){
       var n1=Number(req.body.num1);
       var n2=Number(req.body.num2);
       var result=n1+n2;
       console.log(result);
})

app.get('/about',function(req,res){
    res.send('Hi my name is Jitendra and i love to learn new skills');
})

app.listen(port,function(){
        console.log("server started")
})