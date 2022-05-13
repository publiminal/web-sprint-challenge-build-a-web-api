const express = require('express');
const server = express();

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!


server.get('/', (req, res) =>{
    res.status(200).send('<H2>API CAHLLENGE</H2>')
})

server.get('/port', (req, res) =>{
    res.status(200).json({PORT:process.env.PORT})
})


module.exports = server;
