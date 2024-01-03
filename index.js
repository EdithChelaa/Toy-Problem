
function calculateGrade() {
    
    const userInput = prompt('Enter student marks (between 0 and 100):')
    const marks = parseFloat(userInput);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Invalid input. Please enter a number between 0 and 100.');
        return;
    }

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the result
    console.log(`Student Grade: ${grade}`);
}

calculateGrade();