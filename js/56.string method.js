let a = "hello world";
console.log(a.length);

let Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(Upper.toLowerCase()); 

let lower = "abcdefghijklmnopqrstuvwxyz"
console.log(lower.toUpperCase());

let inc = lower.includes('u');
console.log(inc)

let stwith = lower.startsWith('a')
let enwith = lower.endsWith('z');
console.log(stwith,enwith)

let str = "JavaScript is a great is language in the world "
srch = str.search("is");
console.log(srch);

let mat = str.match(/is/g); 
console.log(mat)

