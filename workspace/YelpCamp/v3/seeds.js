var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name: "Clound's Rest",
        image: "https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg",
        description: "A beautiful place, peaceful and comfortable"
    },
    {
        name: "Desert Mesa",
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
        description: "A beautiful place, peaceful and comfortable"
    },
    {
        name: "Canyon Floor",
        image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
        description: "A beautiful place, peaceful and comfortable"
    }
];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err, campground){
       if(err){
           console.log(err);
       } else {
           console.log("Removed campgrounds!");
       }
       
       //add a new campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground!!");
                    //Creat a comment
                    Comment.create(
                        {
                            text:"This place was great, but I wish there was Internet",
                            author:"Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created comment!!");
                            }
                            
                        });
                }
            });
        });
    });
}

module.exports = seedDB;
