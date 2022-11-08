import './App.css';
import { Header, Footer } from './components/common';
import { AirPollution } from './pages';

function App() {
  return (
    <div className="App">
      <Header/>
      <AirPollution/>
      <Footer/>
    </div>
  );
}

export default App;
