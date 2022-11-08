import React from 'react';
import AppIcon from '../../assets/images/goodMunji.png';

export default function header() {
	return (
		<div className='flex flex-col h-[4rem] items-center justify-center bg-white outline outline-1 outline-[#cccccc]'>
			<div className='flex flex-row w-[63rem] h-[3rem]items-center justify-between'>
				<div className='flex flex-row items-center'>
					<img className="inline w-10" alt="appIcon" src={AppIcon}></img>
					<span className='font-Kyobo px-2 text-2xl text-[#272727]'>먼지구름</span>
				</div>

				<div className='flex flex-row items-center'>
					<button className='h-[2rem] px-[0.7rem] flex items-center font-semibold text-[#272727]'>대기오염 현황</button>
					<button className='h-[2rem] px-[0.7rem] flex items-center font-base text-[#838383]'>지도로 보기</button>
					<button className='h-[2rem] px-[0.7rem] flex items-center font-base text-[#838383]'>실시간 영상</button>

				</div>
			</div>

		</div>


	)
}