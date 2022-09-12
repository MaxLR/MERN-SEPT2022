import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { getDestinationById } from '../services/internalApiService';

export const OneDestination = (props) => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    getDestinationById(id)
      .then(data => {
        setDestination(data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  if (destination === null) {
    return <h3>No Destination</h3>
  }

  // We can only safely use the data to render and destructure now since
  // we checked it's not null.
  const { location, description, summer, winter, spring, fall, srcType, src } = destination;

  return (
    <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
      <h4>{location}</h4>
      <p>{description}</p>
      <h5>Travel Seasons:</h5>
      <ul className="list-group mb-4">
        {/* display only the `true` seasons. */}
        {summer && <li className="list-group-item">Summer</li>}
        {winter && <li className="list-group-item">Winter</li>}
        {spring && <li className="list-group-item">Spring</li>}
        {fall && <li className="list-group-item">Fall</li>}
      </ul>

      {srcType === 'img' && (
        <img className="shadow rounded" width="100%" src={src} alt={location} />
      )}

      {/* 
      iframe isn't on the exam but it's as easy as an img, just add the src and
      the rest of the code is copied from their site.

      Example: youtube -> share video -> embed 
       */}
      {srcType === 'Google Maps Embed' && (
        <iframe
          title={description}
          src={src}
          width="100%"
          height="800"
          allowfullscreen=""
          loading="lazy"
          className="shadow rounded"
        ></iframe>
      )}

      {srcType === 'Youtube Embed' && (
        <iframe
          title={description}
          width="100%"
          height="800"
          src={src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="shadow rounded"
        ></iframe>
      )}
    </div>
  );
};

export default OneDestination;