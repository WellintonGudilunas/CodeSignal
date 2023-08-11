/* 
Guaranteed constraints:
a[i].length = a.length,
*/

const solution = matriz => {
    let newMatriz = [];

    for (let i = 0; i < matriz.length; i++) {
        newMatriz.push([]);
    }

    for (let col = 0, i = matriz.length - 1; col < matriz.length; col++, i--) {
        for (let y = 0; y < matriz.length; y++) {
            newMatriz[y][col] = matriz[i][y];
        }
    }

    return newMatriz;
}

console.log(
    solution([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);

