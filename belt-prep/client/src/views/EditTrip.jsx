import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  getTripById,
  updateTripById
} from '../services/internalApiService';


export const EditTrip = (props) => {
    //url route param matching ":id"
    const { id } = useParams()
    const navigate = useNavigate();

    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const [errors, setErrors] = useState(null);

    /*
    Empty arr as second argument means this will only happen on the first render
    of this component.
    */
    useEffect(() => {
      getTripById(id)
        .then((data) => {
          /*
          Our service method returns `res.data` so we don't have to use
          `res.data` here.
          */
          const {
            title,
            location,
            description,
          } = data;

          setLocation(location);
          setDescription(description);
          setTitle(title);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);

    const handleEditTripSubmit = (event) => {
      // Prevent the page refresh from default form submission behavior.
      event.preventDefault();
  
      const editedTrip = {
        // long-form syntax - key: value
        location: location,
  
        // shorthand syntax can be used when key name matches the var name.
        description,
        title,

      };
  
      updateTripById(id, editedTrip)
        .then((data) => {
          console.log('edit trip data:', data);
          navigate(`/trips/${id}`);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
          <h3 className="text-center">New Trip</h3>
    
          <form
            onSubmit={(e) => {
              handleEditTripSubmit(e)
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
                value={title}
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
                value={location}
              />
            </div>
    
            <div className="form-group">
              <label className="h6">Description</label>
              <textarea
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                type="text"
                className="form-control"
                value={description}
              ></textarea>
            </div>
            <button className="btn btn-sm btn-outline-success">Submit</button>
          </form>
        </div>
    )
};
  
export default EditTrip;