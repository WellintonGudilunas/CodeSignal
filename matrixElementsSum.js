function solution(matrix) {

    let soma = 0;
    let colunasAssombradas = [];

    for(let linha = 0; linha < matrix.length; linha++){

        for(let coluna = 0; coluna < matrix[0].length; coluna++){

            if (linha === 0) {
                if(matrix[linha][coluna] === 0){
                    colunasAssombradas.push(coluna)
                }
                soma += matrix[linha][coluna];
            } else {
                if(matrix[linha][coluna] === 0){
                    colunasAssombradas.push(coluna)
                }

                if(matrix[linha][coluna]  !== 0 && colunasAssombradas.indexOf(coluna) == -1){
                    soma += matrix[linha][coluna] 
                }
            }
        }
    }

    return soma;
}

console.log(
    solution ([
        [0, 1, 1, 2], 
        [0, 5, 0, 0], 
        [2, 0, 3, 3]
    ])
);