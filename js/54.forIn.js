let a = {
    firstname :"hello",
    lastname : "world",
    age : "89",
    country : "poland"

};
for (const key in a) {
 console.log(key+ " : " + a[key])   
}
console.log("\n")
let object = {
    JavaScript :92,
    firstname : "yahoo",
    lastname : "baba",
    country : "pakistan"

};

for (const key in object) {
     console.log(key +" : " + object[key])   
}