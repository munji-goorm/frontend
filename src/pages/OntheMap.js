import React, { useRef, useState } from 'react'
import { InfoBox, MapContainer } from '../components/OntheMap';

export default function Map() {
	const [currentBtn, setCurrentBtn] = useState("CAI");
	let pollutantBtn = useRef();

	
	return (
		<div className='flex flex-col items-center'>
			<div className='relative my-[2rem] flex justify-center'>
				<MapContainer />
				<div ref={pollutantBtn} className='z-10 right-[1rem] top-[1rem] rounded-lg absolute w-[4rem] h-fit bg-[#ffffff] drop-shadow-lg text-[#272727]'>
					<button className='hover:text-[#ffffff] hover:bg-[#272727] text-[#ffffff] bg-[#272727] z-20 py-0.5 w-[4rem] rounded-md h-1/7'
					onClick={() => setCurrentBtn("CAI")}>
						<div>
							CAI
						</div>
					</button>
					<button className='hover:text-[#ffffff] hover:bg-[#272727] text-[#838383] z-20 py-0.5 w-[4rem] rounded-md h-1/7'
					onClick={() => setCurrentBtn("PM10")}
					>
						PM<span className='text-xs'>10</span>
					</button>
					<button className='hover:text-[#ffffff] hover:bg-[#272727] text-[#838383] z-20 py-0.5 w-[4rem] rounded-md h-1/7'
					onClick={() => setCurrentBtn("PM25")}
					>
						PM<span className='text-xs'>2.5</span>
					</button>
					<button className='hover:text-[#ffffff] hover:bg-[#272727] text-[#838383] z-20 py-0.5 w-[4rem] rounded-md h-1/7'
					onClick={() => setCurrentBtn("SO2")}
					>
						SO<span className='text-xs'>2</span>
					</button>
					<button className='hover:text-[#ffffff] hover:bg-[#272727] text-[#838383] z-20 py-0.5 w-[4rem] rounded-md h-1/7'
					onClick={() => setCurrentBtn("NO2")}
					>
						NO<span className='text-xs'>2</span>
					</button>
					<button className='hover:text-[#ffffff] hover:bg-[#272727] z-20 text-[#838383] py-0.5 w-[4rem] rounded-md h-1/7'
					onClick={() => setCurrentBtn("CO")}
					>
						CO
					</button>
					<button className='hover:text-[#ffffff] hover:bg-[#272727] text-[#838383] z-20 py-0.5 w-[4rem] rounded-md h-1/7'
					onClick={() => setCurrentBtn("O3")}
					>
						O<span className='text-xs'>3</span>
					</button>
				</div>
			</div>
			<InfoBox name='CAI' />
		</div>
	)
}