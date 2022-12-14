import { createContext, useReducer } from 'react'
import CatapultAPIReducer from './CatapultAPIReducer'

const CatapultAPIContext = createContext()

export const CatapultAPIProvider = ({ children }) => {
  const initialState = {
    activities: [],
    athletes: [],
    activity: {},
    sensordata: [],
    token: null,
    loading: false,
  }

  const [state, dispatch] = useReducer(CatapultAPIReducer, initialState)

  return (
    <CatapultAPIContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CatapultAPIContext.Provider>
  )
}

export default CatapultAPIContext
