function solution(s1, s2) {
    let commonCount = 0;
    
    for (const char of s1) {
        const index = s2.indexOf(char);
        if (index !== -1) {
            commonCount++;
            s2 = s2.slice(0, index) + s2.slice(index + 1);
        }
    }
    return commonCount;
  }
  



let s1 = "aabcc";
let s2 = "adcaa";

console.log(solution(s1, s2))