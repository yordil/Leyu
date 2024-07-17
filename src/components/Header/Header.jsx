import React from "react";
import Leyu from "../../assets/images/Leyu.png";
const Header = () => {
	return (
		<div class="w-full h-[90px] left-0 top-[-4px] absolute">
			<div class="w-full h-[90px] left-0 top-0 absolute bg-zinc-100 shadow">
				<div class="w-32 h-[42.41px] p-3 left-[1268px] top-[23.38px] absolute bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
					<div class="text-rose-100 text-base font-normal font-['Inter'] leading-none">
						Sign up Free
					</div>
				</div>
				<div class="w-[141px] h-[41.95px] p-3 left-[1088px] top-[23.68px] absolute bg-white rounded-lg border border-blue-600 justify-center items-center gap-2 inline-flex">
					<div class="text-blue-600 text-base font-normal font-['Inter'] leading-none">
						Login
					</div>
				</div>
				<div class="w-[94px] left-[766px] top-[55px] absolute text-black text-xl font-normal font-['Inter']">
					About us{" "}
				</div>
				<div class="w-14 h-[23px] left-[643px] top-[54px] absolute text-black text-xl font-normal font-['Inter']">
					Home{" "}
				</div>
				<div class="left-[899px] top-[55px] absolute text-black text-xl font-normal font-['Inter']">
					Contact us{" "}
				</div>
			</div>
			<img
				class="w-[101.37px] h-[81px] left-[57.64px] top-[9px] absolute"
				src={Leyu}
			/>
		</div>
	);
};

export default Header;
