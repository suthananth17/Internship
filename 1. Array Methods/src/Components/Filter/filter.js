const ages = [65, 77, 20, 40];
const result = ages.filter(checkAdult);
 
function checkAdult(age) {
  return age >= 18;
}
console.log(result);