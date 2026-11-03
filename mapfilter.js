var a = [4,5,6,7,8,9];
a.map((data)=>{console.log(data)})

var a = [2,3,4,56,78,90];
a.map((data)=>{return data})

var a = [2,3,4,5,6,7,8,9];
a.map((data)=>{return data*2})
[4, 6, 8, 10, 12, 14, 16, 18]

>Map is use to iterate over the array
>It always return same length of output as input array
>It is use to apply logic (sum, multiply, divide, etc) or HTML AND Bind Data

var a = [2,3,4,5,6,7,8,9];
a.map((data)=>{return `<p>${data*2}</p>`})


(8) ['<p>4</p>', '<p>6</p>', '<p>8</p>', '<p>10</p>', '<p>12</p>', '<p>14</p>', '<p>16</p>', '<p>18</p>']

>filter is use to filter out the value
>It may or may not return same length of output as input array
>It only return those value for which condition/output is true

var a = [2,3,4,5,6,7,8,9];
a.map((data)=>{return data>5})
[false, false, false, false, true, true, true, true]

var a = [2,3,4,5,6,7,8,9];
a.map((data) => {return data*2})
var a = [2,3,4,5,6,7,8,9];
a.filter((data)=> {return data*2})
