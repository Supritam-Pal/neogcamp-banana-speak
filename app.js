// //input
// var username=prompt("give me username")

 
// //processing
// var welcomeMessage="This scripts works"+" "+username;

// //output
// alert(welcomeMessage);
var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
// outputDiv.innerText="rup is good ";
console.log(outputDiv);
//console.log(txtInput);


// btnTranslate.addEventListener("click",function clickEventHandler(){;
// console.log("clicked");                                                       callback function
//  })


// btnTranslate.addEventListener("cick",clickHandler())

// function clickHandler(){                                                      callback function
//     console.log("clicked");
// };

function clickHandler(){
    // console.log("clicked");
    // console.log("input",outputDiv.innerText);
    // console.log("input", txtInput.value);
    outputDiv.innerText="ajsjsjsjsjsjsj "+" "+txtInput.value;
};
btnTranslate.addEventListener("click",clickHandler)

// 1. document.querySelector("textarea")
// 2. .btn-primary
// 3.  #input-btn
// 4. "input[name='translator']"






















