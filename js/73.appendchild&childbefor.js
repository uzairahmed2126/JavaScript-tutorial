// function addition(num1,num2){
//     // return (+num1) + (+num2);
//     array.forEach(element => element{
//     // return (+num1) + (+num2);

//     });
// }
// console.log(addition([3, 2]));
// console.log(addition([-3, -6]));
// console.log(addition([7, 3]) );
// console.log(addition(['7', '3']));
// console.log(addition(['7', 3]));

let sum = 0
let arr = [10, 20, 30, 40, 50]
for (let a = 0; a <= 4; a++) {
  sum = sum + arr[a]
  console.log(sum * arr[a])
}

let str=[true ,"hello","world"]
for(let b=0;b<=2;b++){
    console.log(str[1]+" "+str[2])
}

let sum1=2;
let arr1 = Array();
for(let b=0;b<3;b++){
    arr1[b] = prompt("Enter the vlaue :");
}

for(let a=0;a<3;a++){

    document.write(arr[a]);
}

let x=Array();
x[0]="hello";
x[1]=true;
x[2]=false;
x[3]=78;
x[4]='a';

for(let y=0;y<6;y++){
    console.log(x[y]);
}