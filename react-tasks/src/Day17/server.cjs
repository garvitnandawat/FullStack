const express = require("express");
const app = express();
const products = require("./products.json"); // import the JSON file

app.use(express.json()); // To parse incoming JSON data

app.post("/api/products", (req, res) => {
	const newProduct = req.body; // Get new product data from request body
	products.push(newProduct); // Add new product to products array
	res.status(201).json(newProduct); // Send the new product as response
});

app.get("/api/products", (req, res) => {
	res.json(products);
});

app.listen(5000, () => {
	console.log("Server running on http://localhost:5000");
});
