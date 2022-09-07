const port = 8000;
const express = require('express');

const app = express()
app.use(express.json());

const indexCallBack = (req, res) => {
    return res.json({ hello: 'world', someOtherKey: "plus it's value" })
}

// The path is arg1, the callback is arg2 which is executed when the path
// is visited.
// can pass in an array of paths to have them all return the same information
app.get(["/", "/index"], indexCallBack)

// Get all cities route
app.get('/api/cities', (req, res) => {
    const cities = [
      {
        id: 1,
        name: 'Aogashima',
        population: 170,
      },
      {
        id: 2,
        name: 'Longyearbyen',
        population: 2144,
      },
      {
        id: 3,
        name: 'Kennedy Meadows',
        population: 28,
      },
    ];
  
    return res.json(cities);
});

// create a city route
app.post('/api/cities', (req, res) => {
    console.log(req.body)

    return res.json({
        status: "success",
        city: req.body
    })
})

// delete a city route
app.delete('/api/cities/:id', (req, res) => {
    console.log(req.params)

    return res.json({
        status: "Success",
        msg: `Deleted city id: ${req.params.id}`
    })
})

// get a single city
// multiple routes can have the same path, BUT ONLY if they're different methods (e.g. get & post)
app.get('/api/cities/:cityId', (req, res) => {
    return res.json({
        id: req.params.cityId
    })
})

// This is at the bottom because the server is not ready for requests until
// the routes have been set up.
app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);