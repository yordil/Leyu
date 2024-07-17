import { useState } from "react";
import "./App.css";
import Resourcepage from "./pages/child/Resourcepage/Resourcepage";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChildHomepage from "./pages/child/ChildHomepage";
import Homepage from "./pages/Homepage/Homepage";
import Subscribe from "./pages/Subscription/Subscribe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import QuizPage from "./pages/child/QuizPage";
import Signup from "./pages/signup/Signup";
import ParentDashboard from "./pages/Parent/ParentDashboard/ParentDashboard";
// import Homepage from "./pages/Homepage/Homepage";
import ChildProgress from "./pages/Parent/childprogress/ChildProgress";

function App() {
	return (
		// configuring routes
		<>
			{/* <Homepage /> */}

			<BrowserRouter>
				<Routes>
					<Route path="/child" element={<ChildHomepage />} />
					<Route path="/" element={<Homepage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/plans" element={<Subscribe />} />
					
					<Route path="/resource" element={<Resourcepage />} />
					<Route path="/quiz" element={<QuizPage />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/parent" element={<ParentDashboard />} />
					<Route path="/progress-tracker" element={<ChildProgress />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
