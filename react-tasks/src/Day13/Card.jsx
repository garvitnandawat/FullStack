import React from "react";

const Card = ({ title, content, footerText }) => {
	return (
		<div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div className="p-8">
				<h3 className="text-2xl font-semibold text-gray-900">
					{title}
				</h3>
				<p className="mt-4 text-gray-600">{content}</p>
				<div className="mt-6">
					<button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
						Learn More
					</button>
				</div>
			</div>
			{footerText && (
				<div className="px-8 py-4 bg-gray-100 text-sm text-gray-600">
					{footerText}
				</div>
			)}
		</div>
	);
};

export default Card;
