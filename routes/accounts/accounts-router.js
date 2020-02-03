const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../auth/secrets');
const { authenticate } = require('../../auth/middleware')

const db = require('./accountsModel.js');
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
            res.status(500).json({error: err})
        })
});

// Login to account 

router.post('/login', (req, res) => {
const { email, password } = req.body;

    db.findByEmail({email})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({id: user.id, message: `Hello ${user.name}!`, token: token });
        } else {
            res.status(401).json({ message: 'Unable to log in.'});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

//  Delete account 
router.delete('/:id', authenticate, (req, res) => {
    const id = req.params.id
    if (id == req.account.id) {
        db.deleteAccount(id)
        .then(() => res.status(200).json({message: "Until next time!"}))
        .catch(err => console.log(err))
    } else {
        // console.log(id, req.account.id)
        return res.status(403).json({message: "You must be logged into the account you want to delete."})
    }
    
})
// Update account

router.put('/:id', authenticate, (req, res) => {
    const id = req.params.id
    const accountInfo = req.body
    if (id) {
        db.editAccount(id, accountInfo)
        .then(() => res.status(200).json({message: "Account information successfully updated."}))
        .catch(err => console.log(err))
    } else {
        // console.log(id, req.account.id)
        return res.status(403).json({message: "You must be logged into the account you want to edit."})
    }
    
})

// Get all saved songs by account ID

router.get('/:id/favorites', authenticate, (req, res) => {
    const id = req.params.id
    musicDB.getSavedSongs(id)
        .then(songs => {
            res.status(200).json(songs)
        })
        .catch(err => res.status(500).json(err))
})

// Delete favorite tracks

router.delete('/:id/favorites/:track_id', authenticate, (req, res) => {
    const id = req.params.id
    const track_id = req.params.track_id
    if (id == req.account.id) {
        musicDB.deleteSongFromFaves(id, track_id)
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
  
