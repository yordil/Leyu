import React from 'react';
import quizside from "../../assets/images/quizside.png"
import { Link } from "react-router-dom";
import quiz1 from "../../assets/images/quiz1.png"
import Leyu from "../../assets/images/Leyu.png"


const QuizPage = () => {
  return (
		<div>
			<div className="w-full h-[1366px] relative bg-white">
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
				<img
					className="w-[252px] h-[520.74px] left-[75px] top-[205px] absolute"
					src={quizside}
				/>
				<div className="p-3 left-[430px] top-[726px] absolute bg-blue-600 rounded-lg border border-blue-600 justify-center items-center gap-2 inline-flex">
					<div className="text-rose-100 text-lg font-normal font-['Inter'] leading-[18px]">
						Next question -&gt;
					</div>
				</div>
				<div className="w-full h-80 left-0 top-[1046px] absolute">
					<div className="w-full h-80 left-0 top-0 absolute">
						<div className="w-full h-80 left-0 top-0 absolute bg-zinc-300" />
					</div>
					<img
						className="w-[182px] h-[182px] left-[40px] top-0 absolute"
						src="https://via.placeholder.com/182x182"
					/>
					<div className="w-10 h-10 left-[709px] top-[188px] absolute">
						<div className="w-10 h-10 left-0 top-0 absolute"></div>
					</div>
					<div className="w-10 h-10 left-[582px] top-[188px] absolute" />
					<div className="w-10 h-10 left-[839px] top-[188px] absolute">
						<div className="w-10 h-10 left-0 top-0 absolute"></div>
					</div>
					<div className="w-[60px] h-[58.08px] left-[482px] top-[183.03px] absolute" />
					<div className="w-10 h-10 left-[991px] top-[188px] absolute" />
					<div className="w-[111px] h-[18px] left-[55px] top-[195px] absolute text-black text-base font-normal font-['Inter'] leading-none">
						Privacy Policy
					</div>
					<div className="w-[135px] h-[18px] left-[198px] top-[194px] absolute text-black text-base font-normal font-['Inter'] leading-none">
						Terms of Service{" "}
					</div>
				</div>
				<div className="left-[422px] top-[395px] absolute"></div>
				<div className='flex'>
					<div>1</div>
					<img
						className="w-[427px] h-[257px] left-[520px] top-[227px] absolute"
						src={quiz1}
					/>
				</div>
				<div className="w-[869px] h-[202px] left-[402px] top-[497px] absolute rounded-[5px]">
					<div className="w-[829px] h-[162px] left-[20px] top-[20px] absolute">
						<div className="w-[359px] h-[60px] left-0 top-[93px] absolute bg-zinc-300 rounded-[15px]" />
						<div className="w-[359px] h-[60px] left-0 top-0 absolute bg-zinc-300 rounded-[15px]" />
						<div className="left-[25px] top-[19px] absolute text-black text-[41px] font-normal font-['Inter'] leading-[41px]">
							c
						</div>
						<div className="left-[20px] top-[102px] absolute text-black text-[41px] font-normal font-['Inter'] leading-[41px]">
							A
						</div>
						<div className="w-[365px] h-[60px] left-[464px] top-[102px] absolute bg-zinc-300 rounded-[15px]" />
						<div className="left-[480px] top-[107px] absolute text-black text-[41px] font-normal font-['Inter']">
							X
						</div>
						<div className="w-[365px] h-[60px] left-[464px] top-0 absolute bg-zinc-300 rounded-[15px]" />
						<div className="left-[479px] top-[4px] absolute text-black text-[41px] font-normal font-['Inter']">
							R
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuizPage;
