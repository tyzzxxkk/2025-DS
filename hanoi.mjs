function hanoi(count, from, to, temp) {
    if (count === 0) return;
    
    // 1단계: 작은 원반들을 임시 기둥으로 옮김
    hanoi(count - 1, from, temp, to);
    
    // 2단계: 가장 큰 원반을 목적지로 옮김
    console.log(`원반 ${count} ${from} ==> ${to}`);
    
    // 3단계: 임시 기둥에 있는 원반들을 목적지로 옮김
    hanoi(count - 1, temp, to, from);
}

hanoi(10, "A", "C", "B");
