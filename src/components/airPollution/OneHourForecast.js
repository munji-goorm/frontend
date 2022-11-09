import React from 'react';
import Good from '../../assets/images/goodMunji.png';
import Usual from '../../assets/images/usualMunji.png';
import Bad from '../../assets/images/badMunji.png';
import VeryBad from '../../assets/images/veryBadMunji.png';
import { GradeButton } from './GradeButton';

export const OneHourForecast = ({ grade, icon, color }) => {

	return (
		<div className='w-[6rem] bg-orange-200 flex flex-col items-center'>
			<img className="w-16" src={icon}></img>
			<GradeButton grade={grade} color={color} />
		</div>
	)
}
