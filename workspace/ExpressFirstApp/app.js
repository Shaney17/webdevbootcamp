var express = require("express");
var app = express();

//home page
app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment"); 
});

//domain sneak
app.get("/sneak/:animalName", function(req, res){
   var name = ["pig", "cow", "dog"];
   var speak = ["'Oink'", "'Moo'", "'Woof Woof!!'"];
   
   for(var i = 0; i < name.length; i++){
       if(req.params.animalName === name[i]){
           res.send("The " + name[i] + " says " + speak[i]);
       }
   }
});

//domain repeat
app.get("/repeat/:string/:repeatTime", function(req, res) {
   String.prototype.repeat = function(num) {
     return new Array(num + 1).join(this); 
   }
   req.params.string += " ";
   req.params.repeatTime = Number(req.params.repeatTime);
   res.send(req.params.string.repeat(req.params.repeatTime));
});

app.get("*", function(req, res) {
   res.send("404 NOT FOUND"); 
});

//start server
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running...."); 
});