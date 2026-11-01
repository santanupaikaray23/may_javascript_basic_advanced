//Array is the collection of homegenious or hetrigenious datatype

var a = [1,3,5,7,9](Array of number)
var b = ["Aakash","Eva","Tina"](Array of string)
var c = [true,false,true](Array of boolean)

var d = [1,3, "Aakash",true,false,"dff"]

var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]

var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
city.push('Amsterdam')
5
city
(6) ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Amsterdam']
-push always add the element at the end of the array


var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
city.pop()
'Kolkata'
city
(4) ['Delhi', 'Mumbai', 'Bangalore', 'Chennai']
-pop always remove the last element of the array

var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
city.shift()
'Delhi'
city
(4) ['Mumbai', 'Bangalore', 'Chennai', 'Kolkata']
-shift always remove the first element of the array

var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
city.unshift("check")
5
city
(6) ['check', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']
-unshift always add the element at the first of the array

-Slice doesn't affect the original array
var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
var newCity = city.slice(1, 4)
newCity
(3) ['Mumbai', 'Bangalore', 'Chennai']
city
(5) ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']

var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
city.slice(1)
(4) ['Mumbai', 'Bangalore', 'Chennai', 'Kolkata']
city.slice(2)
(3) ['Bangalore', 'Chennai', 'Kolkata']
city.slice(2, 4)
(2) ['Bangalore', 'Chennai']
city
(5) ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']

splice(startIndex, deleteCount, values)

var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
city.splice(2,2)
 ['Bangalore', 'Chennai']

 city.splice(2,0,"Amsterdam")
 []
 city
(6) ['Delhi', 'Mumbai', 'Amsterdam', 'Bangalore', 'Chennai', 'Kolkata']

var a = ['a','b','c',1]
var b = [1,2,3]
a+b

var b = [1,2,3]
a.concat(b)


var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]

city.indexOf('Delhi')
0
city.indexOf('odisha')
-1
city.indexOf("Mumbai")
1

var a = "hii"
var b = ["hii"]
Array.isArray(a)
Array.isArray(b)

var city = ["Delhi","Mumbai","Bangalore","Chennai","Kolkata"]
undefined
city.sort()
(5) ['Bangalore', 'Chennai', 'Delhi', 'Kolkata', 'Mumbai']

var city = ["Delhi",3 ,"Mumbai", false, "Bangalore", 4, 8, true, "Chennai","Kolkata"]
city.sort()
 [3, 4, 8, 'Bangalore', 'Chennai', 'Delhi', 'Kolkata', 'Mumbai', false, true]

 