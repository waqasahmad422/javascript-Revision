let numbers=[1,2,4,5,3,8,9,23];
let max=numbers[0];

for(let i=0; i<numbers.length; i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}

console.log(max)