// // // function check_even_or_odd(num) {
// // // if (num % 2 == 0){
// // //     return"even" ;
// // // }else{

// // //     return "odd";
// // // }
// // // }

// // // console.log(check_even_or_odd(120));
// // for (let i = 0; i <= 5; i++) {
// //     console.log(i); // This will log 0 to 5
// // }

                    //for and while loops /////
// // let i = 5 ;
// // while (i <= 5 ){
// //     console.log(i)
// //     i++ ;
// // }

//  function Add_numbers(a ,b){


//         return a + b ;
//  }
// let sum = Add_numbers(7,9);
// 
// // console.log(sum);


                    //area of rectangle

// let Area_of_triangle = (width , height)=>{
//     return (width * height) ;

// }
// let area = Area_of_triangle(9 , 8);
// console.log(area) ;


            //reverse a string //

// let str = "hello world !";
// function reversestring (str){
//     return str.split("").reverse().join("");
// }
// console.log(reversestring(str));


            //leap year or not

// let isleapyear = (year) => {
//     if ((year % 4 === 0 &&  year % 100 !== 0) ||
// year % 4 === 0){
//     return true ;
// }else
    
//     {return }
// }
// console.log(isleapyear(2000))

        // sum of all array elements
// let arr = [30,40,32,38,59,37] ;

// let sum = 0 ;
// for (let i=0;i<arr.length;i++) 
// {
//     sum = sum + arr[i] ;
// }
// console.log("the sum of all elememts is " +sum);

//         //car object

//         let car = {
//             company : "toyota" ,
//        model : "hilux" ,
//        Year : 2015
//         }

// car.startEngine = function (){
//     console.log("Engine started")
// }




// car.startEngine();




// CHANGE PARAGRAGH TEXT 


// let paragraph = document.getElementById("my paragraph") ;
// console.log(paragraph) ;

// paragraph.textContent = " this text is been changed using javascript";


        // button
// let container = document.getElementById("container")

// let btn = document.createElement("button") ;
// btn.textContent = "click me" ;
// container.appendChild(btn);
     

        // display alert

//         let buttons = document.getElementsByTagName("button"); // This is a collection
// let firstButton = buttons[0]; // Access the first button in the collection

// if (firstButton) { // Always good to check if the element actually exists
//     firstButton.addEventListener("click", () => {
//         alert("Button clicked");
//     });
// } else {
//     console.log("No button found on the page.");
// }


//             // Factorial
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else { // Corrected: removed the semicolon here
//         let fact = 1; // Declared inside the else block, but its value needs to be accessible outside
//         for (let i = 1; i <= num; i++) {
//             fact *= i;
//         }
//         return fact; // Corrected: return statement moved inside the else block
//     }
// }

// console.log(factorial(6)); // Output: 720
// console.log(factorial(0)); // Output: 1
// console.log(factorial(1)); // Output: 1

    //
    // random number//


    function getRandomNumber( Min , Max){
return Math.floor( Math.random()*(50 + 1) + 50) ;
    }
    console.log(getRandomNumber());