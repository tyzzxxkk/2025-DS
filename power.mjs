function power(x, n) {
    if(n==0) return x;
    power(x, n-1) * x;
}

console.log(power(2, 5));