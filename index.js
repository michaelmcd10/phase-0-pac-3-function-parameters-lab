function logTwoValues(value1, value2){
    console.log(`the two values are ${value1} and ${value2}.`);
}

function sayHelloTo(lastName){
    console.log(`Hello ${lastName}!`)()
}

function sayHelloTo(firstName="user"){
    console.log(`Hello ${firstName}!`)
}

logTwoValues(1,2)
let lastName = 'Mike'
sayHelloTo(`${lastName}`)
sayHelloTo("Javascript")