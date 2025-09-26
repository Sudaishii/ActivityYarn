let ageBtn = document.getElementById("VerifyAge");
let InputAge = document.getElementById("age");
let result = document.getElementById("result");

ageBtn.addEventListener('click', () =>{

    let age = parseInt(InputAge.value);

    if (age>=18){
        result.textContent = "You are an Adult!";
    }
    else{
        result.textContent = "You are a Minor!";
    }
});



let numBtn = document.getElementById("numBtn");
let num = document.getElementById("num");
let numResult = document.getElementById("numRes");

numBtn.addEventListener('click', () =>{
    let numValue = parseInt(num.value);

    if (numValue%2===1){
        numResult.textContent = "The number is Odd!";
    }
    else{
        numResult.textContent = "The Number is Even!";
    }
});


let gradeInput = document.getElementById("grade");
let btnGrade = document.getElementById("checkgrade");
let res = document.getElementById("gradeRes");

btnGrade.addEventListener('click', () =>{

    let grade = parseInt(gradeInput.value);
    console.log(grade);

    if(grade >= 90){
        res.textContent = "Excellent!";
    }
    else if(grade >= 80 && grade <= 89){
        res.textContent = "Good!";
    }
    else if(grade >= 70 && grade <= 79){
        res.textContent = "Fair";
    }
    else{
        res.textContent = "Failed!";
    }

});