let rows = 8;

let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);