/* create User class */
/* sample objec */
const user = {
    name: 'test',
    email: 'test@gmail.com'
}

class User{
    constructor(userName, userEmail){
      this.name = userName
      this.email = userEmail
    }

    
}

User.prototype.greeting = function(){
    return 'hello everyone'
}


/* free user */

class FreeUser extends User{
    constructor(userName, userEmail, message){
       /* import the username and email from the class which we extended */
       super(userName,userEmail)
       this.welcomeMessage = message;
    }

}

/* calling the class constructor to construct an object */

const freeUser1 = new FreeUser('user1', 'test@gmail.com', 'Welcome to free user area, you can not use everything');

console.log(freeUser1)
/* Inheritance */

/* premium user */


class PremiumUser extends FreeUser{
    constructor(userName, userEmail, welcomeMessage, userDiscount){
        super(userName, userEmail);
        this.welcomeMessage = welcomeMessage;
        this.disount = userDiscount
    }
}

const paidUser1 = new PremiumUser('newuser', 'user@hacker.se', 'you are paid member, you can use everthing', ['monitors', 'keyboards']);


console.log(paidUser1)