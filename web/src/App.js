import './App.css';
import HumidityTime from './components/Charts/HumidityTime/HumidityTime';
import TemperatureTime from './components/Charts/TemperatureTime/TemperatureTime';
import VelocityTime from './components/Charts/VelocityTime/VelocityTime';

function App() {
  return (
    <div className="App">
      <VelocityTime />
      <TemperatureTime />
      <HumidityTime />
    </div>
  );
}

export default App;
