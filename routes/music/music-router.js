const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../auth/secrets');
const { authenticate } = require('../../auth/middleware')
const axios = require('axios');

const db = require('./music-model.js');


module.exports = router;

// POST - save song to favs

router.post('/save', authenticate, (req, res) => {
    const track_id = req.body.track_id
    const account_id = req.account.id
    axios.get(``)
        .then(resp => {
            db.saveSong(resp.data.seed, account_id, track_id)
                .then(() => {
                    res.status(201).json({message: "Song saved to favorites."})
                })
                .catch(err => console.log(err))
        })
        .catch(err => res.status(500).json({error: "Unable to save song to favorites."}))
})
