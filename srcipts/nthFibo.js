function nthFibo(n) {
  if (n <= 0) {
    return "Число меньше либо равно 0";
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n - 2);
  }
}

console.log(nthFibo(4));
