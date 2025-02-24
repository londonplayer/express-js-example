import express from "express";

// mocks
import { users, products } from "./utils/mock.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});

app.get("/api/", (request, response) => {
	// request is what comes from the client: headers, body, etc.
	// response is what we send back to the client: json, html, etc.

	// .send() sends a response back to the client
	// .status() sets the status code of the response
	response.status(200).send({ message: "Hello World" });
});

app.get("/api/users", (request, response) => {
	response.status(200).send(users);
});

app.get("/api/users/:id", (request, response) => {
	const { id } = request.params;
	const user = users.find((user) => user.id === parseInt(id));

	if (!user) {
		response.status(404).send({ message: "User not found" });
	} else {
		response.status(200).send(user);
	}
});

app.get("/api/products", (request, response) => {
	response.status(200).send(products);
});

app.get("/api/products/:id", (request, response) => {
	const { id } = request.params;
	const product = products.find((product) => product.id === parseInt(id));

	if (!product) {
		response.status(404).send({ message: "Product not found" });
	} else {
		response.status(200).send(product);
	}
});
