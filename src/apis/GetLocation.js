import { useState, useEffect } from 'react';

export const GetLocation = () => {
	let lat, lng;
	const [location, setLocation] = useState({
		lat: 37.584009, //서울시 중구 소공동 위도
		lng: 126.970626, //서울시 중구 소공동 경도
	});

	const onSuccess = (location) => {
		lat = location.coords.latitude;
		lng = location.coords.longitude;
		setLocation((location) => {
			return {
				...location,
				lat,
				lng,
			}
		});
	}

	const onError = (error) => {
		console.error(error);
	}

	useEffect(() => {
		// 위치 권한을 허용하면
		const getLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					onSuccess, onError, {
					enableHighAccuracy: false,
					maximumAge: 1000 * 3600 * 24, //24h
					timeout: 3000, //3sec
				}
				)
			} else {
				alert("위치 설정을 허용해주세요!")
				return;
			}
		}
		getLocation();
	}, []);

	return location
}