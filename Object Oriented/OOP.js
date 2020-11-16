/* object in javascript */
/* const customer = {
    name: 'Bianca',
    lastName: 'Johnsoon',
    email: 'bianca_johnsson@gmail.com',
    phone: '5555-444-22',
    contactPreference: 'sms',
    Adress: {
        streetAddress: 'Malibu',
        city: 'Malibu City',
        state: 'Cali',
        country: 'USA'
    }
}
 */

/* Object Oriented in javascript */
/* const customerX = {
    name: 'Bianca',
    lastName: 'Johnsoon',
    email: 'bianca_johnsson@gmail.com',
    phone: '5555-444-22',
    contactPreference: 'sms',
    Adress: {
        streetAddress: 'Malibu',
        city: 'Malibu City',
        state: 'Cali',
        country: 'USA'
    }
}
const customerY = {
    name: 'Bianca',
    lastName: 'Johnsoon',
    email: 'bianca_johnsson@gmail.com',
    phone: '5555-444-22',
    contactPreference: 'sms',
    Adress: {
        streetAddress: 'Malibu',
        city: 'Malibu City',
        state: 'Cali',
        country: 'USA'
    }
} */
/* javascript class before es 2015 */
function Customer(name, last, email, phone, address){
     this.name = name,
     this.lastName = last,
     this.email =  email,
     this.phone = phone;
     this.address = {
        streetAddress: 'Malibu',
        city: 'Malibu City',
        state: 'Cali',
        country: 'USA'
    }
}



customerX = new Customer('emma', 'jacob', 'emma@test.com', '444-444-44');
customerY = new Customer('MIkey', 'unknow', 'mikey@hackernews.com', '666-555-555');



const order1 = {
    menu: 'beef double cheese',
    drink: 'coca cola',
    fries: 'french fries'
}

const order2 = {
    menu: 'beef double cheese',
    drink: 'coca cola',
    fries: 'french fries'
}

function Order(menu, drink, fries){
    this.menu = menu;
    this.drink = drink;
    this.fries = fries;
}


const order3 = new Order('chieken BBQ', 'coffee', 'american fries');
const order4 = new Order('spagathi', 'cola','fat fries');



console.log(customerX)
console.log(customerY)


console.log(order3)
console.log(order4)


