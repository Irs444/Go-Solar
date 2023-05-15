const { Router} = require('express');
const router = Router();
 const Model = require('../models/sellerModel');

router.post('/add', (req, res) => {

    // get data from client
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
       res.json(result); 
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

});

router.post('/authenticate', (req, res) => {

Model.findOne(req.body)
.then((result) => {
    if(result) res.json(result);
    else res.status(401).json({message: 'Invalide credential'});
    
}).catch((err) => {
   console.error(err);
   res.statuts(500).json(err); 
});
});

router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
       res.json(result); 
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

});
router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({email : req.params.email})
    .then((result) => {
       res.json(result); 
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

});
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((result) => {
       res.json(result); 
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });

});

module.exports = router;