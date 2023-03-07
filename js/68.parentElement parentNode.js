// DOM Traversal it's work parent and child or siblings
// It's throw a null
let a =document.querySelector("html").parentElement;
console.log(a);
// It's throw a node of html that is document and when we check the node of document it's throw a error
let b = document.querySelector("html").parentNode;
console.log(b);


