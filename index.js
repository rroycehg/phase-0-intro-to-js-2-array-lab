// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];




 function destructivelyAppendCat() {
     cats.push('Ralph');
 }

 function destructivelyPrependCat() {
     cats.unshift('Bob');
 }
 

function destructivelyRemoveLastCat() {
    cats.pop();
}


function destructivelyRemoveFirstCat() {
    cats.shift();
}



function appendCat() {
    let newCats = [...cats];
    newCats.push('Broom');
    return newCats;
}


function prependCat() {
    let newCats = [...cats];
    newCats.unshift('Arnold');
    return newCats;
}


function removeLastCat() {
    let newCats = [...cats];
    newCats.pop();
    return newCats;
}


function removeFirstCat() {
    let newCats = [...cats];
    newCats.shift();
    return newCats;
}