import { useEffect, useState } from 'react';
import axios from 'axios';

export const GetStationName = (tmX, tmY) => {
	// tm좌표기반의 근접측정소를 조회하고 측정소 이름을 가져옵니다.
	const API_KEY = process.env.REACT_APP_STATION_API_KEY;

	const [stationName, setStationName] = useState("중구");

	useEffect(() => {
		const getStationName = async () => {
			try {
				const res = await axios.get("http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getNearbyMsrstnList", {
					params: {
						serviceKey: API_KEY,
						returnType: "json",
						tmX: tmX,
						tmY: tmY,
					}
				});
				setStationName(res.data.response.body.items[0]["stationName"])
			} catch (e) {
				console.error(e.message);
			}
		};
		getStationName();
	}, [tmX, tmY])

	// 3.측정소 이름을 Backend로 전달하고 data를 가져옵니다.
	return stationName
}