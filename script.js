function main() {
//------------------------------- #1 Add big Class
let paragraphGrowMe = document.getElementById("grow-me");

paragraphGrowMe.classList.add("big");

//------------------------------- #2 Remover big class from shrink-me

const paragraphShrinkMe = document.getElementById("shrink-me");

paragraphShrinkMe.classList.remove("big");

//------------------------------- #3

const liText = document.querySelectorAll("li")

for (i = 0 ; i < liText.length; i++){
    console.log(liText[i].innerText);
}

//------------------------------- #4

const setNewLink = document.querySelector(".link");

setNewLink.setAttribute("href", "https://www.example.com")
setNewLink.innerText = "somewhere";

//------------------------------- #5

const setHideMe = document.getElementById("hide-me");

setHideMe.style.display = "none";

//------------------------------- #6

const setShowMe = document.getElementById("show-me");

setShowMe.style.display = "block";

//------------------------------- #7

const nameInput = document.querySelector("#name").value;
const headerText = document.querySelector("h1");
headerText.textContent = `Welcome ${nameInput}!`;

}; //end function(main)