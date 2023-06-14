//Acá estamos declarando y asignando el valor 
var lastName = "David";
//Acá reasignamos el valor de la variables lastName
lastName = "Oscar";
console.log(lastName);

//Declaramos y asignamos 
let fruit = "Apple";
//Reasignamos el valor de la variable fruit
fruit = "Kiwi";
console.log(fruit);


const animal = "Dog";
//Con const no podemos reasignar un valor
animal = "Cat";
console.log(animal);

//Arrow Functions  
const fruits = () => {
    if(true){
        var fruit1  =  "Apple"; //function scope 
        let fruit2 = "Kiwi"; //block scope
        const fruit3 = "Banana"; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();