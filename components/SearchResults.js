import React from "react";
import PaginationBtn from "./PaginationBtn";

function SearchResults({ results }) {
	return (
		<div className='mx-auto w-full pl-3 pr-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
			<p className='text-gray-600 text-md mb-5 mt-3'>
				About {results.searchInformation?.formattedTotalResults} results (
				{results.searchInformation?.formattedSearchTime} Seconds){" "}
			</p>

			{results.items?.map((item) => (
				<div key={item.link} className="max-w-xl mb-8">
					<div className="group">
						<a href={item.link} className='text-sm'>
							{" "}
							{item.formattedUrl}{" "}
						</a>
						<a href={item.link}>
							{" "}
							<h2 className='text-xl text-blue-800 truncate font-medium group-hover:underline'>
								{" "}
								{item.title}{" "}
							</h2>{" "}
						</a>
					</div>

					<p className=""> {item.snippet} </p>
				</div>
			))}

            <PaginationBtn />
		</div>
	);
}

export default SearchResults;
