var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    ages: Number
});

var Cat = mongoose.model("Cat", catSchema);

Cat.create({
    name:"Shaney",
    ages: 17
}, function(err, cat){
    if(err){
        console.log("We have error: ");
        console.log(err);
    }
    else {
        console.log("We just created a new cat");
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
   if(err){
        console.log("We have error: ");
        console.log(err);
   }
   else {
       console.log("All the cat.....");
       console.log(cats);
   }
});