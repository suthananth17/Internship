const ages = [3, 10, 18, 20];
 
const res = ages.some(checkAdult);
 
function checkAdult(age) {
  return age > 100;
}
 
console.log(res);