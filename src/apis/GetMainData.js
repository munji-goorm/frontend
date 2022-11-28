import { useEffect, useState } from 'react';
import axios from 'axios';

export const GetMainData = (lat, lng) => {
	const url = process.env.REACT_APP_BACKEND_URL;
	const endpoint = '/main';

	const [pollutantData, setPollutantData] = useState({
		forecast: {
		},
		nationwide: {
		},
		stationInfo: {
		},
		nationwideValue: {
		}
	});

	const getPollutantData = async () => {
		axios.get(url + endpoint, {
			params: {
				latitude: lat,
				longitude: lng
			}
		})
		.then(function(response){
			// handle success
			console.log("-----------called GetMainData-----------");
			console.log(response.data.data);
			setPollutantData(response.data.data);
		})
		.catch(function(error) {
			// alert("대기오염 정보를 가져오지 못했습니다.");
			console.log(error.message);
		})
	}

	useEffect(() => {
		getPollutantData();
	}, [lat, lng])
	return pollutantData
}