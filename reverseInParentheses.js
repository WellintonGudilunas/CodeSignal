const solution = inputString => {
    let arr = inputString
    let i = 0, start = 0, end = -1
    while (end < start && i < arr.length) {
        if (arr[i] == '(') {start = i}
        if (arr[i] == ')') {end = i}
        i++
    }
   
    let temp = arr.substring(start + 1, end)
    if(start !== -1 && end !== -1){
        return solution(arr.substring(0, start) + 
        [...temp].reverse().join('') + 
        arr.substring(end + 1))
    }
    return arr
}

console.log(solution("foo(bar)baz"))
