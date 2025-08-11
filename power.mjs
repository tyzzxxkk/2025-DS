function power(x, n) {
    if (n === 0) return 1;           // 0제곱은 1
    return power(x, n - 1) * x;      // 재귀적으로 곱셈
}

console.log(power(2, 5)); // 출력: 32
