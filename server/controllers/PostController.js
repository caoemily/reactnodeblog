const Post = require('../models/Post')

module.exports = {
    find: function(params, callback){
        Post.find({}, function(err, posts){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, posts);
        })
    },

    findById: function(id, callback){
        Post.findById(id, function(err, post){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, post);
        })
    },

    create: function(params, callback){

        Post.create(params, function(err, newPost){
            if(err){
                callback(err, null);
                return
            }
            callback(null, newPost);
        });
    },

    update: function(id, params, callback){

        Post.findByIdAndUpdate(id, params, function(err, post){
            if(err){
                callback(err, null);
                return
            }
            callback(null, post);
        });
    },

    delete: function (id, callback) {
        Post.findById(id, function (err, post){
            if(err){
                callback(err, null);
                return
            }
            post.remove();
            callback(null, post);
        });
    }
}