// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push(name);
}
destructivelyAppendCat("Ralph");


function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat('Bob');

function destructivelyRemoveLastCat(){
cats.pop()
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift()
}
destructivelyRemoveFirstCat();

function appendCat(name){
const newArray=cats.concat([name])
return newArray
}
appendCat('Broom');
//console.log(appendCat('Broom'));

function prependCat(name){
    const newArray=[name, ...cats]
    return newArray
}
prependCat('Arnold');
//console.log(prependCat('Arnold'));


function removeLastCat(){
    const newCAts = [...cats]
    newCAts.splice(-1, 1)
    return newCAts
}
removeLastCat()

function removeFirstCat(){
    const newCAts = [...cats]
    newCAts.splice(0, 1)
    return newCAts
}
removeFirstCat()
