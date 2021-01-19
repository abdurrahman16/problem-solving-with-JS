
//factorial using while loop

// let i=1;
// let fact=1;
// while(i<=10){
//     fact= fact*i;
//     // console.log(i,fact);
//     i++;
    
// }
// console.log(fact);


//recursive factorial using function


function factorial(n){
    if (n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }

}
console.log(factorial(4));


