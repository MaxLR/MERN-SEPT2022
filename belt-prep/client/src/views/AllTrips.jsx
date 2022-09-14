import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  getAllTrips,
  deleteTripById
} from '../services/internalApiService';

// Named export: import { AllTrips, Name2 } from './components/AllTrips';
const AllTrips = (props) => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getAllTrips()
            .then(data => {
                setTrips(data)
            })
            .catch(error => [
                console.log(error)
            ])
    }, [])

    const handleDelete = (idToDelete) => {
      deleteTripById(idToDelete)
        .then(data => {
          /*
          Since this page displays all the trips, the deleted one will still
          be displayed unless we remove it from state, but we should only remove it
          when the delete is successful which happens in the `.then`.
          */
          const filteredTrips = trips.filter((trip) => {
            return trip._id !== idToDelete
          })

          setTrips(filteredTrips)
        })
        .catch(err => {
          console.log(err)
        })
    }

    return (
        <div className="w-50 mx-auto text-center">
          <h2>Travel Trips</h2>
    
          {trips.map((trip) => {
            const { _id, title, location, description } =
              trip;
            return (
              <div key={_id} className="shadow mb-4 rounded border p-4">
                <Link to={`/trips/${_id}`}>{title}</Link>
                <p>{location}</p>
                <Link
                  to={`/trips/${_id}/edit`}
                  className="btn btn-sm btn-outline-warning mx-1"
                >
                  Edit
                </Link>
                <button
                  onClick={(e => handleDelete(_id))}
                  className="btn btn-sm btn-outline-danger mx-1"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      );
};
  
// Only 1 default per file: import AllTrips from './components/AllTrips';
// When importing default, you can choose any name.
export default AllTrips