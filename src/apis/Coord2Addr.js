import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Coord2Addr = (coord) => {
	const [fullAddr, setFullAddr] = useState("서울특별시 중구 의주로2가");
	const url = "https://dapi.kakao.com/v2/local/geo/coord2regioncode.json";
		const params = {
			x: coord.lng, //경도
			y: coord.lat, //위도
			input_coord: "WGS84",
		}
		const headers = {
			Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOMAP_API_KEY_REST}`,
		}
	const coord2addr = async () => {
		await axios.get(url, {
			params: params,
			headers: headers,
		})
		.then(function(response){
			//handle success
			console.log(response.data.documents[0].address_name);
			setFullAddr(response.data.documents[0].address_name);
		})
		.catch(function(error){
			//handle error
			console.error(error.message);
		})
	}

	useEffect(() => {
		coord2addr();
	}, [coord]);

	return fullAddr;
}
