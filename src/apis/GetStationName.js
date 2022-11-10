import { useEffect, useState } from 'react';
import axios from 'axios';
import { json } from 'react-router-dom';

export const GetStationName = (tmX, tmY) => {

	//const KAKAO_API_KEY = process.env.REACT_APP_KAKAOMAP_API_KEY_REST;

	const OPEN_API_KEY = process.env.REACT_APP_STATION_API_KEY;

	const [stationName, setStationName] = useState("중구");

	// 1. 받아온 위도, 경도를 kakaoMap API를 통해 tm좌표로 변환합니다.
	// const [tm, setTM] = useState({
	// 	tmX: 198167.420154385, //중구
	// 	tmY: 451311.01317975856, //중구
	// });
	
	// useEffect(() => {
	// 	const getTM = async () =>{
	// 		try {
	// 			const res = await axios.get("https://dapi.kakao.com/v2/local/geo/transcoord.json", {
	// 				params: {
	// 					x: coord.lng, //경도
	// 					y: coord.lat, //위도
	// 					output_coord: "TM",
	// 				},
	// 				headers: {
	// 					Authorization: `KakaoAK ${KAKAO_API_KEY}`,
	// 				}
	// 			});
	// 			console.log("tm좌표");
	// 			console.log(res.data.documents[0]["x"], res.data.documents[0]["y"]);
	// 			setTM({
	// 				tmX: res.data.documents[0]["x"],
	// 				tmY: res.data.documents[0]["y"],
	// 			});
	// 		} catch (e) {
	// 			console.error(e.message);
	// 		}
	// 	};
	// 	getTM();
	// }, []);

	// 2.tm좌표기반의 근접측정소를 조회하고 측정소 이름을 가져옵니다.
	useEffect(()=>{
		const getStationName = async () => {
			try {
				const res = await axios.get("http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getNearbyMsrstnList", {
					params: {
						serviceKey: OPEN_API_KEY,
						returnType: "json",
						tmX: tmX,
						tmY: tmY,
					}
				});
				setStationName(res.data.response.body.items[0]["stationName"])
				console.log("받은");
				console.log(tmX, tmY);
			} catch(e) {
				console.error(e.message);
			}
		};
		getStationName();
	}, [tmX, tmY])

	// 3.측정소 이름을 Backend로 전달하고 data를 가져옵니다.
	return stationName
}
