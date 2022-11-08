import React from 'react';
import UserLocation from '../apis/UserLocation';
import { DailyForecastBox, HourlyForecastBox, MainBox, PollutantBox, WholeAirInfoBox } from '../components/airPollution';
import { ReactComponent as LocationIcon } from '../assets/icons/location.svg';
import { ReactComponent as DropDownArrowIcon } from '../assets/icons/dropDownArrow.svg'

export default function AirPollution() {
	//const userLocation = UserLocation();

	return (
		<div className='flex flex-col items-center'>
			<div className='flex justify-center mt-[1rem] mb-[0.5rem] userLocation'>
				<LocationIcon className='inline w-6' />
				<div className='ml-3 mr-2 text-xl font-semibold text-[#272727]'>마포구 연남동</div>
				<DropDownArrowIcon className='inline w-6' />
			</div>

			<MainBox />
			<HourlyForecastBox />
			<div className='w-[63rem] flex flex-row justify-between'>
				<DailyForecastBox />
				<WholeAirInfoBox />
			</div>
			<PollutantBox />
		</div>
	)
}
