import React, { useEffect, useState } from 'react';
import { GradeBox } from './GradeBox';
import AppIcon from '../../assets/images/goodMunji.png';

export const InfoBox = ({name}) => {

	const [info, setInfo] = useState({
		name: "통합대기지수 CAI",
		content: "통합대기지수는 대한민국 환경부가 6개 대기오염 측정치를 기반으로, 대기오염이 미치는 영향을 산정한 환경오염지수 입니다. CAI 지수(Comprehensive air-quality index)라고도 불리웁니다. (통합대기 지수 산출 공식은 이곳을 참고하세요). 단 통합대기지수는 미세먼지 뿐 아니라 6개 오염수치를 모두 지수 산출 대상으로 포함하기때문에, 미세먼지 지수와 비레한 수치가 나오지 않을 수있습니다.",
	});

	useEffect(() => {
		if (name == "CAI") {
			setInfo({
				name: "통합대기지수 CAI",
		content: "통합대기지수는 대한민국 환경부가 6개 대기오염 측정치를 기반으로, 대기오염이 미치는 영향을 산정한 환경오염지수 입니다. CAI 지수(Comprehensive air-quality index)라고도 불리웁니다. (통합대기 지수 산출 공식은 이곳을 참고하세요). 단 통합대기지수는 미세먼지 뿐 아니라 6개 오염수치를 모두 지수 산출 대상으로 포함하기때문에, 미세먼지 지수와 비레한 수치가 나오지 않을 수있습니다.",
			})
		} else if (name == "PM10") {
			setInfo({
				name: "미세먼지",
				content: "PM10은 1000분의 10mm보다 작은 먼지입니다. 미세먼지는 공기 중 고체상태와 액체상태의 입자의 혼합물로 배출되며 화학반응 또는 자연적으로 생성됩니다. 또한 자연적으로 존재하는광물, 소금, 꽃가루 같은 생물성 입자도 미세먼지에 포함될 수 있습니다. PM10은 인체에 미치는 위험성은 PM2.5에 비해 상대적으로 낮으나, 장기간 노출되면 면역력이 급격히 저하되어 감기, 천식, 기관지염 등의 호흡기 질환은 물론 심혈관 질환, 피부질환, 안구질환 등 각종 질병에 노출될 수 있습니다. 또한 식물의 잎 표면에 침적되어 신진대사를 방해하며, 건축물이나 유적물 및 동상 등에 퇴적되어 부식을 일으킬 수 있습니다.",
			})
		} else if (name == "PM25") {
			setInfo({
				name: "초미세먼지",
				content: "PM2.5는1000분의 2.5mm보다 작은 먼지로, 머리카락 직경(약 60㎛)의 1/20~1/30 크기보다 작은 입자입니다. 주로 사업장 연소, 자동차 연료 연소, 생물성 연소 과정 등 특정 배출원으로부터 직접 발생합니다. PM2.5는 상당량이 황산화물(NOx), 암모니아(NH3), 휘발성 유기화학물(VOCs)등의 전구물질이 대기 중의 특정 조건에서 반응하여 2차 생성됩니다. 즉, 대기 중으로 배출된 가스 상태의 오염물질이 아주 미세한 초미세먼지 입자인 초미세먼지로 바뀌게 되는 것입니다. PM2.5가  PM10보다 더 위험한 것은 입자가 매우 미세하여 허파꽈리 등 호흡기의 가장 깊은 곳까지 침투하고, 여기서 혈관으로 들어가기 때문입니다. 세계보건기구(WHO)는 미세먼지 중 디젤에서 배출되는 BC(black carbon)을 1급 발암물질로 지정했습니다. 코 점막을 통해 걸러지지 않고 흡입시 폐포까지 직접 침투하여 천식이나 폐질환의 유병률과 조기사망률을 증가시킬 수 있어서 주의해야 하는 대기오염 물질입니다.",
			})
		} else if (name == "SO2") {
			setInfo({
				name: "아황산가스",
				content: "아황산가스는 황을 함유한 화석연료의 연소 시 배출되는 대기오염 물질로, 고농도 흡입 시 노약자와 호흡기 환자에게 부정적 영향을 줄 수 있습니다.",
			})
		} else if (name == "NO2") {
			setInfo({
				name: "이산화질소",
				content: "이산화질소는 공업 연소 및 화학물질 공정 등에서 발생하는 질소화합물성 대기오염 물질로, 고농도 노출 시 점막과 기관지, 폐에 부정적 영향을 줄 수 있습니다.",
			})
		} else if (name == "O3") {
			setInfo({
				name: "오존",
				content: "오존은 산소원자 3개로 이뤄진 기체입니다. 자연계에서 지구 대기권 성층권에 있을 때는 자외선을 흡수해 지구 생명체가 해로운 자외선이 직접 닿는 것을 막아주는 고마운 역할을 합니다. 다만, 오존이 지표면에 있을 때는 우리에게 부정적인 영향을 줄 수 있습니다. 지표면의 오존은 대기 중 배출된 질소산화물(NOx)와 휘발성 유기화합물이 자외선과 광화학 반응해 생성된 2차 오염물질 입니다. 다량 반복 노출 시 기관지와 호흡기, 폐에 부정적 영향을 줄 수 있습니다. 우리가 흔히 알고 있는 스모가(smog)가 주로 이 오존에 의해 형성되는 것입니다.",
			})
		} else if (name == "PM10") {
			setInfo({
				name: "",
				content: "",
			})
		}

		
	}, []);


	return (
		<div className='flex flex-col rounded-xl w-[63rem] h-fit bg-[#ffffff] text-[#272727]'>
			<div className='mx-5 mt-5 text-lg font-semibold'>{info.name}</div>
			<div className='mx-5 mt-3 mb-3'><GradeBox name="CAI" /></div>
			<div className='m-5'>
				<img className="float-left w-20 mr-5" alt="appIcon" src={AppIcon}></img>
				<p className='text-[#555555] leading-7'>{info.content}</p>
			</div>
		</div>
	)
}