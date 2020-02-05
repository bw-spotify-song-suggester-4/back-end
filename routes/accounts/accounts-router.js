const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../auth/secrets');
const { authenticate } = require('../../auth/middleware')

const db = require('./accounts-model.js');
const musicDB = require('../music/music-model')

// Register account

router.post('/register', (req, res) => {
    let account = req.body;
      account.password = bcrypt.hashSync(account.password, );
  
      db.createAccount(account)
          .then(user => {
            const token = generateToken(user)
            res.status(201).json({id: user.id, name: user.name, email: user.email, token: token})
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({message: 'WTF is going on, bro?! I need a name, email, and password to create this account'})
        })
});

// Login to account 

router.post('/login', (req, res) => {
const { email, password } = req.body;

    db.findByEmail({email})
    // .first()
    .then(user => {
        console.log(user)
        if (user) {
            const token = generateToken(user)
            res.status(200).json({id: user.id, message: `Hello ${user.name}!`, token: token });
        } else {
            res.status(401).json({ message: 'Unable to log in.'});
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'WTF is going on, bro?! I need an email and password to log in!'});
    });
});

// && bcrypt.compareSync(password, user.password) came from line 36 after user

//  Delete account 
router.delete('/:id', authenticate, (req, res) => {
    const id = req.params.id
    if (id == req.account.id) {
        db.deleteAccount(id)
        .then(() => res.status(200).json({message: "Until next time!"}))
        .catch(err => console.log(err))
    } else {
        // console.log(id, req.account.id)
        return res.status(403).json({message: "You must be logged in to delete, Bro."})
    }
    
})
// Update account

router.put('/:id', authenticate, (req, res) => {
    const id = req.params.id
    const accountInfo = req.body
    if (id) {
        db.editAccount(id, accountInfo)
        .then(() => res.status(200).json({message: "Account info successfully updated."}))
        .catch(err => console.log(err))
    } else {
        // console.log(id, req.account.id)
        return res.status(403).json({message: "You must be logged in to the account you want to edit, Bro."})
    }
    
})

// GET - all saved songs by account ID

router.get('/:id/favorites', authenticate, (req, res) => {
    const userid = req.params.id
    db.getSavedSongs(userid)
        .then(songs => {
            res.status(200).json(songs)
        })
        .catch(err => res.status(500).json(err))
})

// DELETE - favorite tracks

router.delete('/:id/favorites/:track_id', authenticate, (req, res) => {
    const id = req.params.id
    const track_id = req.params.track_id
    if (id == req.account.id) {
        db.deleteSongFromFaves(id, track_id)
        .then(() => res.status(200).json({message: "Song deleted from favorites!"}))
        .catch(err => console.log(err))
    } else {
        // console.log(id, req.account.id)
        return res.status(403).json({message: "You must be logged in to delete songs from your favorites list."})
    }
    
})


function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email
    };
    const options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
  