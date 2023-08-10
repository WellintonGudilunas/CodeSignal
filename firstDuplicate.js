function solution(s) {
	s = s.split("");
	const caracteres = {};
  
	for (let i = 0; i < s.length; i++) {
		
	  if (!caracteres.hasOwnProperty(s[i])){
		caracteres[s[i]] = 0;
	  }
	  
	  caracteres[s[i]]++;
	}
	for (const key in caracteres) {
	  if (caracteres[key] === 1) return key;
	}
  
	return "_";
  }

console.log(solution("abacabaabacaba"))