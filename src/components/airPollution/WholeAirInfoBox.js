import React from 'react';
import Map from '../../assets/images/KoreaMap.png';
import { RegionAirBtn } from './RegionAirBtn';

export const WholeAirInfoBox = () => {
	const value = 62;
	const color = "#D5534D";

	return (
		<div className='relative w-[31rem] h-[30rem] bg-[#ffffff] rounded-md my-[0.5rem]'>
			<div className='p-5 text-lg font-bold text-[#272727]'>전국 대기 정보</div>
			<div className='flex justify-center'>
				<img className='w-[16rem]' src={Map} />
			</div>
			<div className='absolute w-12 h-12 left-[10rem] bottom-[20.2rem]'>
				<RegionAirBtn region="서울" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[7rem] bottom-[18rem]'>
				<RegionAirBtn region="인천" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[12rem] bottom-[17.5rem]'>
				<RegionAirBtn region="경기" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[16rem] bottom-[20rem]'>
				<RegionAirBtn region="강원" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[11rem] bottom-[14.5rem]'>
				<RegionAirBtn region="세종" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[8rem] bottom-[13rem]'>
				<RegionAirBtn region="충남" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[14.7rem] bottom-[15.4rem]'>
				<RegionAirBtn region="충북" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[18rem] bottom-[14rem]'>
				<RegionAirBtn region="경북" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[20rem] bottom-[11rem]'>
				<RegionAirBtn region="울산" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[13rem] bottom-[12rem]'>
				<RegionAirBtn region="대전" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[16.5rem] bottom-[10.5rem]'>
				<RegionAirBtn region="대구" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[10rem] bottom-[9.5rem]'>
				<RegionAirBtn region="전북" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[7rem] bottom-[7rem]'>
				<RegionAirBtn region="광주" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[11rem] bottom-[5.5rem]'>
				<RegionAirBtn region="전남" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[15rem] bottom-[7.5rem]'>
				<RegionAirBtn region="경남" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[18.5rem] bottom-[7rem]'>
				<RegionAirBtn region="부산" value={value} color={color} />
			</div>
			<div className='absolute w-12 h-12 left-[9rem] bottom-[2rem]'>
				<RegionAirBtn region="제주" value={value} color={color} />
			</div>
		</div>
	)
}
