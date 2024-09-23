// Task 1: Basic setTimeout
function delayedMessage(message, delay) {
	setTimeout(() => {
		console.log(message);
	}, delay);
}

delayedMessage("Hello, world!", 2000);

// Task 2: Basic setInterval
function countdown(number) {
	let counter = number;
	let intervalId = setInterval(() => {
		console.log(counter);
		counter--;
		if (counter === 0) {
			clearInterval(intervalId);
		}
	}, 1000);
}

countdown(5);

// Task 3: Clearing Intervals
function countdownWithCallback(number, callback) {
	let counter = number;
	let intervalId = setInterval(() => {
		console.log(counter);
		counter--;
		if (counter === 0) {
			clearInterval(intervalId);
			callback();
		}
	}, 1000);
}

countdownWithCallback(5, () => {
	console.log("Countdown complete!");
});

// Task 4: Using Promises with setTimeout
function wait(delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, delay);
	});
}

wait(2000).then(() => {
	console.log("Promise resolved!");
});

// Task 5: Promise-based Countdown
function countdownWithPromise(number) {
	let counter = number;
	return new Promise((resolve) => {
		let intervalId = setInterval(() => {
			console.log(counter);
			counter--;
			if (counter === 0) {
				clearInterval(intervalId);
				resolve();
			} else {
				wait(1000).then(() => {
					// do nothing, just wait for the next iteration
				});
			}
		}, 1000);
	});
}

countdownWithPromise(5).then(() => {
	console.log("Countdown complete!");
});

// Task 6: Chaining Promises
function delayedLogSequence(messagesAndDelays) {
	let promise = Promise.resolve();
	messagesAndDelays.forEach(([message, delay]) => {
		promise = promise.then(() => {
			return wait(delay).then(() => {
				console.log(message);
			});
		});
	});
	return promise;
}

const messagesAndDelays = [
	["Message 1", 1000],
	["Message 2", 2000],
	["Message 3", 3000],
];
delayedLogSequence(messagesAndDelays);

// Task 7: Using async/await with Promises
async function delayedLogSequenceAsync(messagesAndDelays) {
	for (const [message, delay] of messagesAndDelays) {
		await wait(delay);
		console.log(message);
	}
}

const messagesAndDelaysAsync = [
	["Message 1", 1000],
	["Message 2", 2000],
	["Message 3", 3000],
];
delayedLogSequenceAsync(messagesAndDelaysAsync);

// Task 8: Combining setTimeout and Promises
function randomDelayMessage(message) {
	const delay = Math.floor(Math.random() * 4000) + 1000;
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(message);
			resolve();
		}, delay);
	});
}

randomDelayMessage("Hello, world!").then(() => {
	console.log("Message logged!");
});

// Task 9: Using setInterval with Promises
function repeatAction(action, interval, duration) {
	let timeoutId;
	let intervalId = setInterval(() => {
		action();
		timeoutId = setTimeout(() => {
			clearInterval(intervalId);
		}, duration);
	}, interval);
	return new Promise((resolve) => {
		timeoutId = setTimeout(() => {
			resolve();
		}, duration);
	});
}

function logMessage() {
	console.log("Repeating action!");
}

repeatAction(logMessage, 1000, 5000).then(() => {
	console.log("Repeating action stopped!");
});
