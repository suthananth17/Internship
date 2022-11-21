let input = "Hii Hello I am Fine";
let toUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let toLowerCase = 'abcdefghijklmnopqrstuvwxyz';
let output = [];

for(let i=0; i<input.length;i++){
    if(toLowerCase.indexOf(input[i]) !== -1){
        output.push(input[i].toUpperCase());
    }

else if(toLowerCase.indexOf(input[i]) !== -1)
    {
      output.push(input[i].toUpperCase());
    }
    else
    {
      output.push(input[i]);
    }
  }
console.log(output.join(''));

console.log(input.indexOf("i"));

