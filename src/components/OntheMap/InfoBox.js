import React from 'react';

export const InfoBox = () => {

	const name = "통합대기지수 CAI";
	const content = "통합대기지수는 대한민국 환경부가 6개 대기오염 측정치를 기반으로, 대기오염이 미치는 영향을 산정한 환경오염지수 입니다. CAI 지수(Comprehensive air-quality index)라고도 불리웁니다. (통합대기 지수 산출 공식은 이곳을 참고하세요). 단 통합대기지수는 미세먼지 뿐 아니라 6개 오염수치를 모두 지수 산출 대상으로 포함하기때문에, 미세먼지 지수와 비레한 수치가 나오지 않을 수있습니다.";

	return (
		<div className='rounded-xl w-[63rem] h-[20rem] bg-[#ffffff] text-[#272727]'>
			<div className='px-5 pt-5 text-lg font-semibold'>{name}</div>
			
			<div className='p-5'>{content}</div>
		</div>
	)
}
