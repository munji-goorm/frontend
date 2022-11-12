import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from './components/common';
import { AirPollution, LiveCam, OntheMap } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<AirPollution />} />
        <Route path="/map" element={<OntheMap />} />
        <Route path="/livecam" element={<LiveCam/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
