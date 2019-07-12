const express = require('express'),
      app = express();
      router = express.Router(),
      bodyParser = require('body-parser'),
      postController = require('../controllers/PostController'),
      methodOverride = require('method-override');
app.use(methodOverride('_method'));

router.get('/', function(req, res, next) {

    postController.find(req.query, function(err, results){
        if(err){
            console.log(err);
            res.json({
                success: 0,
                error: err
            });
            return;
        }
        res.json({
            success: 1,
            data: results
        });
    });
});


router.get('/:id', function(req, res, next){
    const id = req.params.id;

    postController.findById(id, function(err, result){
    
        if(err){
            console.log(err);
            res.status(500).json({
                success: 0,
                data: result
            });
            return;
        }

        res.status(200).json({
            success: 1,
            data: result
        });
    });
});

router.post('/', function(req, res, next) {
    postController.create(req.body, function(err, result){
        if(err){  
            console.log(err);
            res.json({
                success: 0,
                error: err
            })
            return;
        }

        res.json({
            success: 1,
            data: result
        });
    });
});

router.put('/:id', function(req, res, next) {
    postController.update(req.params.id, req.body, function(err, result){
        if(err){  
            console.log(err);
            res.json({
                success: 0,
                error: err
            })
            return;
        }

        res.json({
            success: 1,
            data: result
        });
    });
});

router.delete('/:id', function(req, res, next) {
    postController.delete(req.params.id, function(err, result){
        if(err){  
            console.log(err);
            res.json({
                success: 0,
                error: err
            })
            return;
        }
        res.json({
            success: 1,
            data:result
        });
    });
});

module.exports = router