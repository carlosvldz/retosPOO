let x = parseInt(prompt("Type any number: "))
let y = parseInt(prompt("Type another number: "))
let z = prompt("Type one of each (+, -, *, /)")

switch(z){
    case "+":
        alert(x + y)
        break
    case "-":
        alert(x - y)
        break
    case "*":
        alert(x * y)
        break
    case "/":
        alert(x / y)
        break
    default:
        alert(NA)
        break
} 




