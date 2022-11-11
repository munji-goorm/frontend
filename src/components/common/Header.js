import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../../assets/images/goodMunji.png';
import { ReactComponent as LocationIcon } from '../../assets/icons/location.svg';
import { ReactComponent as DropDownArrowIcon } from '../../assets/icons/dropDownArrow.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { Coord2address, Coord2TM, GetLocation } from '../../apis';

export default function Header() {
	const [searchBtn, setSearchBtn] = useState(true);
	const header = useRef();
	
	let coord = GetLocation();
	//console.log(coord);

	let addr = Coord2address(coord);
	//console.log(addr);
	
	useEffect(() => {
		// 이벤트 핸들러 함수
		const handler = (e) => {
			// mousedown 이벤트가 발생한 영역이 검색창이 아닐 때, default UI로 변경
			if (header.current && !header.current.contains(e.target)) {
				setSearchBtn(true);
			}
		}

		// 이벤트 핸들러 등록
		document.addEventListener('mousedown', handler);

		return () => {
			// 이벤트 핸들러 해제
			document.removeEventListener('mousedown', handler);
		}
	});

	return (
		<>
			{searchBtn
				?
				<div className='w-full h-[4rem]'>
					<div className='fixed z-10 flex flex-col h-[4rem] w-full items-center justify-center bg-white outline outline-1 outline-[#cccccc]'>
						<div className='flex flex-row w-[63rem] h-[3rem]items-center justify-between'>
							<div className='flex flex-row items-center'>
								<img className="inline w-10" alt="appIcon" src={AppIcon}></img>
								<Link to='/'>
									<span className='font-Kyobo px-2 text-2xl text-[#272727]'>먼지구름</span>
								</Link>
							</div>

							<div className='ml-[11rem] flex items-center'>
								<button onClick={() => {
									window.location.reload();
								}}>
									<LocationIcon className='inline w-6' />
								</button>
								<div className='ml-3 mr-2 text-xl font-semibold text-[#272727]'>{addr}</div>
									
								<button onClick={() => {
									setSearchBtn(!searchBtn)
								}} className="searchBtn">
									<DropDownArrowIcon className='inline w-6' />
								</button>
							</div>

							<div className='flex flex-row items-center'>
								<Link to="/">
									<button
										className='h-[2rem] px-[0.7rem] flex items-center font-semibold text-[#272727]'
										onClick={(e) => { }}
									>대기오염 현황</button>
								</Link>
								<Link to="/map">
									<button className='h-[2rem] px-[0.7rem] flex items-center font-base text-[#838383]'>지도로 보기</button>
								</Link>
								<Link to="/livecam">
									<button className='h-[2rem] px-[0.7rem] flex items-center font-base text-[#838383]'>실시간 영상</button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				:
				<div ref={header} className='w-full h-[4rem]'>
					<div className='fixed z-10 flex flex-col h-[4rem] w-full items-center justify-center bg-white outline outline-1 outline-[#cccccc]'>
						<div className='flex flex-row w-[63rem] h-[3rem]items-center justify-between'>
							<div className='flex flex-row items-center'>
								<img className="inline w-10" alt="appIcon" src={AppIcon}></img>
								<Link to='/'>
									<span className='font-Kyobo px-2 text-2xl text-[#272727]'>먼지구름</span>
								</Link>
							</div>

							<div className='ml-[11rem] flex items-center'>
								<LocationIcon className='inline w-6' />
								<div className='ml-3 mr-2 text-xl font-semibold text-[#272727]'>{addr}</div>
								<button onClick={() => {
									setSearchBtn(!searchBtn)
								}} className="searchBtn">
									<DropDownArrowIcon className='inline w-6 rotate-180' />
								</button>
							</div>

							<div className='flex flex-row items-center'>
								<Link to="/">
									<button
										className='h-[2rem] px-[0.7rem] flex items-center font-semibold text-[#272727]'
										onClick={(e) => { }}
									>대기오염 현황</button>
								</Link>
								<Link to="/map">
									<button className='h-[2rem] px-[0.7rem] flex items-center font-base text-[#838383]' >지도로 보기</button>
								</Link>
								<Link to="/livecam">
									<button className='h-[2rem] px-[0.7rem] flex items-center font-base text-[#838383]'>실시간 영상</button>
								</Link>
							</div>
						</div>
					</div>

					<div className='flex justify-center fixed top-[4rem] z-20 w-full h-[25rem] bg-[#ffffff]'>
						<div className='flex items-center w-[58rem] h-[3rem] bg-[#f4f4f4] rounded-3xl'>
							<SearchIcon className='ml-4' />
							<input type="text" placeholder="지역으로 검색하세요."
								className='bg-[#f4f4f4] w-[53rem] outline-none ml-2' />
						</div>
					</div>
				</div>
			}
		</>
	)
}