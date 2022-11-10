import React, { useEffect } from 'react';

export const MapContainer = () => {

	const { kakao } = window;

	useEffect(() => {
		const container = document.getElementById('kakaoMap'); // 지도를 표시할 div
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};
		const map = new kakao.maps.Map(container, options); // 지도를 생성합니다.
	}, []);

	return (
		<div id='kakaoMap'
			className='w-[63rem] h-[35rem] rounded-xl'>
		</div>
	);
}
