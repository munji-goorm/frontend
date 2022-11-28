import React, { useEffect, useState } from 'react';
import { GetStationInfo } from '../../apis';

export const StationMap = ({ coord, name }) => {
	const { kakao } = window;
	const [map, setMap] = useState(null);
	const [marker, setMarker] = useState([]);
	const [overlay, setOverlay] = useState([]);

	let grade, val, station;

	//SouthWest 남서쪽 위도, 경도
	const [swLatlng, setSwLatLng] = useState({
		xOne: 0,
		yOne: 0,
	});

	//NorthEast 북동쪽 위도, 경도
	const [neLatlng, setNeLatLng] = useState({
		xTwo: 0,
		yTwo: 0,
	});

	station = GetStationInfo(swLatlng.xOne, neLatlng.xTwo, swLatlng.yOne, neLatlng.yTwo); //측정소 정보를 불러옵니다.

	/**맨 처음 지도 생성하기 */
	useEffect(() => {
		const container = document.getElementById('kakaoMap'); //지도를 표시할 div
		const options = {
			center: new kakao.maps.LatLng(coord.lat, coord.lng), //지도의 중심좌표
			level: 7 //지도의 확대 레벨
		};
		const kakaoMap = new kakao.maps.Map(container, options); //지도를 생성합니다.

		//지도 영역정보를 얻어옵니다 
		var bounds = kakaoMap.getBounds();
		//영역정보의 남서쪽 정보를 얻어옵니다 
		var swLatlng = bounds.getSouthWest();
		setSwLatLng({
			xOne: swLatlng.Ma, //남서쪽 위도
			yOne: swLatlng.La, //남서쪽 경도
		});
		//영역정보의 북동쪽 정보를 얻어옵니다 
		var neLatlng = bounds.getNorthEast();
		setNeLatLng({
			xTwo: neLatlng.Ma, //북동쪽 위도
			yTwo: neLatlng.La, //북동쪽 경도
		});

		// 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
		var zoomControl = new kakao.maps.ZoomControl();
		kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		// 마우스 드래그로 지도 이동이 완료되었을 때 남서쪽과 북동쪽 위도, 경도를 새로 설정합니다.
		kakao.maps.event.addListener(kakaoMap, 'dragend', function () {
			//지도 영역정보를 얻어옵니다 
			var bounds = kakaoMap.getBounds();
			//영역정보의 남서쪽 정보를 얻어옵니다 
			var swLatlng = bounds.getSouthWest();
			setSwLatLng({
				xOne: swLatlng.Ma, //남서쪽 위도
				yOne: swLatlng.La, //남서쪽 경도
			});

			//영역정보의 북동쪽 정보를 얻어옵니다 
			var neLatlng = bounds.getNorthEast();
			setNeLatLng({
				xTwo: neLatlng.Ma, //북동쪽 위도
				yTwo: neLatlng.La, //북동쪽 경도
			});
		});

		// 지도가 확대 또는 축소되면 남서쪽과 북동쪽 위도, 경도를 새로 설정합니다.
		kakao.maps.event.addListener(kakaoMap, 'zoom_changed', function () {
			//지도 영역정보를 얻어옵니다 
			var bounds = kakaoMap.getBounds();
			//영역정보의 남서쪽 정보를 얻어옵니다 
			var swLatlng = bounds.getSouthWest();
			setSwLatLng({
				xOne: swLatlng.Ma, //남서쪽 위도
				yOne: swLatlng.La, //남서쪽 경도
			});

			//영역정보의 북동쪽 정보를 얻어옵니다 
			var neLatlng = bounds.getNorthEast();
			setNeLatLng({
				xTwo: neLatlng.Ma, //북동쪽 위도
				yTwo: neLatlng.La, //북동쪽 경도
			});
		});

		setMap(kakaoMap);
	}, []);

	/**현재 위도, 경도에 따라 지도의 중심좌표, 남서쪽, 북동쪽 좌표 변경*/
	useEffect(() => {
		if (map) { //kakaoMap이 렌더링되면 실행합니다.
			/* 지도 중심좌표 이동 */
			var moveLatLon = new kakao.maps.LatLng(coord.lat, coord.lng);
			map.setCenter(moveLatLon);

			/* 지도 영역정보 얻어오기 */
			let bounds = map.getBounds();
			let swLatlng = bounds.getSouthWest(); //영역정보의 남서쪽 정보를 얻어옵니다 
			setSwLatLng({
				xOne: swLatlng.Ma, //남서쪽 위도
				yOne: swLatlng.La, //남서쪽 경도
			});
			let neLatlng = bounds.getNorthEast(); //영역정보의 북동쪽 정보를 얻어옵니다 
			setNeLatLng({
				xTwo: neLatlng.Ma, //북동쪽 위도
				yTwo: neLatlng.La, //북동쪽 경도
			});
		}
	}, [coord]);


	//남서쪽과 북동쪽 위도, 경도에 따라 보이는 지도 영역 내의 측정소 정보를 불러옵니다.
	useEffect(() => {
		for (let i = 0; i < station.length; i++) {
			//console.log(i + "번째 측정소: ");
			//console.log(station[i]);

			/* 오염 물질에 따라 등급과 수치 설정하기 */
			if (name === "CAI") {
				grade = station[i].khaiState;
				val = station[i].khaiValue;
			} else if (name === "PM10") {
				grade = station[i].pm10State;
				val = station[i].pm10Value;
			} else if (name === "PM25") {
				grade = station[i].pm25State;
				val = station[i].pm25Value;
			} else if (name === "SO2") {
				grade = station[i].so2State;
				val = station[i].so2Value;
			} else if (name === "NO2") {
				grade = station[i].no2State;
				val = station[i].no2Value;
			} else if (name === "CO") {
				grade = station[i].coState;
				val = station[i].coValue;
			} else if (name === "O3") {
				grade = station[i].o3State;
				val = station[i].o3Value;
			}

			/* 등급에 따라 마커 이미지(색상) 설정하기 */
			let imageSrc;
			if (grade === "좋음") {
				imageSrc = process.env.PUBLIC_URL + '/images/markerBlue.png';
			} else if (grade === "보통") {
				imageSrc = process.env.PUBLIC_URL + '/images/markerGreen.png';
			} else if (grade === "나쁨") {
				imageSrc = process.env.PUBLIC_URL + '/images/markerOrange.png';
			} else if (grade === "최악") {
				imageSrc = process.env.PUBLIC_URL + '/images/markerRed.png';
			} else { //점검중
				imageSrc = process.env.PUBLIC_URL + '/images/markerGray.png';
			}
			if (val === -1) {
				val = "점검중";
			}

			/* 마커와 오버레이 초기화 */
			setMarker([]);
			setOverlay([]);

			/* 마커를 생성합니다. */
			let markerData = {
				map: map, // 마커를 표시할 지도
				position: new kakao.maps.LatLng(station[i].dmX, station[i].dmY), // 마커를 표시할 위치
				title: station[i].stationName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다.
				image: new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(50, 35)),
			}
			setMarker([new kakao.maps.Marker(markerData), ...marker]);

			/* 커스텀 오버레이를 생성합니다. */
			//커스텀 오버레이에 표출될 내용입니다.(측정 수치 또는 점검중)
			let content = '<div style="color: white; font-size:1rem">' +
				`<span class="title">${val}</span>` +
				'</div>';

			let overlayData = {
				map: map,
				position: new kakao.maps.LatLng(station[i].dmX, station[i].dmY),
				content: content,
				yAnchor: 1.34
			}
			setOverlay([new kakao.maps.CustomOverlay(overlayData), ...overlay]);
		}
	}, [coord, station, name]);

	return (
		<div id='kakaoMap'
			className='w-[63rem] h-[35rem] rounded-lg'>
		</div>
	);
}
