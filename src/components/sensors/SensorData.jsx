import { useEffect, useState, useCallback, useContext } from 'react'
import { useParams } from 'react-router-dom'
import CatapultAPIContext from '../../context/CatapultAPI/CatapultAPIContext'
import { getSensorDataForAthletesInActivity } from '../../context/CatapultAPI/CatapultAPIAction'
import Spinner from '../layout/Spinner'

function SensorData() {
    const params = useParams()
    const [sensors, setSensors] = useState([])
    // const [athids, setAthids] = useState([])
    // const [athindex, setAthindex] = useState(0)
    const { sensordata, activity, athletes, token, loading, dispatch } = useContext(CatapultAPIContext)

    const getAthletesSensorData = useCallback(async (athindex, athids) => {
        if (athindex === undefined)
        {
            return
        }
        dispatch({ type: 'SET_LOADING' })
        var athid = athids[athindex]
        const sensorData = await getSensorDataForAthletesInActivity(token, params.activityId, athid)
        dispatch({ type: 'GET_SENSOR_FOR_ATHLETES_IN_ACTIVITY', payload: sensorData })
        var ss = sensors
        if (ss.filter(obj => obj.athlete_id === sensorData.sensordata[0].athlete_id).length === 0)
        {
            ss.push(sensorData.sensordata[0])
            setSensors(ss)
        }
        var idx = athindex + 1
        if (idx < athids.length)
        {
            getAthletesSensorData(idx, athids)
        }
    }, [params.activityId])

    useEffect(() => {
        var a = params.athleteIds.split(',')
        setSensors([])
        getAthletesSensorData(0, a)
        // setTimeout(() => setCounter(!counter), 30000)
    }, [getAthletesSensorData])

    if (!loading) {
        return (
            <div>
                {/* {sensordata && sensordata[0].athlete_id} */}
            </div>
        )
    } else {
        return <Spinner />
    }
}

export default SensorData