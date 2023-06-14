class user {
    // constructor 
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }

    // metodos 
    #speak (){
        return "Hello";
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() { //get obtener. Obtener el valor de age
        return this.age;
    }

    set #uAge(n) { //set asignar. Asignar al age el valor de n
        this.age = n;
    }
}

const bebeloper1 = new user("David", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);