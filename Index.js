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

let container = document.getElementById("container")

let btn = document.createElement("button") ;
btn.textContent = "click me" ;
container.appendChild(btn);
