import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login_views from './auth/Login_views'
import ProtectedRoute from './routes/ProtectedRoutes'
import Dashboard_page from './pages/dashboard/Dashboard_page'
import { useSelector } from 'react-redux'
// import SuccessPage_comp from './auth/signup/SuccessPage_comp'
import Event_page from './pages/events/Event_page'
import Calender_page from './pages/calendar/Calender_page'
import Payout_page from './pages/payout/Payout_page'
import Guides_page from './pages/guides/Guides_page'
import Climbers_page from './pages/climbers/Climbers_page'
import GuideEvent_page from './pages/guides/GuideEvent_page'
import ClimbersEvent_page from './pages/climbers/ClimbersEvent_page'
import Stats_page from './pages/stats/Stats_page'

function App() {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return (
    <div className='app font-face-gm'>
      <BrowserRouter>
        <Routes>
          {/* Redirect to dashboard if user is authenticated */}
          <Route path='/' element={isAuthenticated ? <Navigate to='/dashboard' /> : <Navigate to='/login' />} />

          {/* Public routes */}
          <Route path='/login' element={<Login_views />} />
          <Route path='/dashboard' element={<Dashboard_page />} />
          <Route path='/events' element={<Event_page />} />
          {/* <Route path='/success-page' element={<SuccessPage_comp />} /> */}
          <Route path='/calendar' element={<Calender_page />} />
          <Route path='/payout' element={<Payout_page />} />
          <Route path='/guides' element={<Guides_page />} />
          <Route path='/climbers' element={<Climbers_page />} />
          <Route path='/guide-event' element={<GuideEvent_page />} />
          <Route path='/climbers-event' element={<ClimbersEvent_page />} />
          <Route path='/stats' element={<Stats_page />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
