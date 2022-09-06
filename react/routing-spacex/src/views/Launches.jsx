import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { Link } from 'react-router-dom'

export const Launches = (props) => {
    const [launches, setLaunches] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        axios
            .get(`https://api.spacexdata.com/v5/launches`)
            .then((res) => {
                setLaunches(res.data)
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