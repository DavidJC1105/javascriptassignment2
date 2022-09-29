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

let side1=Number(prompt("Enter the length of side one"))
console.log(side1)
let side2=Number(prompt("Enter the length of side 2"))
console.log(side2)
let side3=Number(prompt("Enter the length of side 3"))
console.log(side3)

if(side1==side2){
    if(side2==side3){
        console.log("This is an equalateral triangle")
    }
}
if(side1==side2){
    if(side1!=side3){
        console.log("This is a scalene triangle")
    }
}
if(side2==side3){
    if(side2!=side1){
        console.log("This is a scalene triangle")
    }
}
if(side3==side1){
    if(side3!=side2){
        console.log("This is a scalene triangle")
    }
}
if(side1!=side2){
    if(side2!=side3){
        if(side1!=side3){
            console.log("This is an isoceles triangle")
        }
    }
}