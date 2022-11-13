import React, { useEffect } from 'react';
import { GetLocation } from '../../apis';

export const CCTVMap = () => {

	const { kakao } = window;

	let coord = GetLocation();
	// console.log(coord);

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
		
	}, [coord]);

	return (
		<div id='kakaoMap'
			className='w-[63rem] h-[35rem] rounded-xl'>
		</div>
	);
}