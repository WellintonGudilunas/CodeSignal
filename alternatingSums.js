const solution = n => {
    let team1 = [];
    let team2 = [];
    for(let i = 0; i < n.length; i++){
        i % 2 === 0 ? team1.push(n[i]) : team2.push(n[i])
    }
    let res = [];
    res.push(team1.reduce((ac, num) => ac + num, 0));
    res.push(team2.reduce((ac, num) => ac + num, 0));

    return res;
}


console.log(solution([50, 60, 60, 45, 70]));