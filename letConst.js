var > We are able to redeclare and reassign
let > We can't redeclare but we can reassign
const > Neither redeclare nor reassign

> var a = 10
undefined
var a > declare
a=10 > assignment
> a
10
> node
Uncaught ReferenceError: node is not defined
> var a = 12
undefined
> a
12
> a = 13
13
> a
13