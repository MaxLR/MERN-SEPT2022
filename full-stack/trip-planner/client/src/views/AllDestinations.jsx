import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllDestinations } from '../services/internalApiService';

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
              </div>
            );
          })}
        </div>
      );
};
  
// Only 1 default per file: import AllDestinations from './components/AllDestinations';
// When importing default, you can choose any name.
export default AllDestinations