const solution = n =>  {
    const arrayNum = n.toString().split("");
    if(arrayNum.length === 1) return false;

    const metade = (arrayNum.length / 2);
    const primeiraMetade = arrayNum.slice(0, metade);
    const segundaMetade = arrayNum.slice(metade, arrayNum.length);

    const somaPrimeiraMetade = primeiraMetade.reduce((acumulado, num) => parseInt(acumulado) + parseInt(num), 0);
    const somaSegundaMetade = segundaMetade.reduce((acumulado, num) => parseInt(acumulado) + parseInt(num), 0);

    return somaPrimeiraMetade === somaSegundaMetade ? true : false;
}



console.log(solution(123020))