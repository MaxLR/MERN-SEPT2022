const { default: mongoose } = require("mongoose");

const TripSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, `title is required.`],
        minlength: [2, `title must be at least 2 characters.`],
      },
      location: {
        type: String,
        required: [true, `location is required.`],
        minlength: [2, `location must be at least 2 characters.`],
      },
      description: {
        type: String,
        required: [true, `description is required.`],
        minlength: [5, `description must be at least 5 characters.`],
      },
    },
    { timestamps: true } // adds createdAt and updatedAt.
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Trip = mongoose.model('Trip', TripSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Trip: Trip };