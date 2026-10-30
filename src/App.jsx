import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Library from './pages/Library.jsx'
import LandingPage from './pages/LandingPage.jsx'
import StudyArea from './pages/StudyArea.jsx'
import Contributor from './pages/Contributor.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/login' element={<Login/>}/>
        
        {/* The Layout wraps all workspace pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="library" element={<Library />} />
          <Route path ="study-area" element={<StudyArea/>}/>
          <Route path ="contribute" element={<Contributor/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App