const regex = /\b(Apple)+\b/g;
const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."
for (const match of fruit.matchAll(regex)){
    console.log(match)
}

const regexx = /\b(Apple)+\b/g
const fruitt = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."
// Tranformación del iterable retornado a array
const array = [...fruitt.matchAll(regexx)]
console.log(array)