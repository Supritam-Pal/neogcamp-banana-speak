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
//console.log(outputDiv);
//console.log(txtInput);
//var serverURL="lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
    return serverURL +"?"+"text="+ text;
}
function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server!try again after sometime");
}

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
  //  outputDiv.innerText="ajsjsjsjsjsjsj "+" "+txtInput.value;
  var inputText=txtInput.value  //taking input
  
  
  //calling server for processing
  fetch(getTranslationURL(inputText))
  .then(response => response.json())
  .then(json => {
    var translatedText=json.contents.translated;
    outputDiv.innerText = translatedText;  // output
  })
   // console.log(json.contents.translated))
     .catch(errorHandler);

};
btnTranslate.addEventListener("click",clickHandler)

// 1. document.querySelector("textarea")
// 2. .btn-primary
// 3.  #input-btn
// 4. "input[name='translator']"






















