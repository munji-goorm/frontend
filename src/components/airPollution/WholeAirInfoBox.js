import React from 'react';
import Map from '../../assets/images/KoreaMap.png';

export const WholeAirInfoBox = () => {
	return (
		<div className='w-[31rem] h-[30rem] bg-[#ffffff] rounded-md my-[0.5rem]'>
			<div className='p-5 text-lg font-bold text-[#272727]'>전국 대기 정보</div>
			<div className='flex justify-center'>
			<img className='w-[15rem]' src={Map} />
			</div>
			
		</div>
	)
}
