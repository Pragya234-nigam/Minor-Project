const express = require('express');
const router = express.Router();
const Model = require('../models/eventModel');

router.post('/add', (req, res) => {
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        })
});

router.post('/authenticate', (req, res) => {
    Model.findOne({ email: req.body.email, password: req.body.password })
        .then((result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        })
})

module.exports = router;