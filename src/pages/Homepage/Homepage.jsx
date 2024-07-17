import React, { useEffect, useState } from "react";
import axios from "axios";

const ChildrenList = () => {
	const [children, setChildren] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:8000/api/children");
				setChildren(response.data);
                console.log(response.data)
			} catch (err) {
				setError(err);
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<h1>Children List</h1>
			<ul>
				{children.map((child) => (
					<li key={child.user.id}>{child.user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default ChildrenList;
