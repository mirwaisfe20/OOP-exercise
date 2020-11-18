/* write four methods that add, sub, multiply, divide x and y
then structure the methods into a class
*/

/* create a class called Mathematic */
function Mathy(){
/* function declaration */
        /* add */
    this.addNumbers = function (x, y){
        return x + y; 
    }
    
        /* sub */
    this.sub = function(x,y){
        return x - y;
    }

        /* multiply */
    this.multiply = function(x, y){
        return x * y;
    }

        /* divide */
    this.divide = function (x, y){
        return x / y;
    }

    this.count = 0;

    this.friends = {
        close: ['mike,', 'julia'],
        school: ['one', 'two']
    }

  

}

/* to use the class, you need a object from that class
    initialize a copy of the class
*/
const math = new Mathy()
math.addNumbers(10, 50)
const math2 = new Mathy(1000, 500)
/* method inside an object */
/* console.log(math.addNumbers(10,50)) */


/* Inhertance */
/* console.log(math.hasOwnProperty('count')) */

/* object.prototype */
/* console.log(math.__proto__) */



/********  
 * 
 * Modern JS class
 * 
 * ******/

/* write four methods that add, sub, multiply, divide x and y
then structure the methods into a class
*/



/* creating a class */

class Math{
    /* call and create values */
    constructor(number){
        this.user = [];
    }

    addNumbers(x, y){
        return x + y
    }

     sub(x,y){
        return x - y;
    }

    /* multiply */
    multiply(x, y){
        return x * y;
    }

    divide (x, y){
        return x / y;
    }


}


const math3 = new Math(600);

const math4 = new Math(800)

console.log(math3.favoriteNumber)
console.log(math4.addNumbers(78,98))



