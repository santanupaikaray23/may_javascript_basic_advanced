// local scope
// global scope

//enclose something

var a = 10;
function add(){
    var b = 20;
    return a+b
}
console.log("a>>>",a)
console.log("add>>>",add())
console.log("b>>>",b)

//variable that can be access outside the curly bracket and inside also that is
// global scope.
// variable that can only be access inside the curly bracket that is in local Scope.

var a = 30 ;
function add(){
    let b = 20;
    
    return a+b
}
console.log("a>>>",a)
console.log("b>>>",b)
console.log(add())

