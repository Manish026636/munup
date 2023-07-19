import './App.css';
import Navbar from './components/Common/Navbar';
import Dashboard from './components/Chairperson/Dashboard';
function App() {
  return (
    <div className="flex">
    <Navbar />
    <div className="flex-grow">
      <Dashboard/>
    </div>
  </div>
  );
}

export default App;
