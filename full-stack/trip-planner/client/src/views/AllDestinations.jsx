import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { 
  getAllDestinations,
  deleteDestinationById
} from '../services/internalApiService';

// Named export: import { AllDestinations, Name2 } from './components/AllDestinations';
const AllDestinations = (props) => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        getAllDestinations()
            .then(data => {
                setDestinations(data)
            })
            .catch(error => [
                console.log(error)
            ])
    }, [])

    const handleDelete = (idToDelete) => {
      deleteDestinationById(idToDelete)
        .then(data => {
          /*
          Since this page displays all the destinations, the deleted one will still
          be displayed unless we remove it from state, but we should only remove it
          when the delete is successful which happens in the `.then`.
          */
          const filteredDestinations = destinations.filter((destination) => {
            return destination._id !== idToDelete
          })

          setDestinations(filteredDestinations)
        })
        .catch(err => {
          console.log(err)
        })
    }

    return (
        <div className="w-50 mx-auto text-center">
          <h2>Travel Destinations</h2>
    
          {destinations.map((destination) => {
            const { _id, location, description, summer, winter, spring, fall } =
              destination;
            return (
              <div key={_id} className="shadow mb-4 rounded border p-4">
                <Link to={`/destinations/${_id}`}>{location}</Link>
                <p>{description}</p>
                <h5>Travel Seasons:</h5>
                <ul className="list-group">
                  {/* display only the `true` seasons. */}
                  {summer && <li className="list-group-item">Summer</li>}
                  {winter && <li className="list-group-item">Winter</li>}
                  {spring && <li className="list-group-item">Spring</li>}
                  {fall && <li className="list-group-item">Fall</li>}
                </ul>
                <Link
                  to={`/destinations/${_id}/edit`}
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
  
// Only 1 default per file: import AllDestinations from './components/AllDestinations';
// When importing default, you can choose any name.
export default AllDestinations