function solution(sequence) {
    let removedCount = 0;
  
    for (let i = 1; i < sequence.length; i++) {
      if (sequence[i] <= sequence[i - 1]) {

        removedCount++;

        if (removedCount > 1) {
          return false;
        }

        if (i - 2 >= 0 && sequence[i] <= sequence[i - 2] && i + 1 < sequence.length && sequence[i + 1] <= sequence[i - 1]) {
          return false;
        }
      }


    }
  
    return true;
  }

console.log(solution([1, 3, 2]));

