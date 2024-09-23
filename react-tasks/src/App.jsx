import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Day13 from "./Day13/day13";
import Day14 from "./Day14/day14";
import Day15 from "./Day15/day15";
import LinkAndRouting from "./Day16/Link-Routing-Task/LinkAndRouting";
import ContextAPIWrapper from "./Day16/ContextAPI-Task/contextApi";
import Assignment1 from "./React-Day1-Assignment/Assignment1";
import Assignment2 from "./React-Fetch-Api-Assignment/Assignment2";

function App() {
	return (
		<Router>
			<Routes>
				{/* Define routes for each day */}
				<Route path="/day13" element={<Day13 />} />
				<Route path="/day14" element={<Day14 />} />
				<Route path="/day15" element={<Day15 />} />
				<Route
					path="/day16/linkandrouting"
					element={<LinkAndRouting />}
				/>
				<Route
					path="/day16/contextapi"
					element={<ContextAPIWrapper />}
				/>
				<Route path="/React-Assignment-1" element={<Assignment1 />} />
				<Route path="/React-Assignment-2" element={<Assignment2 />} />
			</Routes>
		</Router>
	);
}

export default App;
