let number= Number(prompt("enter a number 1-10"));

console.log(number);

if (number %2==0){
    console.log("This is an even number")
} else{
    console.log("This number is odd")
}

let higher= Number(prompt("Enter a number"));

console.log(higher);

let lower= Number(prompt("Enter another number"));

if (higher>lower){
    console.log("Number 1 is higher than number 2")
} else if(higher<lower){
    console.log("Number 2 is higher than number 1")
} else{
    console.log("The numbers entered are equal");
}

let number1= Number(prompt("Enter your first number"))
console.log(number1)
let number2= Number(prompt("Enter your second number"))
console.log(number2)
let number3= Number(prompt("Enter your third number"))
console.log(number3)

if(number1==number2){
    if(number2==number3){
        console.log("All numbers are equal")
    }
}
if(number1>number2){
    if(number1>number3){
        console.log("Number 1 is the highest number")
    }else{if(number3>number1){
        console.log("number 3 is the highest")
    }
    }
}
else{
    if(number2>number3){
        console.log("Number 2 is the highest number")
    }else{console.log("Number 3 is the highest")}
}

