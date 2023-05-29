//spread operator
function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  
  

//spread operator
//array manipulation
const array1 = [1, 2, 3];
const array2 = [4, 5, 6,7,8];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);


//rest operator
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  
  console.log(sum(1,2,3,4,5,6,7,8,5,4));

//rest operator
//array destructuring
const numbers1 = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers1;

console.log(first);
// Output: 1

console.log(second);
// Output: 2

console.log(rest);
// Output: [3, 4, 5]


  
