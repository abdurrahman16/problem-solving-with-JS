
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


// function factorial(n){
//     if (n==0){
//         return 1;
//     }
//     else{
//         return n*factorial(n-1);
//     }

// }
// console.log(factorial(4));

// fiboncacci with JS


// function fibonacci(n){
//     let fibo= [0,1];
//     for (let i=2; i<=n; i++)
// {
//     fibo[i]= fibo[i-1]+ fibo[i-2];
//     // console.log(fibo);
    
// }
// return fibo;
// }
// console.log(fibonacci(12));

//recursive way

// function fibonacci(n){
//     if (n==0){
//         return 0;
//     }
//     if (n==1){
//         return 1;
//     }
//     else{
//         return fibonacci(n-1)+ fibonacci(n-2);
//     }
// }
// console.log(fibonacci(10));


// fibonacci series recursive

function fibonacci(n){
    if (n==0){
        return 0;
    }
    else if (n==1){
        return [0,1];
    }
    else {
        var fibo= fibonacci(n-1);
        var nextfibo= fibo[n-1]+fibo[n-2];
        fibo.push(nextfibo);
        return fibo;
    }

}
console.log(fibonacci(10));