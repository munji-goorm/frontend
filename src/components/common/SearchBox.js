import React, { useCallback, useRef, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import axios from 'axios';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

export const SearchBox = ({ setAddr, setCoord, setSearchBtn }) => {
	/* 특정 시간 동안 연속적으로 호출되는 이벤트 중 마지막 이벤트만 호출  */
	//callback: 일정 시간이 지난 후 실행되는 함수, delay: 지연 시간
	const debounce = (callback, delay) => {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => callback(...args), delay);
		}
	}

	// localStorage.clear();
	/**최근 검색어 */
	//localStorage의 데이터를 꺼내서 배열로 변환한다.
	let addrArr = JSON.parse(localStorage.getItem('word'));
	if (addrArr === null) {
		//최초 접속시 localStorage에 데이터가 없을 경우 새로운 배열 생성하기
		addrArr = [];
	}

	const submitRecentWord = clickedItem => {
		// setAddr(clickedItem.shortAddr);
		// setCoord({
		// 	lat: clickedItem.xCoord,
		// 	lng: clickedItem.yCoord
		// });
	}

	//최근 검색어 삭제
	const deleteRecentWord = (word) => {
		//버튼 안보이게 처리
		document.getElementById(word).style.display = 'none';
		//삭제할 주소를 제외하고 새로운 배열을 생성한다.
		addrArr = addrArr.filter((items) => items !== word);
		//새로운 배열을 localStorage에 저장한다.
		localStorage.setItem('word', JSON.stringify(addrArr));
	}


	/**검색어 자동완성 */
	const inputBox = useRef();
	const [inputValue, setInputValue] = useState('');
	const [isHaveInputValue, setIsHaveInputValue] = useState(false);
	const [dropDownList, setDropDownList] = useState([]);
	const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

	const showDropDownList = useCallback(
		debounce(async (value) => {
			const url = process.env.REACT_APP_BACKEND_URL;
			const endpoint = '/main/search';
			try {
				if (value === '') {
					setIsHaveInputValue(false);
					setDropDownList([]);
				} else {
					const res = await axios.get(url + endpoint, {
						params: {
							keyword: value
						}
					});
					const data = res.data.data;
					setDropDownList(data);
				}
			} catch (e) {
				console.error(e.message);
			}
		}, 500)
		, []);

	const changeInputValue = event => {
		showDropDownList(event.target.value);
		setInputValue(event.target.value);
		setIsHaveInputValue(true);
	}

	const clickDropDownItem = clickedItem => {
		setInputValue(clickedItem.shortAddr);
		setIsHaveInputValue(false);
		setAddr(clickedItem.shortAddr);
		setCoord({
			lat: clickedItem.xCoord,
			lng: clickedItem.yCoord
		});
		setSearchBtn(true);
		document.getElementById('drop-down-icon').classList.remove('rotate-180');
		
		/* 최근 검색어 저장 */
		let newAddr = clickedItem.fullAddr;
		//새로 검색한 주소를 추가한다.
		addrArr.unshift(newAddr); //배열의 맨 앞에 추가한다.
		//중복된 주소는 제거한다.
		addrArr = new Set(addrArr);
		//중복 제거된 set 자료형의 addrArr를 일반 배열로 변경한다.
		addrArr =[...addrArr];
		
		if (addrArr.length > 3) { //최근 검색 3개까지만 저장
			addrArr.pop();
		}
		
		//localStorage에 저장한다.
		localStorage.setItem('word', JSON.stringify(addrArr));
	}

	const handleDropDownKey = event => {
		//input에 값이 있을 때만 작동
		if (isHaveInputValue) {
			if (
				event.key === 'ArrowDown' &&
				dropDownList.length - 1 > dropDownItemIndex
			) {
				setDropDownItemIndex(dropDownItemIndex + 1);
			}
			if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
				setDropDownItemIndex(dropDownItemIndex - 1);
			if (event.key === 'Enter' && dropDownItemIndex >= 0) {
				clickDropDownItem(dropDownList[dropDownItemIndex]);
				setDropDownItemIndex(-1);
			}
		}
	}

	return (
		<div id="search-box" className='flex items-center flex-col fixed top-[4rem] z-20 w-full h-[25rem] bg-[#ffffff]'>
			<div className='w-[63rem] h-[25rem] flex flex-col items-center'>
				<div className='flex items-center mt-[1.5rem] w-[58rem] h-[3rem] bg-[#f4f4f4] rounded-3xl'>
					<SearchIcon className='ml-4' />
					<input
						ref={inputBox}
						type="text" placeholder="지역으로 검색하세요."
						className='bg-[#f4f4f4] w-[53rem] outline-none ml-2'
						value={inputValue}
						onChange={changeInputValue}
						onKeyUp={handleDropDownKey}
					/>
				</div>
				<div>
					<div className='mt-[1rem] w-[58rem] h-[2rem] flex items-center text-lg'>
						<div className='w-[6rem] mr-2 text-[#878787]'>최근 검색</div>
						{localStorage.getItem('word')
						? <div className='w-[50rem] flex overflow-x-auto'>
							{JSON.parse(localStorage.getItem('word')).map((word, index) => {
							return (
								<button
									key={index}
									id={word}
									className="flex items-center px-2 mx-1 bg-[#f4f4f4] text-[#777777] rounded-xl hover:border-2 break-normal"
									onClick={() => {submitRecentWord(word)}}
								>
									{word}
									<DeleteIcon 
										className='inline ml-1 rounded hover:bg-red-400'
										onClick={() => {deleteRecentWord(word)}} />
								</button>
							)
						})}
						</div>
						: <div className='text-[#878787]'>기록이 없습니다.</div>
						}
						
					</div>
					{isHaveInputValue && (
						<div className='mt-[1rem] w-[58rem] h-[15.5rem] overflow-auto'>
							{dropDownList.map((dropDownItem, dropDownIndex) => {
								return (
									<div
										key={dropDownIndex}
										onClick={() => clickDropDownItem(dropDownItem)}
										onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
										className={dropDownItemIndex === dropDownIndex ? 'bg-[#f4f4f4] p-1 text-lg' : 'p-1 text-lg'}
									>
										{dropDownItem.fullAddr}
									</div>
								)
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
