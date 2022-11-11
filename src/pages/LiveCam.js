import React from 'react';
import { MapContainer } from '../components/OntheMap';


export default function LiveCam() {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='my-[2rem] flex justify-center'>
				<MapContainer />
			</div>

			<div className='justify-center flex flex-col rounded-xl mb-[1rem] w-[63rem] h-fit text-xs text-[#838383]'>
				<span>
					* 도로교통법 145조에 의거하여 교통관제용으로 사용되는 CCTV 영상중, 도시교통정보센터 UTIC 사업으로 연결된 영상을 중심으로 제공해 드립니다.
				</span>
				<span>
					* 제공되는 스트리밍 CCTV영상은 해당 지방자치단체의 상황에 따라서 영상이 표출되지 않을수도 있으며, 시스템 점검등의 이유로 중단될 수도 있습니다.
				</span>
				<span>
					[주의] 개방데이터의 모든 CCTV영상은 해당 지역교통정보센터나 기관에서 제공하는 영상에 한해서 오픈해 드리고 있으며, 해당 영상은 수시로 중단될 수 있음을 알려드립니다.
				</span>
				<span>
					* 일부 CCTV의 경우 Internet Explorer에서만 정상작동 할 수 있습니다.
				</span>
			</div>

			<div className='mt-[1rem] w-[63rem] flex flex-col h-fit'>
				<div className='text-lg font-bold text-[#272727]'>Live Camera</div>
			</div>
			<div className='flex mt-[1rem] mb-[0.4rem] justify-between w-[63rem] h-fit items-center text-[#272727] font-medium text-base'>
				<div className='w-[19rem]'>서울</div>
				<div className='w-[19rem]'>부산</div>
				<div className='w-[19rem]'>제주</div>
			</div>

			<div className='w-[63rem] h-[10.55rem] flex justify-between'>
				
					<iframe src="https://www.youtube.com/embed/-JhoMGoAfFc?&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
					<iframe src="https://www.youtube.com/embed/VOvSvsZXZwg?&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
					<iframe src="https://www.youtube.com/embed/oEXCjWsksA8?&autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
			</div>
		</div>
	)
}