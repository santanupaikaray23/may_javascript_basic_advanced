if(condition){
    //do something
}else{
    //do something 
}

var a = 45679

if(a%2==0){
    console.log(`Number ${a} is even`)
} else {
    console.log(`Number ${a} is odd`)
}

var name = "Aakash"
if(name=="Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Aakash"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} i don't know your role`)
}

var role = "Admin"
var name= "John"
if(role == "Admin"){
    if(name=="Aakash"){
        console.log(`hi ${name} you are ${role}`)

    }else{
        console.log(`hi ${name} you are unknown`)
    }
}else if(role=="User"){
    if(name=="Aakash"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}

//any condition can match 
var name = "Tina"
if(name == "Tina" || name == "Nikita"){
    console.log(`hi ${name} you are welcome`)
}

//both condition should match 

var name = "Tina"
if(name=="Tina" && role=="Admin"){
    console.log(`hi ${name} you are ${role}`)
}

var name = "Tina"
if(name=="Tina" && (role=="Admin" || role=="User")){
    console.log(`hi ${name} you are ${role}`)
}

var a = 1
if(a){
    console.log("hi")
}else{
    console.log("bye")
}
hi
var a = 0
if(a){
    console.log("hi")
}else{
    console.log("bye")
}
bye
var a = -1
if(a){
    console.log("hi")
}else{
    console.log("bye")
}
hi

// all the compare operater will always return boolean response
truthy>any number except 0 whether +ve or -ve / string / true
falsy>0, false, null, undefined

// Ternary

// Single line if else

    var a = 10
    a>10?"hii":"bye"

    // if the condition before the question mark is true  then first part will run else second part will run

var a = 10
a>10?a+1:a-1

var a = 10
a==10?"hii":"Bie"?"test1":"test2" 

var a = 10
a>10?"hii":"Bie"?"test1":"test2"