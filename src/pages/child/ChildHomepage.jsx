import React from 'react';
import Leyu from '../../assets/images/Leyu.png';
import childhomepage from '../../assets/images/childhomepage.png';
import childbanner from '../../assets/images/childbanner.jpg';
import childleft from "../../assets/images/childpageleft.png"
import { Link } from 'react-router-dom';

const ChildHomepage = () => {
  return (
		<div>
			<div className="w-full h-[2494px] relative bg-white">
				<div className="w-full h-[90px] left-0 top-0 absolute">
					<div className="w-full h-[90px] left-0 top-0 absolute bg-zinc-100 shadow">
						<div className="w-[235px] h-[59px] p-3 left-[1099px] top-[20px] absolute bg-zinc-100 rounded-lg justify-center items-center gap-2 inline-flex">
							<div className="justify-center items-center gap-2.5 flex">
								<div className="text-blue-600 text-base font-normal font-['Inter'] leading-none">
									Welcome user
								</div>
							</div>
						</div>
						<div className="w-[94px] left-[792px] top-[33px] absolute text-black text-xl font-normal font-['Inter']">
							About us{" "}
						</div>
						<div className="w-14 h-[23px] left-[494px] top-[33px] absolute text-black text-xl font-normal font-['Inter']">
							Home{" "}
						</div>
						<div className="left-[952px] top-[33px] absolute text-black text-xl font-normal font-['Inter']">
							Contact us{" "}
						</div>
						<Link to="/resource">
							<div className="left-[621px] top-[35px] absolute text-black text-xl font-normal font-['Inter'] leading-tight">
								Resources
							</div>
						</Link>
					</div>
					<img
						className="w-[101.37px] h-[81px] left-[57.64px] top-[9px] absolute"
						src={Leyu}
					/>
				</div>
				<div className="left-[83px] top-[336px] absolute text-black text-[17px] font-normal font-['Inter']">
					Explore a world of interactive learning designed just for you
				</div>
				<div className="left-[83px] top-[249px] absolute text-black text-[52px] font-semibold font-['Inter']">
					Welcome to Leyu
				</div>
				<div className="left-[83px] top-[206px] absolute text-black text-base font-normal font-['Inter']">
					Discover
				</div>
				<div className="w-[97px] h-[29px] left-[68px] top-[414px] absolute">
					<div className="w-[131px] h-[70px] left-[10px] top-[10px] absolute">
						<div className="w-[95px] h-11 p-3 left-0 top-[-28px] absolute bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
							<div className="text-rose-100 text-base font-normal font-['Inter'] leading-none">
								Start
							</div>
						</div>
					</div>
				</div>
				<img
					className="w-[586.05px] h-[580.49px] left-[720px] top-[124px] absolute"
					src={childhomepage}
				/>
				<div className="w-[679px] h-[86px] left-[760px] top-[1711px] absolute text-black text-lg font-normal font-['Inter'] leading-[18px]">
					Our tool provides a fun and engaging way to improve your reading ,
					<br />
					counting and language abilities. Explore Various exercises designed to{" "}
					<br />
					enhance your skills.
				</div>
				<div className="w-[700px] h-[113px] left-[760px] top-[1572px] absolute text-black text-[37px] font-semibold font-['Inter'] leading-[37px]">
					Enhance your skills with our <br />
					interactive learning tool{" "}
				</div>
				<img
					className="w-[700px] h-[700px] left-0 top-[1481px] absolute"
					src={childleft}
				/>
				<div className="w-[699px] left-[70px] top-[467px] absolute text-black text-2xl font-normal font-['Inter'] leading-normal">
					Welcome to Leyu! Here, you can access a wide range of
					<br />
					interactive resources designed to help you learn and grow.
					<br />
					Have fun exploring and expanding your skills!
					<br />
					<br />
				</div>
				<img
					className="w-full h-[748px] left-0 top-[709px] absolute"
					src={childbanner}
				/>
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
		</div>
	);
}

export default ChildHomepage;
