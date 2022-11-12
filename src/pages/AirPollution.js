import React from 'react';
import { DailyForecastBox, HitmapBox, MainBox, PollutantBox, WholeAirInfoBox } from '../components/AirPollution';
import { PM10Box } from '../components/AirPollution/PM10Box';

export default function AirPollution() {

	return (
		<div className='flex flex-col items-center w-full'>
			<MainBox />
			<div className='w-[63rem] flex flex-row justify-between'>
				<DailyForecastBox />
				<WholeAirInfoBox />
			</div>
			<PM10Box/>
			<div className='w-[63rem] flex flex-row justify-between'>
				<HitmapBox name="미세먼지" val="pm10"/>
				<HitmapBox name="초미세먼지" val="pm2.5"/>
			</div>
			<PollutantBox />
		</div>
	)
}
