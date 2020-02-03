const db = require('../../database/dbConfig.js');


module.exports = {
    createAccount,
    findById,
    findByEmail,
    deleteAccount,
    editAccount
};

// DB FUNCTIONS BELOW

function createAccount(account) {
    return db('accounts')
        .insert(account)
        .returning("id")
        .then(ids => findById(ids[0]))
}

function findById(id) {
    return db('accounts')
        .where('id', id)
        .first();
}

function findByEmail(email) {
    return db('accounts')
        .where(email)
        .first();
}

function deleteAccount (id) {
    return db('accounts')
        .where({ id })
        .del();
}

function editAccount (id, accountInfo) {
    return db('accounts')
        .where({ id })
        .update(accountInfo);
}