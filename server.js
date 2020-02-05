const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const accountsRouter = require('./routes/accounts/accounts-router')
const musicRouter = require('./routes/music/music-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/accounts', accountsRouter);
server.use('/music', musicRouter);

server.get('/', (req, res) => {
    res.send("API. It's working! This shows the db is working.");
  });



module.exports = server;