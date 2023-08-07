function solution( n ) {
    if(n.length === 1){
        return 0;
    }

    let arrayNovo = [];
    let maiorNumero =  Number.MIN_SAFE_INTEGER
    let menorNumero =  Number.MAX_SAFE_INTEGER


    for(let i = 0; i < n.length; i++){
        if(n[i] > maiorNumero) maiorNumero = n[i];
        if(n[i] < menorNumero) menorNumero = n[i];
    }

    for(let i = 0; i < n.length; i++){

        if( n.indexOf((n[i] + 1)) != -1 ){
            continue
        } else {
            if(n[i] + 1 >= maiorNumero) continue;
            if(n[i] + 1 <= menorNumero) continue;
            
            arrayNovo.push((n[i] + 1))
            n.push((n[i] + 1))
        }
    }
    if(!arrayNovo || arrayNovo.length === 0) return 0;

    return arrayNovo.length;
}


console.log(solution([5, 4, 6]));