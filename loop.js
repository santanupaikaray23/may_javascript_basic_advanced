for
while
do while
for of
for in
map
filter

for > Generate series of value or help to iterate over array

for (i=0; i<5; i++){
    console.log(i)
}

// let a = 10
// for (var i=0; i<5; i++){
//     let a = 10
//     console.log(a+i)
// }

for (var i=0; i<5; i++){
    let a = 10
    console.log(a+i)
}
// VM718:3 10
// VM718:3 11
// VM718:3 12
// VM718:3 13
// VM718:3 14
var a = 20;
for(var i=0; i<5; i++){
    console.log(a+i);
}

var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
for(i=0; i<city.length; i++){
    console.log(`${city[i]}`)
}

for (i=0; i<5; i++){
    for(j=0; j<i; j++){
        console.log(i+j)
    }
}

var myarray = ["Amsterdam","Berlin",["BMW","Audi","Mercedes"],"Copenhagen","Dublin","Edinburgh"]
for(i=0; i<myarray.length; i++){
    if(Array.isArray(myarray[i])){
        for(j=0; j<myarray[i].length; j++){
            console.log(myarray[i][j])
        }

    }else{
        console.log(myarray[i])
    }
}