import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Resourcepage from "./pages/child/Resourcepage/Resourcepage";
import ResourceCourse from "./ResourceCourse";
const ResourceCard = ({ subjects }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedSubject, setSelectedSubject] = useState(null);
	const navigate = useNavigate();

	const handleClick = (subject) => {
		setSelectedSubject(subject);
		setModalVisible(true);

	};

	const handleEnrollNow = () => {
			// set the state in the resource course True
			setModalVisible(false);
			return <ResourceCourse setBool={true} />;
			// <ResourceCourse setBool={true} />;
		
	};

	const handleCancel = () => {
		setModalVisible(false);
		setSelectedSubject(null);
	};

	return (
		<div>
			{subjects.map((subject) => (
				<div key={subject.id} className="ml-40">
					<button
						className="bg-gray-500 h-40 w-80 rounded-md flex items-center justify-center"
						onClick={() => handleClick(subject)}
					>
						<h2 className="text-black text-center justify-center text-2xl">
							{subject.name}
						</h2>
					</button>
					<div className="h-8"></div>
				</div>
			))}

			{modalVisible && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-white p-6 rounded-lg">
						<h2 className="text-2xl mb-4">
							Enroll in {selectedSubject?.name}?
						</h2>
						<div className="flex justify-end">
							<button
								className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
								onClick={handleEnrollNow}
							>
								Enroll Now
							</button>
							<button
								className="bg-gray-500 text-white px-4 py-2 rounded"
								onClick={handleCancel}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResourceCard;
