import React from 'react'

export const Coord2address = () => {
	// 위도, 경도를 kakaoMap API를 통해 주소로 변환합니다.

	//let lat =
	// 사용자 위치에 해당하는 위도, 경도를 불러옵니다.

		navigator.geolocation.getCurrentPosition(function(position){
			let lat = position.coords.latitude; //위도
			let lon = position.coords.longitude; //경도
			console.log(lat, lon);
		})
	



	// 위도, 경도를 kakaoMap API를 통해 tm좌표로 변환합니다.
	const [tm, setTM] = useState();

	const API_KEY = process.env.REACT_APP_KAKAOMAP_API_KEY_REST;
	const longitude = 126.8807123; //위도
	const latitude = 37.5461726; //경도

	const url = "https://dapi.kakao.com/v2/local/geo/transcoord.json";

	const data = {
		x: longitude,
		y: latitude,
		output_coord: "TM",
	};

	const headers = {
		Authorization: `KakaoAK ${API_KEY}`,
	};

	useEffect(() => {
		const getTM = async () => {
			try {
				const res = await axios.get(url, {
					params: data,
					headers: headers
				})
				setTM(res.data.documents[0]);
			} catch (e) {
				console.error(e.message);
			}
		};
		getTM();
	}, []);

	return tm
}
