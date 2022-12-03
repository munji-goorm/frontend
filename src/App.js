import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from './components/common';
import { AirPollution, LiveCam, OntheMap } from './pages';
import { useEffect, useState } from 'react';
import { Coord2Addr, GetLocation, GetMainData } from './apis';

function App() {
  const [coord, setCoord] = useState({ //위도, 경도
    lat: 37.5607179, //서울시 중구 의주로2가 위도
    lng: 126.9695899, //서울시 중구 의주로2가 경도
  });
  const [shortAddr, setShortAddr] = useState("중구 의주로2가"); //지역(xx구 oo동)
  const [fullAddr, setFullAddr] = useState("서울특별시 중구 의주로2가");
  
  //let addr = Coord2Addr(coord);
  let stationData = GetMainData(fullAddr); //현재 위치에서 근접측정소의 대기오염정보
  
  // useEffect(()=> {
  //   setFullAddr(addr);
  // }, []);

  /* 현재 지역 변경 */
  useEffect(() => {
    setShortAddr(stationData.stationInfo.shortAddr);
    //setFullAddr(addr)
  }, [stationData]);

  return (
    <BrowserRouter>
      <Header shortAddr={shortAddr} setShortAddr={setShortAddr} setFullAddr={setFullAddr} coord={coord} setCoord={setCoord} />
      <Routes>
        <Route exact path="/" element={
          <AirPollution stationData={stationData}/>
        } />
        <Route path="/airmap" element={
        <OntheMap coord={coord}/>} />
        <Route path="/livecam" element={
        <LiveCam coord={coord}/>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;