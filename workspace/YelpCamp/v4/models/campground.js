var mongoose = require("mongoose");

var campSchema = ({
    name: String, 
    image: String, 
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
module.exports = mongoose.model("campgrounds", campSchema);