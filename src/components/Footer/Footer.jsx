import React from 'react';
import Leyu from "../../assets/images/Leyu.png"

const Footer = () => {
  return (
		<div>
			<div className="w-full h-80 left-[-20px] top-[2174px] absolute">
				<div className="w-full h-80 left-0 top-0 absolute">
					<div className="w-full h-80 left-0 top-0 absolute bg-zinc-300" />
				</div>
				<img
					className="w-[182px] h-[182px] left-[51px] top-0 absolute"
					src={Leyu}
				/>
				<div className="w-10 h-10 left-[720px] top-[188px] absolute">
					<div className="w-10 h-10 left-0 top-0 absolute"></div>
				</div>
				<div className="w-10 h-10 left-[593px] top-[188px] absolute" />
				<div className="w-10 h-10 left-[850px] top-[188px] absolute">
					<div className="w-10 h-10 left-0 top-0 absolute"></div>
				</div>
				<div className="w-[60px] h-[58.05px] p-2.5 left-[493px] top-[182px] absolute flex-col justify-start items-start gap-2.5 inline-flex" />
				<div className="w-10 h-10 left-[1002px] top-[188px] absolute" />
				<div className="w-[111px] h-[18px] left-[66px] top-[195px] absolute text-black text-base font-normal font-['Inter'] leading-none">
					Privacy Policy
				</div>
				<div className="w-[135px] h-[18px] left-[209px] top-[194px] absolute text-black text-base font-normal font-['Inter'] leading-none">
					Terms of Service{" "}
				</div>
			</div>
		</div>
	);
}

export default Footer;
