const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../auth/secrets');
const { authenticate } = require('../../auth/middleware')
const axios = require('axios');

const db = require('./music-model.js');


module.exports = router;


// GET - search song by title 
router.get('/search/:songname', (req, res) => {
const songname = req.params.songname
if (songname) {
    axios.get(`http://musicovery.com/api/V6/track.php?fct=search&title=${songname}&resultsnumber=100&minmatch=90`)
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
router.post('/save', (req, res) => {
    // the logic for favorites collection will be similiar
    // you will also need a way to connect the user, song, and favorites playlist
    // this can be an ID representing a favorite song collection or in your user schema, they have a field for favorite playlist that you can just dump stuff into like an array
    const track_id = req.body.track_id
    const account_id = req.account.id
    const favorites_id = req.favorites_id
    db.saveSong(res.data.seed, account_id, track_id, favorites_id)
    .then(() => {
        res.status(201).json({message: "Song saved to favorites."})
    })
    .catch(err => console.log(err))
})
// GET - get suggested songs
router.get('/suggested', (req, res) => {
    const genre = req.body.genre
    axios.get(`http://musicovery.com/api/V6/tag.php?&fct=search&type=${genre}`)
        .then(resp => {
            // console.log(resp.data)
            const songs = resp.data
            return res.status(200).json(songs);
        })
        .catch(err => res.status(500).json({error: err}))
})


