-> Spread will let you send multiple argument.

function add(a,b,c,d){
    return a+b+c+d
}

var num = [1,2,4,5,7]

console.log(add(num));

num.map((data)=>{add(data)})

function add(a,b,c,d){
    return a+b+c+d
}
var num = [1,2,3,4]
add(...num)

var cars = ['Kia','BMW','Volvo']

var car2 = ['Sokda', 'Marc', 'Audi', 'Nexa']

var movies = {
    name: 'Avengers',
    rating:4.4,
    language:'English'
}

for (key in movies){
    console.log(key)
}

var calc = {
    sum: function(a,b){return a+b},
    sub: (a,b) => {return a-b}
}
calc.sum(1,2)

var calc = {
    sum: function(a,b){return a+b},
    sub: (a,b) => {return a-b}
}
calc.sub(1,2)