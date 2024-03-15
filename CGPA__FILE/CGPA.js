

/*  ********************************global variables ************************************************** */

var GpBtn = document.getElementById('GP');
var CGPBtn = document.getElementById("CGP")
var classBtn = document.getElementById('class')
var nextDoc = document.getElementById('next')
var mainDoc = document.getElementById('maindoc')
var firstSection = document.getElementById('first-section')
var mainMenu = document.getElementById('menu')
var resultPage = document.getElementById('second-section')
var resultText = document.getElementById('result')
var homeMenuBtn = document.getElementById('menu1')
var goBackBtn = document.getElementById('go-back')


/* ***********************************ALL EVENT LISTENERS************************************************** */
GpBtn.addEventListener('click',  GPToOtherPage);
CGPBtn.addEventListener('click' , CGPAToOtherPage);
classBtn.addEventListener('click', classToOtherPage);
nextDoc.addEventListener('click', calculatorcode);
mainMenu.addEventListener('click', homeMenu);
homeMenuBtn.addEventListener('click', homeMenu);
goBackBtn.addEventListener('click', calculatorcode )




/* ************************************ALL FUNCTIONS********************************************************** */

function classToOtherPage(){
    answerPage();
    calculateClass();
}
function CGPAToOtherPage(){
    answerPage();
    CGPACalculator();
}
function GPToOtherPage(){
    answerPage();
    GPA();
}

function answerPage() {
    resultPage.style.display = "flex";
    firstSection.style.display = 'none';
}

function calculatorcode() {
mainDoc.style.display = "none";
firstSection.style.display = "flex";        
}
function homeMenu() {
firstSection.style.display = 'none';
mainDoc.style.display = "flex";
}

// Function to calculate GPA
function GPA() {
    
    var numberOfSubjects = parseInt(prompt("How many subjects did you take in the semester?"));
    var totalCredits = 0;
    var totalGradePoints = 0;

    // Loop through each subject to collect credit and grade information
    for (var i = 0; i < numberOfSubjects; i++) {
        var courseCredit = parseFloat(prompt(`Enter the credit for subject ${i + 1}:`));
        var courseGrade = prompt(`Enter the grade for subject ${i + 1}:`).toUpperCase();

        // Assign grade points based on the grade entered
        var gradePoint;
        switch (courseGrade) {
            case 'A':
                gradePoint = 5;
                break;
            case 'B':
                gradePoint = 4;
                break;
            case 'C':
                gradePoint = 3;
                break;
            case 'D':
                gradePoint = 2;
                break;
            case 'E':
                gradePoint = 1;
                break;
            default:
                gradePoint = 0;
        }

        // Accumulate total credits and grade points
        totalCredits += courseCredit;
        totalGradePoints += courseCredit * gradePoint;
    }

    // Calculate CGPA and display the result
    var GPA = totalGradePoints / totalCredits ;
    var finalMessage;

    if (GPA){
        finalMessage = `Your GPA is: ${GPA.toFixed(2)}`
    }
    else{
        finalMessage = `Invalid or you entered something wrongly!!`
    }
    resultText.textContent = finalMessage;
}




// Function to calculate CGPA
function CGPACalculator() {
    // Prompt the user to enter the number of subjects
    var formerTCE = parseInt(prompt("what was your formal TCE?"))
    var formerTCR = parseInt(prompt("what is your formal total credits registered ?"))
    var numberOfSubjects = parseInt(prompt("How many subjects did you take in the semester?"));
    var totalCredits = 0;
    var totalGradePoints = 0;

    // Loop through each subject to collect credit and grade information
    for (var i = 0; i < numberOfSubjects; i++) {
        var courseCredit = parseFloat(prompt(`Enter the credit for subject ${i + 1}:`));
        var courseGrade = prompt(`Enter the grade for subject ${i + 1}:`).toUpperCase();

        // Assign grade points based on the grade entered
        var gradePoint;
        switch (courseGrade) {
            case 'A':
                gradePoint = 5;
                break;
            case 'B':
                gradePoint = 4;
                break;
            case 'C':
                gradePoint = 3;
                break;
            case 'D':
                gradePoint = 2;
                break;
            case 'E':
                gradePoint = 1;
                break;
            default:
                gradePoint = 0;
        }

        // Accumulate total credits and grade points
        totalCredits += courseCredit;
        totalGradePoints += courseCredit * gradePoint;
    }

    // Calculate CGPA and display the result
    var CGPA = (totalGradePoints + formerTCE) / (totalCredits + formerTCR);
    
    resultText.textContent = `Your Cummulative Grade Point Average is: ${CGPA.toFixed(2)}`;
}




// Function to calculate class based on CGPA
function calculateClass() {
    // Prompt the user to enter their CGPA for the semester
    var classCGPA = parseFloat(prompt("What is your CGPA for the semester?"));
    var classes;

    // Determine class based on CGPA range
    if (classCGPA >= 4.50 && classCGPA <= 5.00) {
        classes = "First Class";
    } else if (classCGPA >= 3.50 && classCGPA < 4.50) {
        classes = "Second Class Upper";
    } else if (classCGPA >= 2.50 && classCGPA < 3.50) {
        classes = "Second Class Lower";
    } else if(classCGPA>=2.00 && classCGPA < 2.50){
        classes = "Third class";
    }
    else if(classCGPA<2.00 && classCGPA >=1.00){
        classes = "Pass"
    }
    else if(classCGPA < 1.00 && classCGPA >= 0.00){
        classes = "Failed"
    }
    else if (classCGPA= " "){
        classes = "No class"
    }
    else{
        classes = "Invalid Class"
    }



    
    // Display the calculated class
    resultText.textContent = `Congratulations, Your class for the semester is ${classes}`;
}