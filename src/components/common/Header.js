import React from 'react';
import AppIcon from '../../assets/images/goodMunji.png';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

export default function header() {
	return (
		<div className='flex justify-between px-56 py-4 w-full h-30 bg-white outline outline-1 outline-[#cccccc]'>
			<div className='appTitle'>
				<img className="w-10 inline" alt="appIcon" src={AppIcon}></img>
				<span className='font-Kyobo px-2 text-2xl text-[#272727]'>먼지구름</span>
			</div>

			<div className='menu'>
				<div className='px-10 inline-block align-middle'>
				<button className='mx-3 font-semibold text-[#272727]'>대기오염 현황</button>
				<button className='mx-3 font-semibold text-[#838383]'>지도로 보기</button>
				<button className='mx-3 font-semibold text-[#838383]'>실시간 영상</button>
				</div>
				<MenuIcon className='inline w-5'/>
			</div>
		</div>

		
	)
}