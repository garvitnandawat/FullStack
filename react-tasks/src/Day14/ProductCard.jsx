import React from "react";

const ProductCard = ({ product }) => {
	return (
		<div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
			<h2 className="text-xl font-bold">{product.name}</h2>
			<p className="text-gray-600">${product.price.toFixed(2)}</p>
			<p className="mt-2">{product.description}</p>
		</div>
	);
};

export default ProductCard;
