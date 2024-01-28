// замыкания, лексическое окружение, рекурсия

let car ;

car = 'bmw';

function startEngenie () {
    console.log(`start ${car}`);
};

car = 'opel';

startEngenie();
// замыкание
const countreCreator = () => {

    let count = 0;

    return () => {

        console.log(++count);
    };
};

const counter1 = countreCreator();

counter1();
counter1();
counter1();