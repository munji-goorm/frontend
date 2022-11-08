import React from 'react';
import { DonutChart } from './DonutChart';

export const PollutantBox = () => {
	
	return (

		<div className='w-[63rem]'>
			<div className='rounded-md w-full h-96 bg-[#ffffff]'>
				<div className='p-5 pb-10 text-lg font-bold'>오염 물질</div>
				<div className='flex justify-center'>
				<DonutChart grade="좋음" value="39" name="통합대기지수" color="#549FF8"/>
				<DonutChart grade="보통" value="39" name="오존" color="#5AC451"/>
				<DonutChart grade="나쁨" value="39" name="일산화탄소" color="#F1AA3E"/>
				<DonutChart grade="좋음" value="39" name="이산화질소" color="#549FF8"/>
				<DonutChart grade="최악" value="39" name="아황산가스" color="#D5534D"/>
				</div>
			</div>
		</div>

	)
}
