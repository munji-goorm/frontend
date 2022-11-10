import React, { useEffect, useRef, useState } from 'react';
import UserLocation from '../apis/UserLocation';
import { DailyForecastBox, MainBox, PollutantBox, WholeAirInfoBox } from '../components/AirPollution';
import { ReactComponent as LocationIcon } from '../assets/icons/location.svg';
import { ReactComponent as DropDownArrowIcon } from '../assets/icons/dropDownArrow.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

export default function AirPollution() {
	//const userLocation = UserLocation();

	return (
		<div className='flex flex-col items-center'>
			<MainBox />
			
			<div className='w-[63rem] flex flex-row justify-between'>
				<DailyForecastBox />
				<WholeAirInfoBox />
			</div>
			<PollutantBox />
		</div>
	)
}
