import React, { useState } from 'react';
import { DonutChart } from './DonutChart';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';

export const PM10Box = () => {
	const [isHoveringKor, setIsHoveringKor] = useState(false);
	const [isHoveringWHO, setIsHoveringWHO] = useState(false);

	return (
		<div className='w-[63rem] h-[23rem] text-[#272727] bg-[#ffffff] rounded-md my-[0.5rem]'>
			<div className='px-5 mt-5 mb-4 text-lg font-bold '>미세먼지</div>
			<div className='flex justify-between'>
				<div className='flex items-center mx-5 mb-5 w-[28rem]'>
					<div className='font-semibold'>
						국내 기준
					</div>
					<div className='mx-2'>
						<div className='relative w-[20rem]'>
							<InfoIcon className='hover:cursor-pointer'
							onMouseOver={() => setIsHoveringKor(true)}
							onMouseOut={() => setIsHoveringKor(false)}/>
							{isHoveringKor ?
								<div className='drop-shadow-md absolute -top-3 left-10 z-10 rounded-md w-fit h-fit bg-[#ffffff]'>
									<div className='p-2 text-xs leading-5'>
										한국에서는 WHO에 비해 낮은 기준치를 사용합니다.
									</div>
								</div>
								:
								<></>
							}
						</div>
					</div>
				</div>
				<div className='flex items-center mx-5 mb-5 w-[28rem]'>
					<div className='font-semibold'>
						WHO
					</div>
					<div className='mx-2'>
						<div className='relative w-[20rem]'>
							<InfoIcon className='hover:cursor-pointer'
							onMouseOver={() => setIsHoveringWHO(true)}
							onMouseOut={() => setIsHoveringWHO(false)}/>
							{isHoveringWHO ?
								<div className='drop-shadow-md absolute -top-5 left-10 z-10 rounded-md w-fit h-fit bg-[#ffffff]'>
									<div className='p-2 text-xs leading-5'>
										WHO 세계건강보건기구의 권고치 기준입니다. <br/>
										자세한 등급은 "지도로 보기"에서 확인하실 수 있습니다.
									</div>
								</div>
								:
								<></>
							}
						</div>
					</div>
				</div>
			</div>
			<div className='flex justify-center'>
				<DonutChart grade="좋음" value="39" name="미세먼지" color="#549FF8" />
				<DonutChart grade="보통" value="39" name="초미세먼지" color="#5AC451" />
				<DonutChart grade="나쁨" value="39" name="미세먼지" color="#F1AA3E" />
				<DonutChart grade="좋음" value="39" name="초미세먼지" color="#549FF8" />
			</div>
		</div>
	)
}
