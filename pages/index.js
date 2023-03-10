import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
// import {
// 	Squares2X2Icon,
// 	MagnifyingGlassIcon,
// 	MicrophoneIcon,
// } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
	const searchInputRef = useRef(null);
	const router = useRouter();

	const Search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Head>
				<title>Google Clone</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header className='flex w-full p-5 justify-between text-sm text-gray-700'>
				{/* Left */}
				<div className='space-x-4 items-center hidden sm:flex'>
					<p className='link'>About</p>
					<p className='link'>Store</p>
				</div>

				{/* right */}
				<div className='flex space-x-4 items-center float-right justify-end w-full'>
					<p className='link'>Gmail</p>
					<p className='link'>Images</p>

					{/* Icon */}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='h-10 w-10 p-2 hover:bg-gray-300 cursor-pointer rounded-full'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
						/>
					</svg>

					{/* Avatar */}
					<Avatar url='/images/eg.jpeg' />
				</div>
			</header>

			{/* Body */}
			<form className='flex flex-col w-4/5 flex-grow items-center  mx-auto mt-44'>
				<img
					src='https://www.google.co.uk./images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
					height='100'
					width='300'
				/>

				<div className='flex gap-2 w-full max-w-md sm:max-w-xl lg:max-w-2xl shadow-md focus-within:shadow-md hover:shadow-gray-300 rounded-full p-2 justify-between border border-gray-200 '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='w-6 h-6 text-gray-400'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>

					<input
						ref={searchInputRef}
						type='text'
						className='flex-1 outline-none border-none'
					/>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='w-6 h-6 text-gray-400'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
						/>
					</svg>
				</div>

				<div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4'>
					<button onClick={Search} className='btn'>
						Google Search
					</button>

					<button onClick={Search} className='btn'>
						I'm Feeling Lucky
					</button>
				</div>
			</form>

			{/* Footer */}
			<Footer />
		</div>
	);
}
