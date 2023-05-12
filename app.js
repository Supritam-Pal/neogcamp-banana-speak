// //input
// var username=prompt("give me username")


// //processing
// var welcomeMessage="This scripts works"+" "+username;

// //output
// alert(welcomeMessage);
var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
console.log(txtInput);

// btnTranslate.addEventListener("click",function clickEventHandler(){;
// console.log("clicked");                                                       callback function
//  })


// btnTranslate.addEventListener("cick",clickHandler())

// function clickHandler(){                                                      callback function
//     console.log("clicked");
// };

function clickHandler(){
    console.log("clicked");
    console.log("input", txtInput.value);
};
btnTranslate.addEventListener("click",clickHandler)



















