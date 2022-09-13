import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  getDestinationById,
  updateDestinationById
} from '../services/internalApiService';


export const EditDestination = (props) => {
    //url route param matching ":id"
    const { id } = useParams()
    const navigate = useNavigate();

    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [src, setSrc] = useState('');
    const [srcType, setSrcType] = useState('img');
    
    // checkboxes
    const [summer, setSummer] = useState(false);
    const [winter, setWinter] = useState(false);
    const [spring, setSpring] = useState(false);
    const [fall, setFall] = useState(false);
    
    const [errors, setErrors] = useState(null);

    /*
    Empty arr as second argument means this will only happen on the first render
    of this component.
    */
    useEffect(() => {
      getDestinationById(id)
        .then((data) => {
          /*
          Our service method returns `res.data` so we don't have to use
          `res.data` here.
          */
          const {
            location,
            description,
            src,
            srcType,
            summer,
            winter,
            spring,
            fall,
          } = data;

          setLocation(location);
          setDescription(description);
          setSrc(src);
          setSrcType(srcType);
          setSummer(summer);
          setWinter(winter);
          setSpring(spring);
          setFall(fall);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);

    const handleEditDestinationSubmit = (event) => {
      // Prevent the page refresh from default form submission behavior.
      event.preventDefault();
  
      const editedDestination = {
        // long-form syntax - key: value
        location: location,
  
        // shorthand syntax can be used when key name matches the var name.
        description,
        src,
        srcType,
        summer,
        winter,
        spring,
        fall,
      };
  
      updateDestinationById(id, editedDestination)
        .then((data) => {
          console.log('edit destination data:', data);
          navigate(`/destinations/${id}`);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
          <h3 className="text-center">New Destination</h3>
    
          <form
            onSubmit={(e) => {
              handleEditDestinationSubmit(e)
            }}
          >
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
    
            <div className="form-group">
              <label className="h6">Media URL</label>
              <input
                onChange={(event) => {
                  setSrc(event.target.value);
                }}
                type="text"
                className="form-control"
                value={src}
              />
            </div>
    
            <div className="form-group">
              <label className="h6">Media Type</label>
              <select
                onChange={(event) => {
                  setSrcType(event.target.value);
                }}
                type="text"
                className="form-control"
                value={srcType}
              >
                <option value="img">Image</option>
                <option value="Google Maps Embed">Google Maps Embed</option>
                <option value="Youtube Embed">Youtube Embed</option>
              </select>
            </div>
    
            <hr />
            <h5>Travel Seasons</h5>
            <div className="form-check">
              <label className="h6 form-check-label">Summer</label>
              <input
                onChange={(event) => {
                  setSummer(event.target.checked);
                }}
                type="checkbox"
                className="form-check-input"
                checked={summer}
              />
            </div>
    
            <div className="form-check">
              <label className="h6 form-check-label">Winter</label>
              <input
                onChange={(event) => {
                  setWinter(event.target.checked);
                }}
                type="checkbox"
                className="form-check-input"
                checked={winter}
              />
            </div>
    
            <div className="form-check">
              <label className="h6 form-check-label">Spring</label>
              <input
                onChange={(event) => {
                  setSpring(event.target.checked);
                }}
                type="checkbox"
                className="form-check-input"
                checked={spring}
              />
            </div>
    
            <div className="form-check">
              <label className="h6 form-check-label">Fall</label>
              <input
                onChange={(event) => {
                  setFall(event.target.checked);
                }}
                type="checkbox"
                className="form-check-input"
                checked={fall}
              />
            </div>
            <button className="btn btn-sm btn-outline-success">Submit</button>
          </form>
        </div>
    )
};
  
export default EditDestination;