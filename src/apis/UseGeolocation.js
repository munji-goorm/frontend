import { useState, useEffect } from 'react';

export const UseGeolocation = () => {

	const [coord, setCoord] = useState({
		lat: 37.584009, //서울시 중구 소공동 위도
		lng: 126.970626, //서울시 중구 소공동 경도
	})

		// 사용자 위치에 해당하는 위도, 경도를 불러옵니다.
		useEffect(()=>{
			navigator.geolocation.getCurrentPosition(function(position){
				let lat = position.coords.latitude;
				let lng = position.coords.longitude;
				// console.log(lat, lng);
				setCoord({
					lat: lat,
					lng: lng,
				})
			})
		}, []);

		return coord

	

	// const [location, setLocation] = useState({
	// 	loaded: false,
	// 	coordinates: {
	// 		lat: 0,
	// 		lng: 0,
	// 	}
	// });

	// // success
	// const onSuccess = (location) => {
  //   setLocation({
  //     loaded: true,
  //     coordinates: {
  //       lat: location.coords.latitude, //위도
  //       lng: location.coords.longitude, //경도
  //     }
  //   })
  // }

	// // error
	// const onError = (error) => {
	// 	setLocation({
	// 		loaded: true,
	// 		error
	// 	})
	// }

	// useEffect(() => {
	// 	// navigator 객체 안에  geolocation이 없다면
	// 	// 위치 정보가 존재하지 않는 것입니다.
	// 	if(!("geolocation" in navigator)) {
	// 		onError({
	// 			code: 0,
	// 			message: "Geolocation not supported",
	// 		})
	// 	}
	// 	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	// }, [])

	// return location;
}
