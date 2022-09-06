import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LoadingSpinner } from '../components/LoadingSpinner';
import axios from 'axios'

export const OneLaunch = (props) => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [launch, setLaunch] = useState(null)

    useEffect(() => {
        setIsLoading(true)

        axios
            .get(`https://api.spacexdata.com/v5/launches/${id}`)
            .then((res) => {
                setLaunch(res.data)
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
    const { date_local, details, name } = launch

    return (
        <div className="flex-col align-items-center text-center">
          <h2>{name}</h2>
          <h4>Date</h4>
          <p>{date_local}</p>
          <h4>Details</h4>
          <p>{details}</p>
        </div>
    );
}