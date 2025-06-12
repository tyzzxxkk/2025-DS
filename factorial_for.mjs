// for문을 이용해서 팩토리얼 구하기 - 상향식 계산 방법

function factorial(number) { //factorial이라는 이름의 함수를 정의
    let sum = 1; //결과를 저장할 변수 sum을 초기화, 곱셈이기 때문에 1로 시작

    for(let i = 1; i <= number; i++) { //i를 1부터 number까지 반복
        sum *= i; //sum에 현재 숫자 i를 곱함
    }
    return sum; //계산된 팩토리얼 값을 반환
}

console.log(factorial(5)); //함수에 5를 전달해서 실행하고, 콘솔 창에 출력

//답은 5! = 5 x 4 x 3 x 2 x 1 = 120