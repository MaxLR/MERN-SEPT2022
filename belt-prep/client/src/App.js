import { Link, Navigate, Route, Routes } from 'react-router-dom';

// Named import
import Trips from './views/AllTrips';
/* Default import if there is a default export, can choose any name: */
// import MyView from './views/AllTrips';
import Trip from './views/OneTrip';
import { NewTrip } from './views/NewTrip';
import { EditTrip } from './views/EditTrip';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Trip Planner</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/trips"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            All Trips
          </Link>
          <Link
            to="/trips/new"
            className="btn btn-sm btn-outline-info mx-1"
          >
            New Trip
          </Link>
        </div>
      </nav>

      {/*
      Front-end routes to display view components.
      these are separate from our server routes.
      */}
      <Routes>
        {/* Redirect example */}
        <Route path="/" element={<Navigate to="/trips" replace />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/:id/edit" element={<EditTrip />} />
        <Route path="/trips/:id" element={<Trip />} />
        <Route path="/trips/new" element={<NewTrip />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
