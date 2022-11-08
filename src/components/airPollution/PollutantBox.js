import React from 'react';
import { DonutChart } from './DonutChart';

export const PollutantBox = () => {

	return (

		<div className='w-[63rem] h-[23rem] bg-[#ffffff] rounded-md my-[0.5rem]'>

			<div className='p-5 pb-10 text-lg font-bold text-[#272727]'>오염 물질</div>
			<div className='flex justify-center'>
				<DonutChart grade="좋음" value="39" name="통합대기지수" color="#549FF8" />
				<DonutChart grade="보통" value="39" name="오존" color="#5AC451" />
				<DonutChart grade="나쁨" value="39" name="일산화탄소" color="#F1AA3E" />
				<DonutChart grade="좋음" value="39" name="이산화질소" color="#549FF8" />
				<DonutChart grade="최악" value="39" name="아황산가스" color="#D5534D" />
			</div>
		</div>


	)
}
