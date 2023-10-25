// типы данных number, string, undefind, null, symbol, boolean, BitInf - примитивы - не изменяемый размер памяти
//  object (и array)  - ссылочные типы данных - динамически изменяемый размер памяти
// есть 2 вида памяти - стек (ячейка памяти) и куча
// примитивы создаются в стеке
// ссылочные типы данных создаются в "куче", одновременно в "стеке" создаётся адрес на "кучу" где хрниться объект
// const b = a; при копировании примитивов создаётся НОВАЯ запись в "стеке"
// const newUser = user - при копировании ссылочных типов создаётся НОВАЯ ссылка, т.е. ссылок в "стеке" будет два, а объект в "куче" один
// при сравнивании ссылочных типов  - они никогда не будут равны, т.к. сравниваются ССЫЛКИ

// const a = 3;

// const b = a;

// const user = {
//     name: "Bob"
// }

// const newUser = user
// C - create
// R - read
// U - update
// D - delete

//const obj = new Object()

const users = [
    {
        name: "Bob",
        age: 22,
        isMarried: true
    },
    {
        name: "alex",
        age: 27,
        isMarried: true
    },
    {
        name: "Ivan",
        age: 18,
        isMarried: false
    },
    {
        name: "Vika",
        age: 29,
        isMarried: false
    }
]