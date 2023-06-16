// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];



function destructivelyAppendCat(name){
    cats.push("Ralph");
    console.log(`Destructively, ${name}`);
}
destructivelyAppendCat(cats1)

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    console.log(`Destructively, ${name}`);
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}
function appendCat(name) {
    return cats.concat(name);
  }
var newArray = append.Cat("deka")



function prependCat(name){
    return [name].concat(cats);
}
var newArray = prependCat("deka");


//to remove the last cat "Garfied"
function removeLastCat(name){
    return cats.slice(0,-1);
}
var newArray = removeLastCat();


//to remove the first cat
function removeFirstCat(name){
    return cats.slice(1);
}
var newArray = removeFirstCat();
