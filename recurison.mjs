function myFunction(number) {
    if (number > 10) return; // 종료 조건
    console.log(number);     // 현재 숫자 출력
    myFunction(number + 1);  // 다음 숫자 호출 (재귀)
}

myFunction(1); // 1부터 시작