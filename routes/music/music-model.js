const db = require('../../database/dbConfig.js');
const axios = require('axios')

module.exports = {
    getSavedSongs,
    saveSong,
    deleteSongFromFaves
};

// DATABASE FUNCTIONS BELOW

function saveSong(song, account_id, track_id) {
    return db('music')
        .insert(song)
        .returning('id')
        .then(ids => {
            return associateSongToAccount(ids[0], account_id, track_id)
        })
}

function getSavedSongs(id) {
    return db('account_to_music')
        .select()
        .where({ "account_id": id })
        .join("music", "song_id", "music.id")
}

function associateSongToAccount (song_id, account_id, track_id) {
    const association = { 
        account_id: account_id,
        song_id: song_id,
        favorites_id: track_id
    }
    return db('account_to_music')
        .insert(association)
        .returning('account_id')
}
function deleteSongFromFaves(account_id, track_id) {
    return db('account_to_music')
        .select()
        .where({account_id, favorites_id: track_id})
        .limit(1)
        .first()
        .del();
}