let element;
// element = document.querySelector("#hireme").style.fontStyle="italic";
// console.log(element);


function fun(){
    console.log(document.querySelector("#hireme").style.color="green");
}
function fun1(){
    console.log(document.querySelector("#hireme").style.backgroundColor="pink");
    console.log(document.querySelector("#hireme").style.color="red");
    alert(document.querySelector("#hireme").style.color="red");
}
// If any css property have a hyphen so when we want to write in querySelector then we write in the form of camelCase.
function wheel(){
    console.log(document.querySelector("p").style.backgroundColor="aqua");
    console.log(document.querySelector("p").style.color="black");
    
}

element=document.querySelector("#hireme").className = "c_hire abc";
// console.log(element)