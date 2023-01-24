const express = require('express')
const bodyParser=require('body-parser')
const app=express()
const port = 3000
app.set("view engine","ejs");

var daytext="";
app.get('/',function(req,res){
   var d=new Date();
   var day=d.getDay();
   if(day==0 ||day==6)
        daytext="weekend"
    else 
        daytext="weekday";

    res.render("list",{dayej:daytext})

})


app.listen(port,function(){
        console.log("server started")
})
