import React, { useState, useEffect } from 'react';
import { DailyForecastBox, HitmapBox, MainBox, PollutantBox, WholeAirInfoBox } from '../components/AirPollution';
import { PM10Box } from '../components/AirPollution/PM10Box';
import { GetLocation, Coord2TM, GetMainData } from '../apis';

export default function AirPollution() {
	let coord = GetLocation();
	let tm = Coord2TM(coord);
	let stationData = GetMainData(tm.tmX, tm.tmY);
	let stationInfo = stationData.stationInfo;
	//console.log(stationData);
	console.log(stationInfo);
	let grade = stationInfo.khaiState;
	let dateTime = stationInfo.dateTime;
	let forecast = stationData.forecast;
	let nationwide = stationData.nationwide;

	return (
		<div className='flex flex-col items-center w-full'>
			<MainBox grade={grade} dateTime={dateTime}/>
			<div className='w-[63rem] flex flex-row justify-between'>
				<DailyForecastBox forecast={forecast}/>
				<WholeAirInfoBox nationwide={nationwide}/>
			</div>
			<PM10Box stationInfo={stationInfo}/>
			<div className='w-[63rem] flex flex-row justify-between'>
				<HitmapBox name="미세먼지" val="pm10"/>
				<HitmapBox name="초미세먼지" val="pm2.5"/>
			</div>
			<PollutantBox stationInfo={stationInfo}/>
		</div>
	)
}
