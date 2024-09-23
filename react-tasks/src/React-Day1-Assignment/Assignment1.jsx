import React, { useState } from "react";

// Task 1: Simple Props
const Greeting = ({ name }) => {
	return <h1 className="text-2xl font-bold my-4">Hello, {name}!</h1>;
};

// Task 2: Multiple Props
const ProfileCard = ({ name, age, location }) => {
	return (
		<div className="border p-4 rounded-lg shadow-lg my-4">
			<h2 className="text-xl font-semibold">Name: {name}</h2>
			<p>Age: {age}</p>
			<p>Location: {location}</p>
		</div>
	);
};

// Task 3: Conditional Rendering with Props
const StatusMessage = ({ status }) => {
	return (
		<div className="ml-10 my-4">
			{status === "success" ? (
				<p className="text-green-600">Operation was successful!</p>
			) : (
				<p className="text-red-600">There was an error</p>
			)}
		</div>
	);
};

// Task 4: useState Basics
const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="my-4">
			<h2 className="text-xl font-semibold">Count: {count}</h2>
			<button
				className="bg-blue-500 text-white px-4 py-2 rounded-md m-2"
				onClick={() => setCount(count + 1)}>
				Increment
			</button>
			<button
				className="bg-red-500 text-white px-4 py-2 rounded-md m-2"
				onClick={() => setCount(count - 1)}>
				Decrement
			</button>
		</div>
	);
};

// Task 5: Props and useState Interaction
const LikeButton = ({ initialLikes }) => {
	const [likeCount, setLikeCount] = useState(initialLikes);
	return (
		<div className="my-4">
			<button
				className="bg-green-500 text-white px-4 py-2 rounded-md"
				onClick={() => setLikeCount(likeCount + 1)}>
				Likes: {likeCount}
			</button>
		</div>
	);
};

// Task 6: State Initialization with Props
const Timer = ({ start }) => {
	const [time, setTime] = useState(start);
	return <h2 className="my-4">Current Time: {time} seconds</h2>;
};

// Task 7: Updating Parent State from Child
const ColorPicker = ({ onColorSelect }) => {
	return (
		<div className="my-4">
			<button
				className="bg-red-500 text-white px-4 py-2 rounded-md mx-2"
				onClick={() => onColorSelect("Red")}>
				Red
			</button>
			<button
				className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2"
				onClick={() => onColorSelect("Blue")}>
				Blue
			</button>
		</div>
	);
};

// Task 8: Controlled Component
const TextInput = ({ onTextChange }) => {
	const [text, setText] = useState("");
	return (
		<div className="my-4">
			<input
				className="border p-2 rounded-lg"
				type="text"
				value={text}
				onChange={(e) => {
					setText(e.target.value);
					onTextChange(e.target.value);
				}}
			/>
		</div>
	);
};

// Task 9: Props as Functions
const ToggleSwitch = ({ toggleState }) => {
	return (
		<button
			className="bg-yellow-500 text-white px-4 py-2 rounded-md my-4"
			onClick={toggleState}>
			Toggle
		</button>
	);
};

// Task 10: Rendering Lists with Props
const TodoList = ({ todos }) => {
	return (
		<ul className="my-4">
			{todos.map((todo, index) => (
				<li key={index} className="border-b p-2">
					{todo}
				</li>
			))}
		</ul>
	);
};

// Main Component for all tasks
const Assignment1 = () => {
	const [color, setColor] = useState("");
	const [text, setText] = useState("");

	return (
		<div className="p-8">
			<h2 className="text-3xl font-bold mb-4">Day 1 Assignment</h2>

			<h3 className="text-xl font-semibold mt-8">
				Task 1: Simple Greeting with Props
			</h3>
			<Greeting name="John Doe" />

			<h3 className="text-xl font-semibold mt-8">
				Task 2: Profile Card with Multiple Props
			</h3>
			<ProfileCard name="Jane Smith" age={30} location="New York" />

			<h3 className="text-xl font-semibold mt-8">
				Task 3: Conditional Rendering with Props
			</h3>
			<StatusMessage status="success" />
			<StatusMessage status="error" />

			<h3 className="text-xl font-semibold mt-8">
				Task 4: useState Basics (Counter)
			</h3>
			<Counter />

			<h3 className="text-xl font-semibold mt-8">
				Task 5: Like Button with Props and useState
			</h3>
			<LikeButton initialLikes={10} />

			<h3 className="text-xl font-semibold mt-8">
				Task 6: Timer Initialized with Props
			</h3>
			<Timer start={60} />

			<h3 className="text-xl font-semibold mt-8">
				Task 7: Color Picker to Update Parent State
			</h3>
			<ColorPicker onColorSelect={setColor} />
			<p>Selected Color: {color}</p>

			<h3 className="text-xl font-semibold mt-8">
				Task 8: Controlled Component (Text Input)
			</h3>
			<TextInput onTextChange={setText} />
			<p>Input Text: {text}</p>

			<h3 className="text-xl font-semibold mt-8">
				Task 9: Toggle Switch Using Props as Functions
			</h3>
			<ToggleSwitch toggleState={() => alert("Toggled!")} />

			<h3 className="text-xl font-semibold mt-8">
				Task 10: Rendering a List with Props
			</h3>
			<TodoList todos={["Task 1", "Task 2", "Task 3"]} />
		</div>
	);
};

export default Assignment1;
