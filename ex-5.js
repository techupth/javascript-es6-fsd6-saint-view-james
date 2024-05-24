function sum(...number) {
  // Start coding here !
  console.log(number);
  let totalNumber = 0;
  for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    totalNumber += number[i];
  }
  return totalNumber;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
