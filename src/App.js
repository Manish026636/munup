import './App.css';
import Navbar from './components/Common/Navbar';
import Dashboard from './components/Chairperson/Dashboard';
import MCDashboard from './components/MCAUS/MCDashboard';
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
