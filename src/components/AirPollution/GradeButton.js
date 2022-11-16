import React from 'react';

export const GradeButton = ({grade, color}) => {
	return (
		<div style={{backgroundColor: color}} className='flex items-center justify-center w-16 text-center rounded-md h-9'>
			<div className='font-Kyobo text-2xl text-[#ffffff]'>{grade}</div>
			
			</div>
	)
}
