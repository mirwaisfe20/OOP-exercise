/* 
look at the example obj1
Write 3 objects car1 car2 car3 for three different cars with same property

const obj1 = {
    name: '',
    model: 0,
    engine: 'V8',
    color: 'blue'
    price: 2500,
    changeColor: function(newcolor){obj1.color: newColor}
}
*/

const car1 = {
    name: 'lambo',
    model: 2020,
    engine: 'v8',
    color: 'black',
    price: 4000000,
    changeColor: function(newColor){
        car1.color = newColor;
    }
}

const car2 = {
    name: 'bugatti',
    model: 2021,
    engine: 'v18',
    color: 'blue',
    price: 8000000,
    changeColor: function(newColor){
        car2.color = newColor;
    }
} 


const car3 = {
    name: 'volvo',
    model: 2020,
    engine: 'v12',
    color: 'white',
    price: 1000000,
    changeColor: function(newColor){
        car3.color = newColor;
    }
}

const navigation = {
    first: 'Mirwais',
    last: 'Shahryar',
    createLastName: function(){
        return `${navigation.first} ${navigation.last}`;
        /* return navigation.first + ' ' + navigation.last; */
    },
    acitvity: ['javascript', 'html5', 'Angualar'],
    changeStyle: function(newColor){
        const title = document.querySelector('.title');
        title.style.backgroundColor = newColor;
    }
}


const title = document.querySelector('.title');
title.textContent = `${navigation.createLastName()}`

const activity = document.querySelector('.activity');
activity.innerHTML = `
    <li>${navigation.acitvity[0]}</li>
    <li>${navigation.acitvity[1]}</li>
    <li>${navigation.acitvity[2]}</li>
`;


navigation.changeStyle('orange');
navigation.changeStyle('teal');




const aside = {
    name: document.querySelector('.side'),
    height: '100vh',
    minWidth: '15rem',
    bgColor: 'grey',
    textColor: 'white'
}



const element = aside.name;
element.style.backgroundColor =aside.bgColor;
element.style.height = aside.height;
element.style.width = aside.minWidth;
element.style.color = aside.textColor;



