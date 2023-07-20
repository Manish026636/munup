import './App.css';
import Navbar from './components/Common/Navbar';
import Dashboard from './components/Chairperson/Dashboard';
import MCDashboard from './components/MCAUS/MCDashboard';
import GSLDashboard from './components/GSL/GSLDashboard';
import TimeFedModal from './components/GSL/TimeFedModal';
function App() {
  return (
    <div className="flex">
    <Navbar />
    <div className="flex-grow">
      <GSLDashboard/>
    </div>
  </div>
  );
}

export default App;
