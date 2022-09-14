const express = require('express');

const {
    handleCreateTrip,
    handleGetAllTrips,
    handleGetTripById,
    handleDeleteTripById,
    handleUpdateTripById,
} = require('../controllers/Trip.controller');

const router = express.Router()


// Notice, handleCreateTrip is not called now, it's called back later
// when the route is visited.
router.post('/', handleCreateTrip);
router.get('/', handleGetAllTrips);

// data at the :id spot in url is accessed with req.params.id.
// route params can be named anything and the name will be added to req.params.
router.get('/:id', handleGetTripById);
router.delete('/:id', handleDeleteTripById);
router.put('/:id', handleUpdateTripById);

module.exports = { tripRouter: router };