//sort
const names = ["Donald", "Bob", "Alex"];
names.sort();
// 1. сортирует строки по "алфавиту" "из коробки", т.е без доп.параметров
console.log(names);

const namesAlt = ["Donald", "Bob", "Alex", "alex", "bob", 100, "Юрий", "игорь"];

namesAlt.sort()
console.log(namesAlt);
//2.сортирует строки по unicode "из коробки", т.е без доп.параметров
// цифры
// лат алфавит(заглавные)
// лат алфавит(строчные)
// символы других алфавитов (заглавные - строчные)

// 3. работает мутабельно (сортирует массив на месте - изменяя его)
console.log(namesAlt === namesAlt.sort());// true
// 4. возвращает ссылку на исходный массив


const sortedArray = namesAlt.toSorted(); // возвращает новый массив
console.log(sortedArray);
console.log(namesAlt === namesAlt.toSorted());// false
// toSorted возвращает новый массив - иммутабельно


const numbers = [9, 100, 777, 2000];

console.log(numbers.sort());// переделывает числа в строки, и сортирует как строки
const compareFn = (a, b) => { // по убыванию
    if(a < b){ // если по возрастанию, то a < b
        return 10
    } else {
        return -10
    }
    
}
console.log(numbers.sort(compareFn)); // [ 2000, 777,  100,  9] - по убыванию

const compareFnShort = (a, b) => b - a; //  укороченная версия compareFn
console.log(numbers.sort(compareFnShort));// [ 2000, 777,  100,  9] - по убыванию
// для остальных случаев необходимо параметром передать фунукцию сравнения
//(callback) . функция сравнения должна возврвщать число большее или меньшее 0
console.log(numbers.reverse());
// 7. вместе с sort часто используется reverse

//---------

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 121
    },
    {
        name: "John",
        age: 19,
        isMarried: true,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
]

console.log(students.sort( (a, b) => a.age - b.age)); // сортировка массива объуктов по ключу age (числовое сравнение)

console.log(students.sort((a, b) => a.name.localeCompare(b.name)));// сортировка массива объектов students по строковым значениям

// пузырьковая сортировка

const nums = [87, 34, 22, 12]; //по возрастанию
let count = 0;
for (let j = 0; j < nums.length -1; j++) {
    for (let i = 0; i < nums.length - 1; i++) {
        count++
        if(nums[i+1] < nums[i]){
            const temp = nums[i]
            nums[i] = nums[i+1]
            nums[i+1] = temp
        }
        
    }
    
}
console.log(nums);
