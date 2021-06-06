function nextFibonacci(n) {
  let a = (n * (1 + Math.sqrt(5))) / 2;
  return Math.round(a);
}

// Driver code

let n = 19;
console.log(nextFibonacci(n));
