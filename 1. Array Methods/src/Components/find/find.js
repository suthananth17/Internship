const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.find(findapple);
 
function findapple(item){
    return item === 'Apple';
}
 
console.log(result);
