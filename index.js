const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.querySelector("#password1-el")
let password2El = document.querySelector("#password2-el")
let rangeslider = document.getElementById("sliderRange");
let generateEl = document.querySelector("#generate")
let output = document.getElementById("pwlength");
output.innerHTML = rangeslider.value;
  
rangeslider.oninput = function() {
  output.innerHTML = this.value;
}


generateEl.addEventListener("click", function(){
    let password1 = ""
    while (password1.length < output.innerHTML){
        let i = Math.floor(Math.random()*characters.length)
        password1 += characters[i]
    }
    password1El.textContent = password1
    let password2 = ""
    while (password2.length < output.innerHTML){
        let i = Math.floor(Math.random()*characters.length)
        password2 += characters[i]
    }
    password2El.textContent = password2
}
)
