import React from "react";
import { MyProvider, useMyContext } from "./Context";

const ContextAPI = () => {
	const { title, description, data } = useMyContext();

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<h1 className="text-4xl font-bold text-blue-600 mb-4">{title}</h1>
			<p className="text-lg text-gray-700 mb-6">{description}</p>
			<div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
				<h2 className="text-2xl font-semibold text-blue-500">
					{data.productName}
				</h2>
				<p className="text-lg text-green-500 font-bold">
					{data.productPrice}
				</p>
				<p className="text-md text-gray-600 mt-2">
					{data.productDescription}
				</p>
				<h3 className="text-xl font-semibold mt-4">User Reviews:</h3>
				<ul className="list-disc list-inside mt-2 text-gray-600">
					{data.reviews.map((review, index) => (
						<li key={index}>
							<strong>{review.user}:</strong> {review.comment}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const ContextAPIWrapper = () => {
	return (
		<MyProvider>
			<ContextAPI />
		</MyProvider>
	);
};

export default ContextAPIWrapper;
