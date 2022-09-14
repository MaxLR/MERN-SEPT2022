const { Trip } = require('../models/trip.model')

const createTrip = async (data) => {
    const trip = await Trip.create(data)
    return trip
}

const getAllTrips = async () => {
    const trips = await Trip.find();
    return trips;
};


const getTripById = async (id) => {
    const trip = await Trip.findById(id);
    return trip;
};

const deleteTripById = async (id) => {
    const trip = await Trip.findByIdAndDelete(id);
    return trip;
};

const updateTripById = async (id, data) => {
    const trip = await Trip.findByIdAndUpdate(id, data, {
      // Re-run validations.
      runValidators: true,
      // Return the updated Trip.
      new: true,
    });
  
    return trip;
};

// Export all the services methods in an object
module.exports = {
    //long-form key: value
    createTrip: createTrip,
    
    // Shorthand can be used when key name matches var name
    getAllTrips,
    getTripById,
    deleteTripById,
    updateTripById,
}