import React from "react";

function Footer() {
	return (
		<footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500 ">
			<div className='px-8 py-3'>
				<p>Nigeria</p>
			</div>            
            <div className="grid grid-clos-1 sm:grid-cols-3 p-2 gap-2 items-center justify-center">   
                <div className="flex gap-2 sm:cols-span-2 sm:order-2 items-center justify-center">
                    <img src="/images/download.png"/> <p>Carbon Neutral Since 2007</p>
                </div>
                <div className="flex gap-4 flex-wrap sm:order-1 items-center justify-center">
                    <p>About</p>
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search Works</p>
                </div>

                <div className="flex gap-4 items-center justify-center sm:order-3">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
		</footer>
	);
}

export default Footer;
