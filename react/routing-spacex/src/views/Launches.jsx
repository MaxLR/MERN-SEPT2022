import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { Link } from 'react-router-dom'
import { getAllLaunches } from '../services/spacexApiService';

export const Launches = (props) => {
    const [launches, setLaunches] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        getAllLaunches()
            .then((data) => {
                const launchesWithImages = data.filter((launch) => {
                    return launch.links.flickr.original.length > 0;
                })
                setLaunches(launchesWithImages)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])
    
    return (
        <>
            {
                isLoading && <LoadingSpinner />
            }
            <div className="flex-col align-items-center text-center">
                {launches.map((launch) => {
                    const { date_local, id, name } = launch;

                    return (
                    <div className="w-25pct mb-md shadow rounded" key={id}>
                        <h2>
                            <Link to={`/launches/${id}`}>
                                {name}
                            </Link>
                        </h2>
                        <p>Date: {date_local}</p>
                    </div>
                    );
                })}
            </div>
        </>
    )
}