/* sample user object */

const user01 = {
    name : 'testUSer',
    id : '007784045',
    city : 'Stockholm'
}


/********** Object Oriented Pattern ***********/

/*  class   /es5, javascript before 2015  */
/* constructor */

function User(newID,firstName, ageValue){
    this.id = newID
    this.name = firstName;
    this.age = ageValue
    this.greeting = {
        message: "some message",
        status: "Success"
    }

    this.createGreeting = function(){
        return `message:${this.greeting.message} `
    }


    return 100;
}



/* initialize the instance(an object) of the class using the class constructor */

/* by calling this, you want to construct an object using the class */
const user1 = new User('007', 'ryan', '35');
const user2 = new User('009', 'james', '50')




