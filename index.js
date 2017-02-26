var express=require ("express");
 

 var app = express();
 
 app.get("/", function(req,res,next){
     res.send("hello world")
 });
 app.get("/express", function(req,res,next){
     res.send("hello express")
 });
 
 app.listen(3000,function(){
     console.log(" your  app is running")
 });