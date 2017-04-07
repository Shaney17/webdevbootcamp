var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// var campground = [
//       {name:"Ciputra", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//       {name:"Royal City", image:"https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
//       {name:"The Garden", image:"https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg"},
//       {name:"Big C", image:"https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"},
//       {name:"Yen So Park", image:"https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"},
//       {name:"Hoa Binh Park", image:"https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
//       {name:"Dai Lai Lake", image:"https://farm3.staticflickr.com/2655/3738566424_180036be3f.jpg"}
//       ];

var campSchema = {name: String, image: String, description: String};

var campgrounds = mongoose.model("campgrounds", campSchema);

app.get("/", function(req, res){
   res.render("home"); 
});

// campgrounds.create({
//    name:"The Garden", 
//    image:"https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg",
//    description: "A beautiful place, peaceful and comfortable"
// }, function(err, campground){
//       if(err){
//          console.log(err);
//       } else {
//          console.log(campground);
//       }
//    });

app.get("/camps", function(req, res){
   campgrounds.find({}, function(err, campgrounds){
      if(err){
         console.log(err);
      } else {
         res.render("camps", {campground: campgrounds});
      }
   });
});

app.get("/camps/new", function(req, res){
   res.render("new");
});

app.get("/camps/:id", function(req, res) {
   campgrounds.findById(req.params.id, function(err, foundCampground){
      if(err){
         console.log(err);
      } else {
         res.render("show", {campground: foundCampground});
      }
   });
});

app.post("/camps", function(req, res){
   var newName = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCamp = {name: newName, image: image, description: desc};
   campgrounds.create(newCamp, function(err, campground){
      if(err){
         console.log(err);
      } else {
         res.redirect("/camps");
      }
   });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running..."); 
});