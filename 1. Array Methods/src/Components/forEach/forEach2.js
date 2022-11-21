const numbers = [65, 44, 12, 4];
const newNumbers = numbers.filter(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item * 10;

  return item>40;
}

console.log(numbers); // [650, 440, 120, 4]
console.log(newNumbers); // [65, 44] - Check and Return the value



const numbers1 = [65, 44, 12, 4];
numbers1.forEach(myFunctionn)

function myFunctionn(item, index, arr) {
 console.log(item * 10);
}

console.log(numbers1);


