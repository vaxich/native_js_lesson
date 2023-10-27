const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scories: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scories: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scories: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scories: 100
    }
]
//----------------  map

const getNames = (array) => {
    const result = new Array() //  []
    const getName = el => el.name

    for (let i = 0; i < array.length; i++) {
        result[i] = getName(array[i])
        
    }
    return result
}

const getNames2 = (students) => {
    let names = students.map( st => st.name)
    return names
}


console.log(getNames(students));
console.log(getNames2(students));
//------------------------

const getScories = (array) => {
    const result =  []
    const getResult = el => el.scories

    for (let i = 0; i < array.length; i++) {
        result[i] = getResult(array[i])
        
    }
    return result
}
const getScories2 = (students) => {
    let scorie = students.map( st => st.scories)
    return scorie
}

console.log(getScories(students));
console.log(getScories2(students));
//------------------


// const addScories = (array) => {
//     const result =  []
//     const getResult = el => ({... el, scories: scories + 10})

//     for (let i = 0; i < array.length; i++) {
//         result[i] = getResult(array[i])
        
//     }
//     return result
// }

const addScories2 = (students) => {
    
    let result = students.map( st => ({... st , scories: st.scories + 10}))
    
    return result
}


console.log(addScories2(students));

//----------------- filter

const filteredStudents =(students) => {
    let filteredStudents = students.filter( student => student.age >= 21)
    return filteredStudents
}

console.log(filteredStudents(students));
//------------  find

const getFind = (students) => {
        let findSt = students.find( st => st.scories >= 90)
        return findSt
}
console.log(getFind(students));
