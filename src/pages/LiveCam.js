import React, { useEffect } from 'react';
import { Coord2TM, GetStationName, UseGeolocation } from '../apis';


export default function LiveCam() {
	
	const coord = UseGeolocation();
	console.log("위경도");
	console.log(coord);
	
	const tm = Coord2TM(coord);
	console.log("tm 좌표");
	console.log(tm);

	const stationName = GetStationName(tm.tmX, tm.tmY);
	console.log(stationName);
	console.log("-------------------");

	return (
		<div className='text-2xl'>{stationName}</div>
	)
}
