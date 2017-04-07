function average(scores) {
    var total = 0;
    scores.forEach(function(score){
       total += score; 
    });
    
    return total/scores.length;
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var result = average(scores);
console.log(result);