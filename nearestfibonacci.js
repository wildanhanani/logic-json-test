function fibonacci(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

function findNearestFibNumber(arr) {
  sum = 0;
  arr.map((value) => {
    sum += value;
  });

  let i = 0;
  let cond = true;
  let nearestFib = 0;

  while (cond) {
    let fib = fibonacci(i);
    if (fib >= sum) {
      cond = false;
      nearestFib = fib;
    }
    i++;
  }

  console.log(
    `Total array ${sum}, and nearest fibonacci is ${nearestFib}, so result is: ${
      nearestFib - sum
    }`
  );
}

findNearestFibNumber([15, 1, 3]);
