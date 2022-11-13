import React, { useEffect } from 'react';
import { GetLocation } from '../../apis';

export const StationMap = () => {

	const { kakao } = window;

	let coord = GetLocation();
	// console.log(coord);

	// 마커를 표시할 위치와 title 객체 배열입니다 
	var positions = [
		{
			title: '선유도공원',
			latlng: new kakao.maps.LatLng(37.5444, 126.8999),
		},
		{
			title: '양화한강공원',
			latlng: new kakao.maps.LatLng(37.5395, 126.9018)
		}
	];

let val = 12;

let val2 = 0.059;

var content = [
	{
		ctn: '<div style="color: white; font-size:1rem">' +
		`    <span class="title">${val}</span>` +
		'</div>'
	}, 
	{
		ctn: '<div style="color: white; font-size:1rem">' +
		`    <span class="title">${val2}</span>` +
		'</div>'
	}
]

	// 마커 이미지의 이미지 주소입니다
	var imageSrc = process.env.PUBLIC_URL + '/images/markerblue.png';
	// 마커 이미지의 이미지 크기 입니다
	var imageSize = new kakao.maps.Size(50, 35);

	// 마커 이미지를 생성합니다
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);


	// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	// var content = '<div style="color: white; font-size:1rem">' +
	// 	`    <span class="title">${val}</span>` +
	// 	'</div>';


	useEffect(() => {
		const container = document.getElementById('kakaoMap'); // 지도를 표시할 div
		const options = {
			center: new kakao.maps.LatLng(37.584009, 126.970626), // 지도의 중심좌표
			level: 6 // 지도의 확대 레벨
		};
		const map = new kakao.maps.Map(container, options); // 지도를 생성합니다.

		// 이동할 위도 경도 위치를 생성합니다
		var moveLatLon = new kakao.maps.LatLng(coord.lat, coord.lng);
		// 지도 중심을 이동 시킵니다
		map.setCenter(moveLatLon);


		for (var i = 0; i < positions.length; i++) {
			var marker = new kakao.maps.Marker({
				map: map, // 마커를 표시할 지도
				position: positions[i].latlng, // 마커를 표시할 위치
				title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다.
				image: markerImage,
			});

			// 커스텀 오버레이를 생성합니다
			var customOverlay = new kakao.maps.CustomOverlay({
				map: map,
				position: positions[i].latlng,
				content: content[i].ctn,
				yAnchor: 1.34
			});

		}

	}, [coord]);

	return (
		<div id='kakaoMap'
			className='w-[63rem] h-[35rem] rounded-xl'>
		</div>
	);
}
