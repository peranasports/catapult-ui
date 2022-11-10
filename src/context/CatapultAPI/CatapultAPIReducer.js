import { act } from "react-dom/test-utils"

const CatapultAPIReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: action.payload.activities,
                token: action.payload.token,
                loading: false,
            }
            case 'GET_ATHLETES_IN_ACTIVITY':
                return {
                    ...state,
                    athletes: action.payload.athletes,
                    activity: action.payload.activity,
                    loading: false,
                }
                case 'GET_SENSOR_FOR_ATHLETES_IN_ACTIVITY':
                    return {
                        ...state,
                        sensor: action.payload.sensordata,
                        athlete: action.payload.athlete,
                        activity: action.payload.activity,
                        loading: false,
                    }
                case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'CLEAR_ACTIVITIES':
            return {
                ...state,
                acts: [],
            }
        default:
            return state
    }
}

export default CatapultAPIReducer
