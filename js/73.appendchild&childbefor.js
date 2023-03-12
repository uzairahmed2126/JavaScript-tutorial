let newelement = document.createElement("h5");
let newtxt = document.createTextNode("Hello i  write here with the use of DOM append method");
newelement.appendChild(newtxt);
// document.write(a.innerHTML);
document.querySelector('#hireme').appendChild(newelement);
console.log(newelement);
