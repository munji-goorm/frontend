import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

export const DonutChart = ({ grade, value, name, color }) => {

	return (
		<div className='relative flex flex-col mx-10 w-44'>
			<PieChart
				data={[
					{
						grade: grade,
						value: value,
						color: color,
					},
				]}
				reveal={39} //퍼센트 치수
				lineWidth={30} //도넛 두께
				background="#f5f6f9"
				startAngle={270}
				lengthAngle={360}
				rounded
				animate
				label={({ dataEntry }) => dataEntry.grade}
				labelStyle={{
					fontSize: "18px",
				}}
				labelPosition={-20}
			/>

			<div className='mt-5 font-semibold text-[#272727] text-center'>{name}</div>
			<div className='relative text-lg text-[#272727] text-center bottom-24'>{value}</div>

		</div>
	)
}
