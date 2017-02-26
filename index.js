var express=require ("express");
 
var a = (process.env.PORT || 3000)

 var app = express();
 
 app.get("/", function(req,res,next){
     res.send("hello world")
 });
 app.get("/express", function(req,res,next){
     res.send("hello express")
 });
 
 app.listen(a,function(){
     console.log(" your  app is running")
 });