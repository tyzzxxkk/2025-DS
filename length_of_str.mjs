function strLength(str) {
    if (str === "") return 0; // 문자열이 비었을 때 종료
    return strLength(str.slice(0, -1)) + 1; // 마지막 문자 제거하며 재귀 호출
}

let str = "abcde";
console.log(strLength(str)); // 출력: 5
