// src/Day15/day15.jsx
import React, { useEffect, useState } from "react";

const Day15 = () => {
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(1); // Initial count of products to display

	const fetchProducts = async () => {
		try {
			const response = await fetch("https://dummyjson.com/products");
			const data = await response.json();
			setProducts(data.products); // Set products from the API
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const incrementCount = () => {
		setCount((prevCount) => Math.min(prevCount + 1, products.length)); // Increment count
	};

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Dummy Product List</h1>
			<button
				onClick={incrementCount}
				className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
				Show More Products
			</button>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{products.slice(0, count).map((product) => (
					<div
						key={product.id}
						className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
						<h2 className="text-xl font-bold">{product.name}</h2>
						<p className="text-gray-600">${product.price}</p>
						<p className="mt-2">{product.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Day15;
