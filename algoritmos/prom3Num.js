var scoreArray = [90, 75, 100]
var total = scoreArray.reduce(function(a, b){
    return a + b 
}, 0)

var average = alert(`The average is: ${total / scoreArray.length}`) 