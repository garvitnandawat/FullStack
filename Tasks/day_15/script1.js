let rows = 8;

let pattern = "";

for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= rows-(n-1); num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);