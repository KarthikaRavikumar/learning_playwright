// Grade Calculator
// Grading Scale:
//   A: 90-100
//   B: 80-89
//   C: 70-79
//   D: 60-69
//   F: 0-59

function getLetterGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score! Please enter a number between 0 and 100.";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Test with a variety of scores
const testScores = [100, 95, 85, 76, 63, 50, 32, 0, -5, 110];

testScores.forEach(score => {
    const grade = getLetterGrade(score);
    console.log(`Score: ${score} => Grade: ${grade}`);
});
