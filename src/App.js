import './App.css';
import Navbar from './components/Common/Navbar';
import GSLDashboard from './components/GSL/GSLDashboard';
import MCDashboard from './components/MCAUS/MCDashboard';
import MDashboard from './components/MCAUS/Motion/MDashboard';
import MRegister from './components/MCAUS/Motion/MRegister';
import RCDashboard from './components/ROLLCALL/RCDashboard';
function App() {
  return (
    <div className="flex">
    <Navbar />
    <div className="flex-grow">
      <MCDashboard/>
    </div>
  </div>
  );
}

export default App;
