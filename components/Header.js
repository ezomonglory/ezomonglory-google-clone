import React from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import {
	Squares2X2Icon,
	MagnifyingGlassIcon,
	MicrophoneIcon,
} from "@heroicons/react/24/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
	const router = useRouter();
	const searchRef = useRef();
	const searchInputRef = useRef();

	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value ? searchInputRef.current.value : searchRef.current.value;

		console.log(term);

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<header className='sticky top-0 bg-white'>
			<div className='flex w-full p-2 sm:p-6 items-center'>
				<img
					src='https://www.google.co.uk./images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
					loading='lazy'
					height='40px'
					width='120px'
					className='cursor-pointer'
					onClick={() => router.push("/")}
				/>

				<form className=' hidden sm:flex flex-grow border border-gray-200 px-6 py-3 ml-10 mr-5 rounded-full shadow-lg max-w-3xl items-center'>
					<input
						type='text'
						ref={searchRef}
						className='flex-grow w-full focus:outline-none'
					/>
					<XMarkIcon
						className='h-7 sm:mr-3 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125'
						onClick={() => {                            
							searchRef.current.value = " "
						}}
					/>

					<MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />

					<MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex ' />
					<button hidden type='submit' onClick={search}>
						Search
					</button>
				</form>

				<Avatar url='/images/eg.jpeg' className='ml-auto' />

				{/* HeaderOptions */}
			</div>
			<form className='flex sm:hidden flex-grow border border-gray-200 px-6 py-3 mx-2 rounded-full shadow-lg max-w-3xl items-center mb-4 '>
				<input
					type='text'
					ref={searchInputRef}
					className='flex-grow w-full focus:outline-none'
				/>
				<XMarkIcon
					className='h-7 sm:mr-3 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125'
					onClick={() => {                        
                        searchInputRef.current.value = " "
                    }}
				/>

				<MicrophoneIcon className='mr-3 h-6 inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />

				<MagnifyingGlassIcon className='h-6 text-blue-500 inline-flex ' />
				<button hidden type='submit' onClick={search}>
					Search
				</button>
			</form>

			<HeaderOptions />
		</header>
	);
}

export default Header;
