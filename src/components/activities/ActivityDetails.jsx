import { useEffect, useContext, useCallback, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CatapultAPIContext from '../../context/CatapultAPI/CatapultAPIContext'
import { getAthletesInActivity } from '../../context/CatapultAPI/CatapultAPIAction'
import AthletesList from './AthletesList'
import { secsToDateTime } from '../../utils/utils'

function ActivityDetails() {
    const [aths, setAths] = useState(null)
    const params = useParams()
    const { activity, athletes, token, dispatch } = useContext(CatapultAPIContext)
    const navigate = useNavigate();

    const getLatest = useCallback(async () => {
        dispatch({ type: 'SET_LOADING' })

        const athletesData = await getAthletesInActivity(token, params.activityId)
        dispatch({ type: 'GET_ATHLETES_IN_ACTIVITY', payload: athletesData })
        setAths(athletesData.athletes)
    }, [params.activityId])

    const doSensorData = () =>
    {
        var str = ""
        for (var i = 0; i < aths.length; i++) {
          if (aths[i].selected) {
            if (str.length > 0) str += ","
            str += aths[i].id
          }
        }
        navigate(`/sensors/${activity.id}/${str}`)
    }

    useEffect(() => {
        getLatest()
        // setTimeout(() => setCounter(!counter), 30000)
    }, [getLatest])

    if (activity.id === undefined) {
        return <></>
    }

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="w-100 h-full">
                        <div className="flex space-x-4 mt-2">
                            <button className="flex btn btn-sm" onClick={() => doSensorData()}>Load Sensor Data</button>
                        </div>

                        <h2>{activity.name.toUpperCase()}</h2>
                        <p>{secsToDateTime(activity.start_time).toDateString()}</p>
                    </div>
                </div>
                <div className="drawer-side w-80">
                    <label htmlFor="my-drawer-5" className="drawer-overlay"></label>
                    <div className="h-full bg-base-200">
                        <AthletesList athletes={athletes} onAthleteSelectionChanged={(aths) => setAths(aths)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityDetails