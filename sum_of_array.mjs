// for문을 이용해서 배열의 합 구하기 - 상향식 계산 방법

/* function sumArray(arr) {
    let sum = 0;                          // 합을 저장할 변수 초기화

    for(let i = 0; i < arr.length; i++) { // 배열의 각 요소에 접근하기 위한 반복문
        sum += arr[i];                    // 현재 요소 값을 sum에 더함
    }

    return sum;                          // 최종 합 반환
} 

let arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr)); */              // 배열의 합 출력

// 재귀함수를 이용해서 배열의 합 구하기 - 하향식 계산 방법

function sumArray(arr) {
    if(arr.length === 1) return arr[0];              // 배열 길이가 1이면 그 값 반환 (기저 조건)
    return sumArray(arr.slice(0, -1)) + arr[arr.length - 1];  // 배열 마지막 값을 더하기 위해 재귀 호출
}

let arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr));                         // 배열의 합 출력
