import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './pages/Admin/DashBoard';
import AllApointment from './pages/Admin/AllApointment';
import AddDoctor from './pages/Admin/AddDoctor';
import DcoctorsList from './pages/Admin/DcoctorsList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointment from './pages/Doctor/doctorAppointment';
import DoctorProfile from './pages/Doctor/DoctorProfile';

function App() {

  const {aToken} = useContext(AdminContext);
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
      <Sidebar />
        <Routes>
          {/* admin route */}
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<DashBoard />} />
          <Route path='/all-apointments' element={<AllApointment />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/doctor-list' element={<DcoctorsList />} />

          {/* doctor route */}
          <Route path='/doctor-dashbord' element={<DoctorDashboard />} />  
          <Route path='/doctor-appointments' element={<DoctorAppointment />} />  
          <Route path='/doctor-profile' element={<DoctorProfile />} />  
        </Routes>
      </div>
    </div>
  ) : (
    <div>
      <Login/>
      <ToastContainer />
    </div>
  )
}

export default App
