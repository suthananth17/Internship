let a = 8;
let b = 4;

if (a > b) {
  while (a > b) {
    console.log(`B is still small`);
    console.log(b)
    b++;
    if (b > a) {
      console.log(`B is now greater than A`);
      console.log(b)

      
    }
  } 
} else if (b > 3) {
  console.log(b)
  console.log(`B is greater than A`);
}


