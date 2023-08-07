function solution(inputString) {
    return compareArrays(inputString, reverse(inputString))

}

function reverse(string){
    let arrayString = string.split("");
    let reverseString = [];

    for(let i = (arrayString.length -1) ; i >= 0; i--){
        reverseString.push(arrayString[i]);
    }

    return reverseString;
}

function compareArrays(a1, a2){
    if(a1.length !== a2.length) return false;

    for(let i = 0; i < a1.length; i++){
        if(a1[i] !== a2[i]) return false;
    }
    return true
}


console.log(solution("tuaaut"))