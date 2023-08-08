const solution = picture => {
	picture = picture.map( c =>'*'.concat( c ,'*'))
		var len = picture[0].length;
		picture.unshift(Array(len).fill('*').join(''));
		picture.push(Array(len).fill('*').join(''));
		
		return picture;
}