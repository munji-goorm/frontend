import React from 'react';
import { OneHourForecast } from './OneHourForecast';
import Good from '../../assets/images/goodMunji.png';
import Usual from '../../assets/images/usualMunji.png';
import Bad from '../../assets/images/badMunji.png';
import VeryBad from '../../assets/images/veryBadMunji.png';

export const HourlyForecastBox = () => {
	const goodGrade = "좋음";
	const goodIcon = Good;
	const goodColor = "#549FF8";

	const usualGrade = "보통";
	const usualIcon = Usual;
	const usualColor = "#5AC451";

	const badGrade = "나쁨";
	const badIcon = Bad;
	const badColor = "#F1AA3E";

	const veryBadGrade = "최악";
	const veryBadIcon = VeryBad;
	const veryBadColor = "#D5534D";

	const grade = badGrade;
	const icon = badIcon;
	const color = badColor;

	return (
		<div className='w-[63rem] h-[15rem] bg-[#ffffff] rounded-md my-[0.5rem]'>
				<div className='p-5 pb-10 text-lg font-bold text-[#272727]'>시간별 예보</div>
				<OneHourForecast grade={grade} icon={icon} color={color}/>
		</div>
	)
}
