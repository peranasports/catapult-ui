import './input.css';
import { AlertProvider } from './context/Alert/AlertContext'
import { CatapultAPIProvider } from './context/CatapultAPI/CatapultAPIContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ActivityDetails from './components/activities/ActivityDetails';
import SensorData from './components/sensors/SensorData';

function App() {
  return (
    <CatapultAPIProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/activities/:activityId' element={<ActivityDetails />} />
                <Route path='/sensors/:activityId/:athleteIds' element={<SensorData />} />
                {/* <Route path='/about' element={<About />} />
      <Route path='/player/:playerId' element={<Player />} />
      <Route path='/filtersanalysis/:matchIds/:playerId' element={<FiltersAnalysis />} />
      <Route path='/playlist/:playerId' element={<Playlist />} />
      <Route path='/filtersvideo' element={<FiltersVideo />} />
      <Route path='/notfound' element={<NotFound />} /> */}
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </CatapultAPIProvider>
  );
}

export default App;
