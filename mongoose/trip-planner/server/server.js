const express = require('express');
const cors = require('cors');
const { destinationRouter } = require('./routes/destination.routes');

// Environment vars
const port = 8000;

// requiring / importing runs the file!
// This file doesn't need to export anything though, so we need a var.
require('./config/mongoose.config');

// app is a function but it also has key value pairs on it like an object.
const app = express()

/* 
app.use is adding 'middleware':
stuff that happens in the middle of the the request and response.
*/
// req.body undefined without this line
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//lines 20 & 21 NEED to be before any app.use statements for your routers

// Adds all the destination routes with this url prepended to them.
// If we had another model, we'd do the same with that model's routes.
app.use('/api/destinations', destinationRouter);

// avoid CORS error since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8000
app.use(cors())


app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);