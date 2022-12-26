function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Issue 1 - Add Function Close Modal

// Variable constant targeting the class with name close (span tag)
const closeModal =  document.querySelector('.close');

//Listening Event on closeModal, click event, arrow Function with value none for the display attribute
closeModal.addEventListener('click', () => {
      modalbg.style.display = 'none';
});

