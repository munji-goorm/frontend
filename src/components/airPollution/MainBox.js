import React, { useState } from 'react';
import VeryBad from '../../assets/images/veryBadMunji.png';
import { ReactComponent as SpeechBubble } from '../../assets/icons/speechBubble.svg';
import { ReactComponent as Mask } from '../../assets/icons/mask.svg';
import { ReactComponent as Outdoor } from '../../assets/icons/outdoorActivity.svg';
import { ReactComponent as SensitiveGroup } from '../../assets/icons/sensitiveGroup.svg';
import { ReactComponent as Airout } from '../../assets/icons/airout.svg';

import { InstructionBox } from './InstructionBox';

export const MainBox = () => {
	/* 행동요령 */
	const veryBadInstruction = {
		mask: "필수",
		sensitiveGroup: "착용권고",
		outdoor: "자제",
		airOut: "최소한만"
	}

	const [CAIstate, setCAIstate] = useState({
		grade: "매우 나쁨",
		msg: "오늘은 나가지마세요!!",
		icon: <img className="inline w-24" alt="appIcon" src={VeryBad}></img>,
	});

	return (
		<div className='w-[63rem] h-[26.15rem]'>
			<div className='rounded-md w-full h-96 bg-[#D5534D]'>
				<div className='relative mainInfo'>
					<div className='flex justify-center py-10'>
						<div className='px-3'>{CAIstate.icon}</div>
						<div className='px-6 py-6 font-Kyobo text-5xl text-center text-[#ffffff]'>{CAIstate.grade}</div>
					</div>

					<div className='justify-center speechBubble'>
						<div className='relative flex justify-center bottom-10'>
							<SpeechBubble />
							<div className='absolute text-2xl font-Kyobo top-5 text-[#ffffff]'>
								{CAIstate.msg}
							</div>
						</div>
					</div>
				</div>

				<div className='flex justify-center my-4 instructions'>
					<InstructionBox icon={<Mask/>} title="마스크" msg="필수" className='mx-10'/>
					<InstructionBox icon={<SensitiveGroup/>} title="민감군" msg="착용권고"/>
					<InstructionBox icon={<Outdoor/>} title="야외활동" msg="지장없음"/>
					<InstructionBox icon={<Airout/>} title="환기" msg="최소한만"/>
				</div>


			</div>
		</div>
	)
}
