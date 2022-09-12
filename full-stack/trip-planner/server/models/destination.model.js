const { default: mongoose } = require("mongoose");

const DestinationSchema = new mongoose.Schema(
    {
      location: {
        type: String,
        required: [true, `location is required.`],
        minlength: [2, `location must be at least 2 characters.`],
      },

      description: {
        type: String,
        required: [true, `description is required.`],
        minlength: [5, `description must be at least 2 characters.`],
      },

      src: {
        type: String,
        required: [true, `src is required.`],
      },

      srcType: {
        type: String,
        required: [true, `srcType is required.`],
      },

      // Checkboxes for the season's you'd like to travel to this destination.
      summer: {
        type: Boolean,
        default: false,
      },
      winter: {
        type: Boolean,
        default: false,
      },
      spring: {
        type: Boolean,
        default: false,
      },
      fall: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true } // adds createdAt and updatedAt.
);

/* 
Register schema with mongoose and provide a string to name the collection. This
also returns a reference to our model that we can use for DB operations.
*/
const Destination = mongoose.model('Destination', DestinationSchema);

// Always exporting an object even when we only have one thing to export
// makes it easy to add more exports later if ever needed without breaking
// any code that imports from this file.
module.exports = { Destination: Destination };