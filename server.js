'use strict';

//3rd party dependencies
const express = require('express');
//application constants
const app = express();

const PORT = process.env.PORT || 300

// allows express to server 'static files'
app.use(express.static('./public'));

//Server route
app.get('/gallery-of-horns', (request, response) => {
  response.send('hello!');
});

//Server route - simply 'serves' a webpage
app.get('/', (request, response) => {
  response.sendFile('.public/index.html');
});

//API Route - data that can be used to power page
app.get('/', (request, response) => {
  response.json({msg: 'data you asked for'})
});

// sets up access for incoming traffic on a port of 3000
app.listen(PORT, () => {
  console.log('server up on port 3000');
});

