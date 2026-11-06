var firstname = "michal"
var lastname="Peter"

var sayHi = {
    firstname: "Zoe",
    lastname:"Lisa",
    greet:function(){
    return `Say hi to ${firstname} ${lastname}`
    }
}
console.log(sayHi.greet())