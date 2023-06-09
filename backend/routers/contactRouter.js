const { Router } = require('express');
const router = Router();
const Model = require('../models/contactModel');

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


module.exports = router;