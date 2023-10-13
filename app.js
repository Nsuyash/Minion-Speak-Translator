// var username = prompt("Give me you name");
// alert("Welcome! "+username);

var btnTranslate = document.querySelector("#btn-translate") // Here we query has been selected refrence to it id="btn-translate"
//console.log((btnTranslate).style.backgroundColor = "red")

var txtInput = document.querySelector("#txt-input"); // Here I have selected the textarea using id="txt-input"

var txtOutput = document.querySelector("#txt-Output"); // Here I selected ouput box which I have created


var serverURL = "https://api.funtranslations.com/translate/minion.json"


//write a function to get input in URL .json?text="I am suyash" text
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}


//write a function to fetch
function clickEventListener() {
    //console.log("Clicked!")
    //var show = txtInput.value;
    //txtOutput.innerText = show;
    var inputtext = txtInput.value;
    //calling server for processing
    fetch(getTranslationURL(inputtext))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(error => alert("server is down"))

}


//console.log(txtInput.value)
btnTranslate.addEventListener("click", clickEventListener) // This is an event listener on the action of "click"