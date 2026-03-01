let student={name:"Waqas",
    marks:[90,80,98,100,96]
}
let sum=0;
// let marksAvrage= student.marks;
for(let i=0; i<student.marks.length; i++){
    sum= sum+ student.marks[i];
}

let avrage= sum/student.marks.length;
console.log(`${student.name} average is ${avrage}`);