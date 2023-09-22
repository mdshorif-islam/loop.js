/*
1. loop variable 
2. condition inside while
3. loop body
4. change the loop variable
**/ 


// var rostGiven = 0;
// while(rostGiven < 7){
//     console.log('rost khabo')
//     console.log(rostGiven);
//     rostGiven++
// }


// for(var rostGiven = 0; rostGiven < 7 ; rostGiven++){
//     console.log('rost khabo');
//     console.log(rostGiven);
// }

// for(var i =0; i < 7; i++){
//     console.log(i);
// }

// var numbers = [22, 33, 44, 55, 66,  77,  88,  99]


// for(var i = 0; i < numbers.length ; i++){
//     var number = numbers[i]
//     console.log(number)
// }

// for(var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i > 10){
//         break;
//     }
// }

// var numbers =  [45, 67, 87, 32, 22, 67, 56  ]

// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     if(number > 50){
//         continue
//     }
//     console.log(number)
// }

// var num = 1;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// var num = 10;
// while(num >= 1){
//     // console.log(num)
//     num--
// }

// for(var i = 10; i >= 1; i--){
//     console.log(i)
// }

// you and your friends tom , jane peter and john got their final exam results . your total score is 85 , tom total score is 66 jane total score is 95 peter total score is 56 and total score is 40 the grading chart is 

// 80 or above A grade 
// 60 or above B grade 
// 50 or above c grade 
// 40 or above d grade 
// 39 or less => f grade

// write program to find your and your friends grade if-else.

// var tom = 85;
// var tomas = 66;
// var jane = 95;
// var peter = 56;
// var john = 40;

// var gradeChart ={
//     'A':80,
//     'B':60,
//     'C':50,
//     'D':40,
//     'F':0
// };

// function gradeCall(score){
//     if (score >= gradeChart['A']){
//         return 'A';
//     }
//     else if (score >= gradeChart['B']){
//         return 'B';
//     }
//     else if (score >= gradeChart['C']){
//         return 'C';
//     }
//     else if (score >= gradeChart['D']){
//         return 'D';
//     }
//     else{
//         return 'F';
//     }
// }

// var tomGrade = gradeCall (tom);
// var tomasGrade = gradeCall (tomas);
// var janeGrade = gradeCall (jane);
// var peterGrade = gradeCall (peter);
// var johnGrade = gradeCall (john);

// console.log(tomGrade, tomasGrade, janeGrade, peterGrade, johnGrade)

// var num1 = 19;
// var num2 = 179;
// var num3 = 145;

// if(num1 > num2){
//     if(num1 > num3){
//         console.log(num1)
//     }
//     else{
//         console.log(num3)
//     }
// }
// else{
//     if(num2 > num3){
//         console.log(num2)
//     }
//     else{
//         console.log(num3)
//     }
// }

// function add(number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     // return sum;
//     // console.log('i need more code');
//     return 15;
//     return 'hello done';
//     return 'hungry';
// }

// var total = add(80, 20);
// console.log('total', total);


// function getAverage (assigment1, assigment2, assigment3){
//     const total = assigment1 + assigment2  + assigment3;
//     const average = total / 3;
//     return average;
// }

// const assigment1Marks = 60;
// const assigment2Marks = 58;
// const assigment3Marks = 79;

// var myAverage = getAverage(assigment1Marks, assigment2Marks, assigment3Marks);
// console.log('my average so far', myAverage)