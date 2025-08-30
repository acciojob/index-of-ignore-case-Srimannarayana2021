function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s2=s2.toLowerCase();
	s1=s1.toLowerCase();
	for(let i=0;i<=s1.length-s2.length;i++){
		const l2 = s2.length;
		if(s2 === s1.slice(i,i+l2)) return i;
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
