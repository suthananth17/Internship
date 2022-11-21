const numbers = [1, 2, 3, 4];
 
const total = numbers.reduce(sum, 10);
 
function sum(accumulator, value, index, arr) {
  return accumulator + value;
}
 
console.log(total);