// src/React-Fetch-API-Assignment/ProductCardList.js

import React, { useState, useEffect } from "react";

// ProductCard Component
const ProductCard = ({ product }) => {
	return (
		<div className="border rounded-lg shadow-md p-4 m-4 w-80">
			<img
				src={product.image}
				alt={product.title}
				className="w-full h-40 object-cover mb-4"
			/>
			<h2 className="text-lg font-semibold">{product.title}</h2>
			<p className="text-green-600 font-bold">${product.price}</p>
			<p className="text-gray-600">
				{product.description.length > 100
					? `${product.description.substring(0, 100)}...`
					: product.description}
			</p>
		</div>
	);
};

// ProductCardList Component
const Assignment2 = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetching data from the API
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setLoading(false);
			});
	}, []);

	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold mb-4">Product List</h1>
			{loading ? (
				<p className="text-center text-xl">Loading...</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			)}
		</div>
	);
};

export default Assignment2;
