const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../auth/secrets');
const { authenticate } = require('../../auth/middleware')
const axios = require('axios');

const db = require('./music-model.js');


module.exports = router;


// GET - search song by  
router.get('/search/', (req, res) => {
const track_name = req.params.track_name
if (track_name) {
    axios.get(`https://sss-data-backend.herokuapp.com/search=${track_name}`)
    .then ((res) => {
        res.status(200).json()
    })
    .then ((data) => {
        res.status(200).send(data) 
    })
    .catch(err => console.log(err))
} else {
    return res.status(400).json({ message: "Bad request, dood."})
}
});

// POST - save song to favs
router.post('/save', authenticate, (req, res) => {
    // the logic for favorites collection will be similiar
    // will also need a way to connect the user, song, and favorites playlist
    // this can be an ID representing a favorite song collection or in user schema, they have a field for favorite playlist 
    const track_id = req.body.track_id
    const account_id = req.account.id
    // const favorites_id = req.favorites_id
    .then(resp => {
        db.saveSong(resp.data.seed, account_id, track_id)
            .then(() => {
                res.status(201).json({message: "Song saved to favorites, Bro."})
            })
            .catch(err => res.status(500).json({error: "Unable to save the song to favorites, Bro."}))
    });
})

// GET - get suggested songs by audio features
router.post('/suggested', (req, res) => {
    const {feature, value, limit} = req.body
    console.log("suggested:", feature, value)
    let min;
    let max;
    let totalLimit = limit

    function setValues(featureParam) {
        if (featureParam === "acousticness") {
            if (value === "high") {
                min = .64
                max = 1
            } else if (value === "medium") {
                min = .03
                max = .64
            } else {
                min = 0
                max = .03
            }
        } else if (featureParam === "danceability") {
            if (value === "high") {
                min = .73
                max = 1
            } else if (value === "medium") {
                min = .46
                max = .73
            } else {
                min = 0
                max = .46
            }
        } else if (featureParam === "energy") {
            if (value === "high") {
                min = .6
                max = 1
            } else if (value === "medium") {
                min = .4
                max = .6
            } else {
                min = 0
                max = .4
            }
        } else if (featureParam === "instrumentalness") {
            if (value === "high") {
                min = .88
                max = 1
            } else if (value === "medium") {
                min = .01
                max = .88
            } else {
                min = 0
                max = .01
            }
        } else if (featureParam === "liveness") {
            if (value === "high") {
                min = .24
                max = 1
            } else if (value === "medium") {
                min = .1
                max = .24
            } else {
                min = 0
                max = .1
            }
        } else if (featureParam === "loudness") {
            if (value === "high") {
                min = -5.68
                max = 1.81
            } else if (value === "medium") {
                min = -11.9
                max = -5.68
            } else {
                min = -60
                max = -11.9
            }
        } else if (featureParam === "speechiness") {
            if (value === "high") {
                min = .13
                max = 1
            } else if (value === "medium") {
                min = .04
                max = .13
            } else {
                min = 0
                max = .04
            }
        } else if (featureParam === "valence") {
            if (value === "high") {
                min = .64
                max = 1
            } else if (value === "medium") {
                min = .22
                max = .64
            } else {
                min = 0
                max = .22
            }
        } else if (featureParam === "popularity") {
            if (value === "high") {
                min = 38
                max = 100
            } else if (value === "medium") {
                min = 7
                max = 38
            } else {
                min = 0
                max = 7
            }
        } else {
            res.status(404).json({error: `Audio feature: ${feature} not found, Bro.`})
        }
        if (totalLimit > 500) {
            totalLimit = 500
        }
    }
    setValues(feature)
    axios.get(`https://sss-data-backend.herokuapp.com/get-suggestions=${feature}&min=${ min }&max=${ max }&limit=${totalLimit || 200}`)
    .then(resp => {
        console.log(resp.data)
        const songs = resp.data
        return res.status(200).json(songs);
    })
    .catch(err => res.status(500).json({error: err}))
})
