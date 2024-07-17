import React from "react";
import axios from "axios";
import Loginimage from "../../assets/images/Login.png";
import Leyu from "../../assets/images/Leyu.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ChildHomepage  from "../child/ChildHomepage";
import  ParentDashboard from "../Parent/ParentDashboard/ParentDashboard";	
// location used to navigate to the next page
import { useLocation } from "react-router-dom";


const Login = () => {

	const navigate = useNavigate();

	const handlesubmit = async (e) => {
		e.preventDefault();
		navigate("/parent");


	};
	const handlesubmitchild = async (e) => {	
		e.preventDefault();
		
		navigate("/child");
		
	}

	return (
		<div>
			<div class=" w-full h-[1308px] relative bg-white">
				<div class="w-full h-[90px] left-0 top-[-4px] absolute">
					<div class="w-full h-[90px] left-0 top-0 absolute bg-zinc-100 shadow">
						<div class="w-32 h-[42.41px] p-3 left-[1268px] top-[23.38px] absolute bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
							<Link to="/signup">
								<div class="text-rose-100 text-base font-normal font-['Inter'] leading-none">
									Sign up Free
								</div>
							</Link>
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
				<img
					class="w-[720px] h-[720px] left-0 top-[177px] absolute"
					src={Loginimage}
				/>
				<div class="left-[992.46px] top-[778.12px] absolute text-neutral-500 text-xl font-normal font-['Roboto'] leading-tight">
					Or
				</div>
				<div class="w-[208.68px] left-[728.72px] top-[746.11px] absolute text-blue-600 text-xl font-normal font-['Roboto'] leading-tight">
					Forget Password?
				</div>
				<div class="h-[86.57px] p-2.5 left-[720px] top-[632.41px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
					<div className="flex justify-evenly gap-36">
						<div class="self-stretch h-[66.57px] p-[15.36px] bg-blue-600 rounded-xl justify-center items-center gap-[10.24px] inline-flex">
							<button
								className="text-rose-100 text-[25.61px] font-semibold font-['Roboto'] leading-relaxed"
								onClick={handlesubmit}
							>
								Login as Parent
							</button>
						</div>
						<div  class="self-stretch h-[66.57px] p-[15.36px] bg-blue-600 rounded-xl justify-center items-center gap-[10.24px] inline-flex">
							<button
								className="text-rose-100 text-[25.61px] font-semibold font-['Roboto'] leading-relaxed"
								onClick={handlesubmitchild}
							>
								Login as Child
							</button>
						</div>
					</div>
				</div>
				<form></form>
				<div class="left-[731.28px] top-[519.50px] absolute text-black text-lg font-medium font-['Inter'] leading-[18.56px]">
					Password
				</div>
				<div class="left-[731.28px] top-[394.03px] absolute text-black text-lg font-medium font-['Inter'] leading-[18.56px]">
					Email
				</div>
				<div class="left-[730px] top-[305.69px] absolute text-zinc-950 text-[33.29px] font-semibold font-['Inter'] leading-[33.29px]">
					Login to your account{" "}
				</div>
				<div class="w-[142.11px] h-[23.04px] left-[728.52px] top-[262px] absolute text-black text-xl font-normal font-['Inter'] leading-tight">
					Welcome back{" "}
				</div>
				<input
					class="w-[547.96px] h-[60.17px] left-[731.28px] top-[424.76px] absolute bg-neutral-100 rounded-[10.24px]"
					placeholder="Enter your username or email"
				/>
				<input
					class="w-[547.96px] h-[60.17px] left-[731.28px] top-[550.23px] absolute bg-neutral-100 rounded-[10.24px]"
					placeholder="Enter your password"
				/>

				<div class="w-[257.34px] h-[0px] left-[728.72px] top-[785.80px] absolute border border-zinc-400"></div>
				<div class="w-[257.34px] h-[0px] left-[1020.62px] top-[788.36px] absolute border border-stone-300"></div>
				<div class="w-[446.82px] h-[58.89px] left-[791px] top-[825px] absolute bg-white rounded-[8.96px] border border-black"></div>
				<div class="left-[947.19px] top-[844.20px] absolute text-black text-xl font-medium font-['Roboto'] leading-tight">
					Continue with google
				</div>
				<div class="w-[25.61px] h-[25.61px] left-[894.70px] top-[841.64px] absolute"></div>
				<div class="w-full h-[281px] left-0 top-[1027px] absolute">
					<div class="w-full h-[281px] left-0 top-0 absolute">
						<div class="w-full h-[281px] left-0 top-0 absolute bg-zinc-300"></div>
					</div>
					<img
						class="w-[182px] h-[159.82px] left-[40px] top-0 absolute"
						src={Leyu}
					/>
					<div class="w-10 h-[35.12px] left-[709px] top-[165.09px] absolute">
						<div class="w-10 h-[35.12px] left-0 top-0 absolute"></div>
					</div>
					<div class="w-10 h-[35.12px] left-[582px] top-[165.09px] absolute"></div>
					<div class="w-10 h-[35.12px] left-[839px] top-[165.09px] absolute">
						<div class="w-10 h-[35.12px] left-0 top-0 absolute"></div>
					</div>
					<div class="w-10 h-[35.12px] left-[991px] top-[165.09px] absolute"></div>
					<div class="w-[111px] h-[15.81px] left-[55px] top-[171.23px] absolute text-black text-base font-normal font-['Inter'] leading-none">
						Privacy Policy
					</div>
					<div class="w-[135px] h-[15.81px] left-[198px] top-[170.36px] absolute text-black text-base font-normal font-['Inter'] leading-none">
						Terms of Service{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
