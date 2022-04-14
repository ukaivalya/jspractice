const addUp = (n) => {
  if (n < 0 || typeof(n) !== "number") {
    return "Enter any positive number between 1 and 1000."
  } else {
   let a = 0;
   let b = 1;
   for (let i = 0; i < n; i++) {
    a = a + b;  // a = 1,a=2,a=3,a=4
    b = b +  1;
   }
   return a;
  }
  
};

console.log(addUp(4));
