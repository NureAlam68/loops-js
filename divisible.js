// 1 to 30 divisible 3 or 5



// divisible by 3

// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }




// divisible by 5

// for(let i = 1; i <= 30; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }




// divisible by 3 or 5

// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         console.log(i);
//     }
// }




// divisible by 3 and 5

// for(let i = 1; i <= 30; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }




// give sum between 1 to 20 which is divisible by 3

let sum = 0;

for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
        console.log(i);
        sum = sum + i;
        console.log('sum', sum)
    }
}

console.log('sum of the numbers', sum);