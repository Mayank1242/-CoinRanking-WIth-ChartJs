
import './App.css';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';

function App() {
  return (
    <div className="App">
      <h1> CoinRanking Piechart</h1>
      <PieChart/> 

      <h1> CoinRanking BarChart</h1>

      <BarChart/>
    </div>
  );
}

export default App;
