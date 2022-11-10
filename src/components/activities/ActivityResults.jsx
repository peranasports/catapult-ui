import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import ActivityItem from './ActivityItem'
import CatapultAPIContext from '../../context/CatapultAPI/CatapultAPIContext'

function ActivityResults() {
  const { activities, loading } = useContext(CatapultAPIContext)

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {activities && activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default ActivityResults
