import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from './components/common';
import { AirPollution, LiveCam, OntheMap } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={
            <AirPollution />
        } />
        <Route path="/airmap" element={<OntheMap />} />
        <Route path="/livecam" element={<LiveCam />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function TestContext() {
  const value = useContext(Context);
  return <div>Received: {value}</div>;
}

export default App;
