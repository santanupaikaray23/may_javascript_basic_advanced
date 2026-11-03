var a = 10
var b = 20
a+b
30

function
method
arrow function
generator

// functions
function add(a,b){
    return a+b
}

function add(a,b){
    console.log("a>>>",a)
    console.log("b>>>",b)
    return a+b
}

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is Even`
    }else{
        out = `Number ${userInput} is Odd`
    }
    return out;
}

function test(a,b){
    return a,b
}
test(10,20)

function add(...args){
    console.log(args)
}
add(10,20,30,40,50)

function add(...args){
    let sum = 0
    for (data of args){
        sum = data+sum
    }
    return sum
}
add(1,2,3,45)
51

// method > when function assign to a variable

function add(a,b){
    return a+b
}
add(1,3)

var add = function(a,b){
    return a+b
}
add(2,5)

///es6///
///arrow function///
let add = (a,b)=>{return a+b}
add(1,2)
3

let add = (...args) => { return a+b }