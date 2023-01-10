import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function PaginationBtn() {
	const router = useRouter();
	const startIndex = Number(router.query.start) || 0;

	return (
		<div className='flex max-w-lg justify-between text-blue-700 mb-10'>
			{startIndex >= 10 && (
				<Link
					href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
				>
					<div className='flex flex-col flex-grow items-center cursor-pointer hover:underline'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							className='h-5'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M15.75 19.5L8.25 12l7.5-7.5'
							/>
						</svg>

						<p>Previous</p>
					</div>
				</Link>
			)}

			<Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
				<div className='flex flex-col flex-grow items-center cursor-pointer hover:underline'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='h-5'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>
					</svg>

					<p>Next</p>
				</div>
			</Link>
		</div>
	);
}

export default PaginationBtn;
