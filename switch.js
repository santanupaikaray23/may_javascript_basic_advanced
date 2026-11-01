//multiple condition and multiple output(ifelse)
//one condition and one output(ternary)
//one condition and multiple output(switch)

var name = "Aakash"

switch(name){
    case 'Aakash':
        console.log(`hi ${name}`)
        break;
        case 'Eva':
            console.log(`hlw ${name}`)
                break;
            default:
                console.log(`hi default case`)
}

var input = 3

switch(input%2){
    case 0:
        console.log (`Number is even`)
        break;
        case 1:
            console.log(`Number is odd`)
            break;
            default:
                console.log(`default case`)
}

switch (new Date().getDay()){
    case 0:
        console.log(`Today is Saturday`)
        break;

        case 4:
            console.log(`Today is Sunday`)
            break;

            default:
                console.log(`Invalid input`)

        }