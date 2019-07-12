const mongoose = require('mongoose');  

const PostSchema = new mongoose.Schema({  
    title: String,
    image: String,
    description: String,
    status: {
        type: Number,
        default: 1
      },
    time: {
        type: Date,
        required: true,
        default: Date.now
    }      
});

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');

 