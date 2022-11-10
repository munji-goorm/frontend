import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from './components/common';
import { AirPollution, LiveCam, OntheMap } from './pages';
import { UseGeolocation, CoordinateTM } from './apis';

function App() {
  // const location = UseGeolocation();
  // const tm = CoordinateTM();
  // console.log(tm);

  return (
    <BrowserRouter>
      <Header />
      {/* {location.loaded 
      ? JSON.stringify(location)
      : "Location data not available yet."} */}
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
