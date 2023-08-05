import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Common/Sidebar';
import Dashboard from './components/Chairperson/Dashboard';
import MCDashboard from './components/MCAUS/MCDashboard';
import GSLDashboard from './components/GSL/GSLDashboard';
import TimeFedModal from './components/GSL/TimeFedModal';
import RCDashboard from './components/ROLLCALL/RCDashboard';
import MRegister from './components/MCAUS/Motion/MRegister';
import MDashboard from './components/MCAUS/Motion/MDashboard';
import VDashboard from './components/MCAUS/Voting/VDashboard';
import Layout from './components/Common/Layout';
import Sideb from './components/Common/Sideb';
function App() {
  return (
    
     <>
     <Layout/>
     </>
  );
}

export default App;
