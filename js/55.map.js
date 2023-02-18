let arr = [{fname :"uzair",lastname : "ahmed"} ];
b=arr.map(test);
document.write(b)
function test(x){
    console.log(x.fname);
}

let uzz = [12.3,2344,323,2,4]
con=uzz.map(mult);
console.log(con);
function mult(f){
    return f*10;
}


