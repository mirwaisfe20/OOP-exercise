

/* Non Primativee Datatype */

const user3 = [1]
const users = ['user1', 'user2', 'user3']
users[0]
function test(){
    console.log('test has passed');
}


const fruit = {
     name : 'Mongo',
     color: 'yellow',
     weigth: 200,
     unit: 'gram'
}

const person = {
    name: 'MI6',
    location: {
        city: 'london',
        country: 'UK',
        zipCode: 841241
    },
    ranking: 5,
    friends: ['mike', 'mikey', 'carl']
}

const formulas = {

    name: 'algebra',
    add: function(a, b){
        return a + b;
    },
    multiply: function(x, y){
        return x * y;
    }

}


/* fruits */

/* console.log(fruit.name)
console.log(fruit.weigth)
console.log(fruit.unit)
console.log(fruit.color) */



/* person */
console.log(person.name)
console.log(person.friends)
console.log(person.location)
console.log(person.location.city)
console.log(person.location.country)


/* Formulas */
console.log(formulas.name);
console.log(formulas.add(10, 20))
console.log(formulas.multiply(10, 20))
