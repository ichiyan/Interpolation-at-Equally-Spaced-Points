import './App.css';
import Calculator from './pages/Calculator';
import Topnav from './pages/Topnav';
import Introduction from './pages/Introduction';
import Result from './pages/Result';

function App() {
  return (
    <div className="App">
      <Topnav />
      <Calculator />
    </div>
    
  );
}

export default App;
