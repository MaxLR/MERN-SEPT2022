const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );

console.log(values)
console.log(cubes)

//using anonymous callback function
const evens = values.filter( val => val % 2 === 0 );
console.log(evens)
console.log(values)


const cubeSomeNumber = (num) => {
    return num**3
}

const isItEven = (val) => {
    return val % 2 == 0
}

//using .map w/ a named callback instead of anonymous
const cubedButWithNamedCallback = values.map(cubeSomeNumber)
console.log(cubedButWithNamedCallback)

//using .filter w/ a named callback instead of anonymous
const evensWithNamedCallback = values.filter(isItEven)
console.log(evensWithNamedCallback)


const persons = [
    { name: 'Rick', age: 70 },
    { name: 'Morty', age: 14 },
    { name: 'Summer', age: 17 },
    { name: 'Beth', age: 34 },
];

const transformName = (person) => {return `This is ${person.name} and they are ${person.age}`}

const namesWithAges = persons.map(transformName)
console.log(namesWithAges)

const notAbleToVoteYet = persons.filter(p => p.age < 18).map(transformName)
console.log(notAbleToVoteYet)


// This shows how .map works behind the scenes
Array.prototype.map2 = function (callback) {
    const newArr = []

    for (let i = 0; i < this.length; i++) {
        //"this" refers to whatever array called .map2
        const newItem = callback(this[i], i, this)
        newArr.push(newItem)
    }

    return newArr
}


const map2cube = values.map2(cubeSomeNumber)
console.log(values)
console.log(map2cube)

// creating our own filter method
Array.prototype.filter2 = function (callback) {
    const newArr = []

    for (let i = 0; i < this.length; i++) {
        //using callback that returns true or false
        const isValid = callback(this[i], i, this)

        //if callback evaluates to true, add current value to our output
        if (isValid) {
            newArr.push(this[i])
        }
    }

    return newArr
}

const filter2even = values.filter2(isItEven)
console.log(values)
console.log(filter2even)
