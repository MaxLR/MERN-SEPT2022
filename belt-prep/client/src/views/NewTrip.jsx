import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTrip } from '../services/internalApiService';


export const NewTrip = (props) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    
    const [errors, setErrors] = useState(null);
    
    const navigate = useNavigate();

    const handleNewTripSubmit = (e) => {
        e.preventDefault();

        const newTrip = {
            //long form syntax - key : value
            location: location,
            
            //shorthand syntax can be used when key name matches var name
            description,
            title,
        }

        createTrip(newTrip)
            .then(data => {
                /* 
                Our service returns only the data. If using axios directly, you get
                `res` and need to do `res.data`.
                */

                console.log('new trip data: ', data)
                navigate(`/trips/${data._id}`)
            })
            .catch(error => {
                // Most likely going to be a validation error
                setErrors(error.response?.data?.errors);
                console.log(error.response)
            })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
          <h3 className="text-center">New Trip</h3>
    
          <form
            onSubmit={(e) => {
                handleNewTripSubmit(e)
            }}
          >
            <div className="form-group">
              <label className="h6">Title</label>
              <input
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <label className="h6">Location</label>
              <input
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
    
            <div className="form-group">
              <label className="h6">Description</label>
              {
                //adding error messaging specifically for description
                errors?.description && (
                  <span style={{ color: 'red' }}>{errors.description?.message}</span>
                )
              }
              <textarea
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                type="text"
                className="form-control"
              ></textarea>
            </div>
            <button className="btn btn-sm btn-outline-success">Submit</button>
          </form>
        </div>
    )
};
  
export default NewTrip;