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







    
//     function getRandomNumber( Min , Max){
// return Math.floor( Math.random()*(50 + 1) + 50) ;
//     }
//     console.log(getRandomNumber());

        //higher order functions return even numbers

        // let arr = [73,34,54,43,32,23,55,23]
        // function filterEvenNumber(arr){
        //         return arr.filter(num => num % 2 === 0) ;

        // }
        // console.log(filterEvenNumber(arr)) ;


        // image gallery using dynamically generated elements
        //  function createImageElement(src){
        //         let img = document.createElement("img");
        //         img.src = src ;
        //  return img ;
        //  }
        //  let gallery = document.getElementById("gallery") ;
        //  let imgUrls = []//add images here 

        //  imgUrls.forEach(Url => gallery.appendChild(createImageElement(Url)));



        //reverse odd length


//         function reverseOdd(str) {
//     function reverseString(str) {
//         return str.split('').reverse().join('');
//     }

//     const words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length % 2 !== 0) {
//             words[i] = reverseString(words[i]);
//         }
//     }
//     return words.join(' ');
// }

// console.log(reverseOdd(" one piece")); // elppa


// use map function to double the array


// function doubleArrayElements(num){
// return arr.map((num)=>
//         num * 2 
// )
// }
// let arr = [73,23,32,43,54,64]
// console.log(doubleArrayElements(arr)) ;



//largest element using reduce

// function findLargestElement(arr) {
//   return arr.reduce((max, current) => {
//     return current > max ? current : max;
//   });
// }

// let arr = [34, 43, 32, 46, 65, 33, 66, 78, 86];
// let largest = findLargestElement(arr);
// console.log(largest);

// remove all occurence


// function removeElementFromArray(){
// return arr.filter(item => item !==target);

// }
// let arr = [10,50,30,30,20,60]
// let target = 10 ;

//    let removed =     removeElementFromArray(arr,target)
//    console.log(removed)

// current date and time
// function getCurrentDatendTime(){
//         let currentDate = new Date ;
//         return currentDate.toLocaleString();

// }

// console.log(getCurrentDatendTime()) ;
                                // recursive funciton to calculate factorial

                //         function factorial(n){
                //                 if(n ===1 ){
                //                         return 1 ;
                //         }
                //                 else
                //         {
                //                 return n*(factorial-1) ;
                //         }
                // }
                //         console.log(factorial(5));
// function fibonacci(n){
//         if (n<=1){
//         return n;

// }else{
//         return fibonacci(n-1)+fibonacci(n+2)
// }

        
// }

// console.log(fibonacci(5))
function fibonacci(n) {
    if (n <= 1) {
        return n; // Use return n instead of 1, so fib(0) = 0, fib(1) = 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(5)); // Output: 5
