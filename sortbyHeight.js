const solution = n =>  {
    const arvores = []
    let pessoas = []

    for(let i = 0; i < n.length; i++){
        n[i] === -1 ? arvores.push(i) : pessoas.push(n[i]);
    }

    pessoas = pessoas.sort((a, b) => a - b)
    
    for(let i = 0, aux = 0; i < n.length; i++){
        if(n[i] !== -1){
            n[i] = pessoas[aux];
            aux++;
        }
    }

    return n;
}



console.log(solution([4, 2, 9, 11, 2, 16]))