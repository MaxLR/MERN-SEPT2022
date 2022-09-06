import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LoadingSpinner } from '../components/LoadingSpinner';
import axios from 'axios'
import { getOneLaunch } from '../services/spacexApiService';

export const OneLaunch = (props) => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [launch, setLaunch] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        getOneLaunch(id)
            .then((data) => {
                setLaunch(data)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [id])

    if (launch === null) {
        return <LoadingSpinner />;
    }

    // We can safely destructure here, because we know that launch is no longer null
    const { date_local, details, name, links } = launch
    const { article, flickr } = links
    const { original: originalImageUrls } = flickr

    return (
        <div className="flex-col align-items-center text-center">
            <h2>{name}</h2>
            <h4>Date</h4>
            <p>{date_local}</p>
            <h4>Details</h4>
            <p>{details}</p>

            {
                originalImageUrls.map((url) => {
                    return (
                    <img
                        className="shadow-img rounded mb-md"
                        src={url}
                        alt="Launch"
                        width="60%"
                    />
                    )
                })
            }
            
            {
            /* iframe renders a part of another website into our own. */
            }
            {
                article && (
                    <iframe
                    title="Launch Article"
                    src={article}
                    width="50%"
                    height="800"
                    allowfullscreen=""
                    loading="lazy"
                    ></iframe>
                )
            }
        </div>
    );
}