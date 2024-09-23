// src/Day14/day14.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "./data.json";

const Day14 = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		// Simulating a fetch; in a real-world scenario, you might fetch from an API
		setProducts(productsData);
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Product List</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Day14;
