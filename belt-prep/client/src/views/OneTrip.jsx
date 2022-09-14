import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { 
  getTripById,
  deleteTripById
} from '../services/internalApiService';

export const OneTrip = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    getTripById(id)
      .then(data => {
        setTrip(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  const handleDelete = () => {
    deleteTripById(id)
      .then(data => {
        // There's no reason to stay on the page after the one item being viewed
        // has been deleted.
        navigate("/trips")
      })
      .catch(err => {
        console.log(err)
      })
  }

  if (trip === null) {
    return <h3>No Trip</h3>
  }


  // We can only safely use the data to render and destructure now since
  // we checked it's not null.
  const { title, location, description } = trip;

  return (
    <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
      <h4>{title}</h4>
      <button
        onClick={handleDelete}
      >
        Delete
      </button>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  );
};

export default OneTrip;