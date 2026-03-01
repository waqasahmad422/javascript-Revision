// simple Grader Calculator 
let num = 89;

if(num>=90 && num <=100){
    console.log(`Grade A`)
}
else if(num>=80 && num <=89){
    console.log(`Grade B`)
}
else if(num>=70 && num <=79){
    console.log(`Grade C`)
}
else if(num>=60 && num <=69){
    console.log(`Grade D`)
}
else{
    console.log("Fail")
}



// using ternorary operator 
let grade=  (num>=90 && num <=100) ? "Grade A": 
            (num>=80 && num <=89)?"Grade B":
            (num>=70 && num <=79)?"Grade B":
            (num>=60 && num <=69)?"Grade B":
            "Fail";


console.log(grade);