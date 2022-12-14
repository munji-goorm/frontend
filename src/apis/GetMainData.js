import { useEffect, useState } from 'react';
import axios from 'axios';

export const GetMainData = (fullAddr) => {
	const endpoint = '/main';

	/* 대기 오염 데이터  */
	const [pollutantData, setPollutantData] = useState({
		forecast: { //주간 예보
		},
		nationwide: { //전국 대기 정보 등급
		},
		stationInfo: { //해당 측정소의 대기 오염 측정 정보 
		},
		nationwideValue: { //전국 대기 정보 수치
		}
	});

	/* call Ajax */
	const getPollutantData = async () => {
		await axios.get(endpoint, {
			params: {
				fullAddr: fullAddr
			}
		})
		.then(function(response){
			//handle success
			setPollutantData(response.data.data);
		})
		.catch(function(error) {
			//handle error
			alert("서버 오류로 대기오염 정보를 가져오지 못했습니다.");
			console.log(error.message);
		})
	}

	useEffect(() => {
		getPollutantData();
	}, [fullAddr]);

	return pollutantData
}