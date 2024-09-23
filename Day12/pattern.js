const height = 5;
for (let i = 1; i <= height; i++) {
	let row = "";
	for (let j = 1; j <= i; j++) {
		row += "* ";
	}
	console.log(row);
}
console.log();

for (let i = 1; i <= height; i++) {
	let row = "";
	for (let j = height; j >= i; j--) {
		row += "* ";
	}
	console.log(row);
}
