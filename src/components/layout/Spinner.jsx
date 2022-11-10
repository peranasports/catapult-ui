import Catapult from '../assets/Catapult.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        width={180}
        className='text-center mx-auto'
        src={Catapult}
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner
