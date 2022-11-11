import React from 'react'
import { InfoBox, MapContainer } from '../components/OntheMap';

export default function Map() {
	return (
		<div className='flex flex-col items-center'>
			<div className='my-[2rem] flex justify-center'>
				<MapContainer />
			</div>
			<InfoBox name='CAI'/>
		</div>
	)
}
