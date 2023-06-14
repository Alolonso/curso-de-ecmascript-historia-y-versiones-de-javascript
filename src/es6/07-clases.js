// declarando 
class User {}
// instancia de una clase 
//const newUser = new User();

class user {
    //metodos 
    greeting(){
        return "Hello";
    }
}

const gndx = new user();
console.log(gndx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user {
    // Constructor
    constructor(){
        console.log("Nuevo Usuario")
    }
    greeting(){
        return "Hello";
    }
}

const david = new user();

// this

class user {
    constructor(name){
        this.name = name
    }
    // metodos
    speak(){
        return "Hello"
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const Ana = new user("Ana");
console.log(Ana.greeting());

// setters getters 

class user {
    // constructor 
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }

    // metodos 
    speak (){
        return "Hello";
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge() { //get obtener. Obtener el valor de age
        return this.age;
    }

    set uAge(n) { //set asignar. Asignar al age el valor de n
        this.age = n;
    }
}

const bebeloper1 = new user("David", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);