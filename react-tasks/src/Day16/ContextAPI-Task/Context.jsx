import React, { createContext, useContext } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
	const value = {
		title: "Context API Task",
		description: "Task-2 of Day-16",
		data: {
			productName: "Awesome Product",
			productPrice: "$99.99",
			productDescription:
				"This product is designed to make your life easier and more enjoyable. It comes with amazing features and is loved by many!",
			reviews: [
				{ user: "Alice", comment: "This is fantastic!" },
				{ user: "Bob", comment: "I highly recommend it." },
				{ user: "Charlie", comment: "Good value for the price." },
			],
		},
	};

	return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
	return useContext(MyContext);
};
