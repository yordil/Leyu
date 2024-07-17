import React from 'react';
import contactus from "../../assets/images/contactus.png";  

const Subscribe = () => {
  return (
		<div>
			<div className="w-full h-[2128px] relative bg-white">
				<div className="left-[482px] top-[853px] absolute text-black text-3xl font-extrabold font-['Inter'] leading-[30px]">
					1 month money back guarantee
				</div>
				<div className="left-[474px] top-[256px] absolute text-black text-[49px] font-medium font-['Inter'] leading-[49px]">
					Subscription Plans
				</div>
				<div className="w-[291px] h-[248px] left-[262px] top-[481px] absolute bg-neutral-200 rounded-[15px] border border-blue-600" />
				<div className="w-[148px] h-[62.41px] left-[282px] top-[649px] absolute">
					<div className="w-32 h-[42.41px] p-3 left-[10px] top-[10px] absolute bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
						<div className="text-rose-100 text-base font-normal font-['Inter'] leading-none">
							Select Plan
						</div>
					</div>
				</div>
				<div className="w-[291px] h-[248px] left-[574px] top-[481px] absolute bg-zinc-100 rounded-[15px] border border-blue-600" />
				<div className="w-[148px] h-[62.41px] left-[581px] top-[649px] absolute">
					<div className="w-32 h-[42.41px] p-3 left-[10px] top-[10px] absolute bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
						<div className="text-rose-100 text-base font-normal font-['Inter'] leading-none">
							Select Plan
						</div>
					</div>
				</div>
				<div className="w-[709px] h-16 left-[372px] top-[897px] absolute  bg-zinc-100 rounded-[15px] border border-blue-600">
					<div className="w-[689px] h-11 p-3 left-[10px] top-[10px] absolute bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
						<div className="text-rose-100 text-xl font-normal font-['Inter'] leading-tight">
							Upgrade Now
						</div>
					</div>
				</div>

				<div className="w-[148px] h-[62.41px] left-[889px] top-[649px] absolute ">
					<div className="w-32 h-[42.41px] p-3 left-[10px] top-[10px] absolute bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
						<div className="text-rose-100 text-base font-normal font-['Inter'] leading-none">
							Select Plan
						</div>
					</div>
				</div>
				<div className="left-[1017px] top-[602px] absolute text-black text-[17px] font-medium font-['Inter'] leading-[17px]">
					per month
				</div>
				<div className="left-[692px] top-[592px] absolute text-black text-[17px] font-medium font-['Inter'] leading-[17px]">
					per month
				</div>
				<div className="left-[340px] top-[587px] absolute text-black text-[17px] font-medium font-['Inter'] leading-[17px]">
					per month
				</div>
				<div className="left-[956px] top-[580px] absolute text-black text-[29px] font-medium font-['Inter'] leading-[29px]">
					300
				</div>
				<div className="left-[625px] top-[571px] absolute text-black text-3xl font-medium font-['Inter'] leading-[30px]">
					150
				</div>
				<div className="left-[318px] top-[568px] absolute text-black text-[33px] font-medium font-['Inter'] leading-[33px]">
					0
				</div>
				<div className="left-[916px] top-[565px] absolute text-black text-sm font-medium font-['Inter'] leading-[14px]">
					ETB
				</div>
				<div className="left-[591px] top-[557px] absolute text-black text-sm font-medium font-['Inter'] leading-[14px]">
					ETB
				</div>
				<div className="left-[279px] top-[551px] absolute text-black text-sm font-medium font-['Inter'] leading-[14px]">
					ETB
				</div>
				<div className="left-[916px] top-[523px] absolute text-black text-2xl font-medium font-['Inter'] leading-normal">
					Premium
				</div>
				<div className="left-[591px] top-[511px] absolute text-black text-2xl font-medium font-['Inter'] leading-normal">
					Pro
				</div>
				<div className="left-[279px] top-[508px] absolute text-black text-2xl font-medium font-['Inter'] leading-normal">
					Free
				</div>
				<div className="left-[413px] top-[327px] absolute text-black text-[23px] font-normal font-['Inter'] leading-[23px]">
					Explore our payment plans and subscription benefits to find the <br />
					perfect fit for you.
				</div>
				<div className="w-full h-[1064px] left-0 top-[1064px] absolute">
					<div className="w-full h-80 left-0 top-[744px] absolute">
						<div className="w-full h-80 left-0 top-0 absolute bg-zinc-300" />
					</div>
					<img
						className="w-[182px] h-[182px] left-[40px] top-[744px] absolute"
						src="https://via.placeholder.com/182x182"
					/>
					<div className="w-10 h-10 left-[709px] top-[932px] absolute">
						<div className="w-10 h-10 left-0 top-0 absolute"></div>
					</div>
					<div className="w-10 h-10 left-[582px] top-[932px] absolute" />
					<div className="w-10 h-10 left-[839px] top-[932px] absolute">
						<div className="w-10 h-10 left-0 top-0 absolute"></div>
					</div>
					<img
						className="w-[680px] h-[588.87px] left-[40px] top-[15px] absolute"
						src={contactus}
					/>
					<div className="w-[60px] h-[60px] left-[446px] top-[916px] absolute" />
					<div className="left-[765.44px] top-[82px] absolute text-zinc-700 text-[17px] font-normal font-['Inter'] leading-[17px]">
						Have a question or feedback? Get in touch!
					</div>
					<div className="left-[769.44px] top-0 absolute text-black text-5xl font-semibold font-['Inter'] leading-[48px]">
						Contact Information
					</div>
					<input placeholder='Email' className="w-[600px] h-[45px] left-[765.44px] top-[184px] absolute bg-zinc-100 rounded-[9.81px] border border-zinc-300" />
					<input placeholder='Your Message' className="w-[600px] h-10 left-[765.44px] top-[289px] absolute bg-zinc-100 rounded-[9.81px] border border-zinc-300" />
					<div className="w-[161.12px] h-[64.84px] p-3 left-[816px] top-[614px] absolute bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
						<div className="text-rose-100 text-base font-normal font-['Inter'] leading-none">
							Submit
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Subscribe;
