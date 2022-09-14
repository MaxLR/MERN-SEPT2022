const {
    createTrip,
    getAllTrips,
    getTripById,
    deleteTripById,
    updateTripById,
} = require('../services/trip.service');

const handleCreateTrip = async (req, res) => {
    console.log(req.body)
    try {
        const trip = await createTrip(req.body)
        return res.json(trip);
    } catch (error) {
        //400 = bad request error
        //sending an error status code will trigger .catch on client side
        return res.status(400).json(error)
    }
}

const handleGetAllTrips = async (req, res) => {
    try {
      const trips = await getAllTrips();
      return res.json(trips);
    } catch (error) {
      return res.status(400).json(error);
    }
};

const handleGetTripById = async (req, res) => {
    try {
      const trip = await getTripById(req.params.id);
      return res.json(trip)
    } catch (error) {
      return res.status(400).json(error);
    }
};

const handleDeleteTripById = async (req, res) => {
    try {
      const trip = await deleteTripById(req.params.id);
      return res.json(trip);
    } catch (error) {
      return res.status(400).json(error);
    }
};

const handleUpdateTripById = async (req, res) => {
    try {
      const trip = await updateTripById(req.params.id, req.body);
      return res.json(trip);
    } catch (error) {
      return res.status(400).json(error);
    }
};

// Export an object of our controller methods so they can be added to routes.
module.exports = {
    // long-form - key: value
    handleCreateTrip: handleCreateTrip,
    // Shorthand can be used when key name matches var name.
    handleGetAllTrips,
    handleGetTripById,
    handleDeleteTripById,
    handleUpdateTripById,
};