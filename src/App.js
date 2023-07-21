
// import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import PatientSignUp from './components/PatientSignUp';
import TabPage from './components/tabPage';
import Dashboard from './components/Dashboard';
import DoctorSignUp from './components/DoctorSignUp';
import NotFound from './components/NotFound';
import DoctorDashboard from './components/DoctorDashboard';
import PatientDashboard from './components/PatientDashboard';
import Specialities from './components/Specialities';
import Navbar from './components/Navbar';

import SideBar from './components/SideBar';
import React, { useState } from 'react';

const drawerWidth = 240;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] =useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
    
  return (
    <>    
   <Routes>
    <Route path="/" element={<Navbar handleDrawerToggle={handleDrawerToggle}/>}>
     <Route path="/" element = {<SideBar handleDrawerToggle={handleDrawerToggle} window={window} drawerWidth={drawerWidth} mobileOpen={mobileOpen}/>}>
     <Route path="/" element = {<Dashboard/> }/>
     <Route path="/Doctors" element={<DoctorDashboard/>}/>
      <Route path="/Patient" element={<PatientDashboard/>}/>
      <Route path ="/specialities" element={<Specialities/>}/>
     </Route>
    <Route path="/auth" element={<TabPage/>} >
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<PatientSignUp/>}/>
      <Route path = "doctor-register" element={<DoctorSignUp/>}/>
      </Route> 
      </Route>
      <Route path="*" element={<NotFound/>}/>
   </Routes>
   </>
  );
}

export default App;
