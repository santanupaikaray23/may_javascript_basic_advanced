function sayHi() {
    console.log("hiii")
}
sayHi()

// IFFI

(function(){
    console.log("hiii")
}())

// Generator

function loop(userInput){
    for (i=0; i<userInput; i++){
        yield i
    }
}
loop(5)