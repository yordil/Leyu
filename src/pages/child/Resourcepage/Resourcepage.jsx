import React , {useState , useEffect} from "react";
import banner from "../../../assets/images/resourcebanner.jpg";
import ResourceCard from "../../../components/Cards/ResourceCard";
import axios from "axios";
import baseURL from "../../../util/axiosInstance";
import ResourceCourse from "../../../components/Cards/ResourceCourse";
import { Link } from "react-router-dom";
import Leyu from "../../../assets/images/Leyu.png";

const Resourcepage = ({bool}) => {

	const [subjects, setSubjects] = useState([]);

	const fetchCatehory = async () => {
		try {
			const response = await baseURL.get("/category");
			setSubjects(response.data);
		} catch (error) {
			console.log(error);
		}
	}
	
	useEffect(() => { 
		fetchCatehory();
	}, [])

	return (
		<div>
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

			<div>
				<div
				// style={{
				// 	backgroundImage: `url(${banner})`,
				// 	height: "px",
				// 	width: "100%",
				// 	backgroundSize: "contain",
				// 	backgroundRepeat: "no-repeat",
				// 	backgroundPosition: "center",
				// }}
				// className="h-52 "
				>
					<div className="p-20 mt-20 bg-sky-900 mb-20">
						<div className="text-5xl font-bold">Discover Resources Here</div>
						<div className="text-m">
							Explore a Variety of resources designed for you
						</div>
					</div>
				</div>
				<div className="ml-56 mt-36 mb-10 text-3xl font-bold">Categories</div>
			</div>

			<div className="flex justify-around">
				<div>
					<ResourceCard
						subjects={[
							{
								id: 1,
								name: "Numbers",
							},
							{
								id: 2,
								name: "Alphabets",
							},
							{
								id: 3,
								name: "Animal",
							},
							{
								id: 4,
								name: "Clothing",
							},
							{
								id: 5,
								name: "Food",
							},
							{
								id: 6,
								name: " Greetings",
							},
						]}
					/>
				</div>
				<div className="mr-36">
					{/*  */}

					<ResourceCourse
						course={[
							{
								id: 1,
								name: "Numbers",
							},
							{
								id: 2,
								name: "Alphabets",
							},
							{
								id: 3,
								name: "Animal",
							},
							{
								id: 4,
								name: "Clothing",
							},
							{
								id: 5,
								name: "Food",
							},
							{
								id: 6,
								name: " Greetings",
							},
						]}
					/>
				</div>
			</div>

			{/* button at the middle with a text take quiz */}

			<Link to="/quiz">
				<div className="flex justify-center mt-20">
					<button className="bg-blue-600 text-white px-4 py-2 rounded mb-32">
						Take Quiz
					</button>
				</div>
			</Link>
		</div>
	);
};

export default Resourcepage;
