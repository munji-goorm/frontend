import React from 'react';
import UserLocation from '../apis/UserLocation';
import { MainBox } from '../components/airPollution';
import { ReactComponent as LocationIcon } from '../assets/icons/location.svg';
import { ReactComponent as DropDownArrowIcon } from '../assets/icons/dropDownArrow.svg'

export default function AirPollution() {
	//const userLocation = UserLocation();

	return (
		<>
		<div className='userLocation my-5 flex justify-center'>
			<LocationIcon className='inline w-6'/>
			<div className='ml-3 mr-2 text-xl font-semibold text-[#272727]'>마포구 연남동</div>
			<DropDownArrowIcon className='inline w-6'/>
		</div>

		<MainBox/>
		</>
	)
}
