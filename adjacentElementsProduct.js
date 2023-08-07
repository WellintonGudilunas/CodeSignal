function solution(inputArray) {
    let maiorProduto = Number.MIN_SAFE_INTEGER
    let possivelMaior = Number.MIN_SAFE_INTEGER

    for(let i = 0; i < inputArray.length; i++){
        if (inputArray[i + 1] !== undefined) possivelMaior = inputArray[i] * inputArray[i + 1]; 
            

        if (possivelMaior > maiorProduto) maiorProduto = possivelMaior;
    }
    return maiorProduto
}




console.log(solution([3, 6, -2, -5, 7, 3]));
