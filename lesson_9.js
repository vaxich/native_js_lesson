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

//рекурсия

const pow = (x, n) => {
    if(n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
};

console.log(pow(4 , 2))
//
const factorial = () => {
    if( n === 1) {
        return n;
    } else {
        return n * factorial( n - 1);
    }
};

console.log(factorial(6));