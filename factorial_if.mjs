//재귀함수를 이용해서 팩토리얼 구하기 - 하향식 계산 방법

function factorial(number) { //factorial이라는 함수를 정의
    if(number === 1) return 1;//number가 1이면 더 이상 계산하지 않고 1을 반환
    else return number * factorial(number-1); //number가 1보다 크면, 현재 숫자에 그보다 하나 작은 수의 팩토리얼을 곱함
}

console.log(factorial(5));