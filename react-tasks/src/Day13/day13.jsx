import React from "react";
import Card from "./Card";

const Day13 = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
			<h1 className="text-3xl font-bold text-gray-800 mb-8">
				Day 13 Task
			</h1>
			<Card
				title="Beautiful React Card"
				content="This is a modern card created using TailwindCSS with props passed for title, content, and footer."
				footerText="This is the footer text"
			/>
		</div>
	);
};

export default Day13;
