function solution(inputArray) {
    let maiorNumero =  Number.MIN_SAFE_INTEGER;
    let maioresStrings = [];
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].split("").length > maiorNumero) maiorNumero = inputArray[i].length;
    }

    for(let i= 0; i < inputArray.length; i++){
        if(inputArray[i].split("").length >= maiorNumero) maioresStrings.push(inputArray[i])
    }

    return maioresStrings
}



console.log(solution(["aba", "aa", "ad", "vcd", "aba"]))
