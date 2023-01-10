import React from "react";
import { useRouter } from "next/router";
import { useRef } from "react";
// import { XMarkIcon } from "@heroicons/react/24/solid";
// import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
	const router = useRouter();
	const searchRef = useRef();
	const searchInputRef = useRef();

	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value
			? searchInputRef.current.value
			: searchRef.current.value;

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
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='h-7 sm:mr-3 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125'
						onClick={() => {
							searchRef.current.value = " ";
						}}
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
						/>
					</svg>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='h-6 text-blue-500 hidden sm:inline-flex '
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>

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
				<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='h-7 sm:mr-3 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125'
						onClick={() => {
							searchRef.current.value = " ";
						}}
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>

                    <svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
						/>
					</svg>

                    <svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='h-6 text-blue-500 hidden sm:inline-flex '
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>
                        
				<button hidden type='submit' onClick={search}>
					Search
				</button>
			</form>

			<HeaderOptions />
		</header>
	);
}

export default Header;
