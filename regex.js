RegExp
regular expression
^$

var a = "Hi"
a.match("^([a-z])$")

var a = "hi"
a.match("^([a-z])$")

var a = "h"
a.match("^([a-z])$")

var a = "hi"
a.match("^([a-z]{2})$")

var a = "hii"
a.match("^([a-z]{3})$")

var a = "iHii"
a.match("^([A-Za-z]{2,5})$")

var a = "iHii0"
a.match("^([A-Za-z0-9]{2,5})$")

var a = "iHJii90"
a.match("^([D-Ja-z0-9]+)$")

var a = "8917310896"
a.match("^([0-9]{10})$") 

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,4})$")