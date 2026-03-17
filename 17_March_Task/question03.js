//  What does this function return?

function analyze(scores = []) {
    return scores.filter(s => s >= 70).length;
}
console.log(analyze());

// b) 0