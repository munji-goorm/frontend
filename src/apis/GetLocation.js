import { useState, useEffect } from 'react';

export const GetLocation = () => {
	let lat, lng;
	// const [location, setLocation] = useState({
	// 	lat: 37.564639, //서울시 중구 측정소 위도
	// 	lng: 126.975961, //서울시 중구 측정소 경도
	// });
	const [location, setLocation] = useState();

	const onSuccess = (location) => {
		lat = location.coords.latitude;
		lng = location.coords.longitude;
		setLocation({
			lat,
			lng,
		});
		console.log("---------success geolocation API--------");
		console.log(lat, lng);
	}

	const onError = (error) => {
		console.log(error);
		alert("일시적으로 내 위치를 확인할 수 없습니다. 지역검색 버튼을 통해 원하는 지역을 선택하여 대기 오염을 확인할 수 있습니다.");
	}

	useEffect(() => {
		const { geolocation } = navigator;

		// 사용자 브라우저에서 Geolocation이 정의되지 않은 경우 오류로 처리합니다.
		if (!geolocation) {
			alert("Geolocation is not supported.");
		}

		// Geolocation API 호출
		geolocation.getCurrentPosition(onSuccess, onError, {
			enableHighAccuracy: false,
			maximumAge: 1000 * 3600 * 24, //24h
			timeout: 5000, //5sec
		});
	}, []);

	// useEffect(() => {
	// 	// 위치 권한을 허용하면
	// 	const getLocation = () => {
	// 		if (navigator.geolocation) {
	// 			navigator.geolocation.getCurrentPosition(
	// 				onSuccess, onError, {
	// 				enableHighAccuracy: false,
	// 				maximumAge: 1000 * 3600 * 24, //24h
	// 				timeout: 5000, //5sec
	// 			}
	// 			);
	// 		} else {
	// 			alert("위치 설정을 허용해주세요!");
	// 			return;
	// 		}
	// 	}
	// 	getLocation();
	// }, []);


	return location
}