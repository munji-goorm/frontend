import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from './components/common';
import { AirPollution } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<AirPollution />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
