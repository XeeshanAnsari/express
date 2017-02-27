var express=require ("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
 

app.use(bodyParser.json())
 var app = express();

var a = (process.env.PORT || 3000)

 app.get("/", function(req,res,next){
     res.send("hello world")
 });
 app.get("/express", function(req,res,next){
     res.send("hello express")
 });
 
 app.listen(a,function(){
     console.log(" your  app is running")
 });
 mongoose.connect('mongodb://zeeshanansari:zeeshan244@ds161059.mlab.com:61059/autocomplete');

 mongoose.connection.on("connected" , function (){
     console.log('mongosse is running')
 })