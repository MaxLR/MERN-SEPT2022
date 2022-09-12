// Import installed package from node modules
// can't use import syntax due to project type
const mongoose = require("mongoose")

// Normally the db name or connection string would go in a .env or config file
// that is git ignored so the prod app can choose a different name if needed & also, hide values from public repo
const dbName = 'trip-planner';

mongoose.connect(`mongodb://127.0.0.1/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the ${dbName} database`))
    .catch(err => console.log(`Something went wrong when connecting to the ${dbName} database `, err));
