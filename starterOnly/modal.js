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
const closeModal = document.querySelector('.close');

//Listening Event on closeModal, click event, arrow Function with value none for the display attribute
closeModal.addEventListener('click', () => {
      modalbg.style.display = 'none';
});

// Issue 2 - Entries Implementation

//POSER VARIABLES

// Submit button

function mySubmit() {
  document.getElementById('form').submit()
}

// Correction of for label and id input in the File index.html - Done 

// Vérification 2 lettres minimum dans l'input first

let form = document.querySelector('#form') // id='form' added in index.html for the targeting

form.first.addEventListener('change', function() {
  checkFirst(this)
})

const checkFirst = function(inputFirst) {
 
  let firstRegExp = new RegExp('^[a-zA-Z]{2,}$','g') // Création regExp pour vérification des 2 lettres minimum dans l'input first
  let testFirst = firstRegExp.test(inputFirst.value)

  // console.log(testFirst)

  // Message d'erreur lorsque l'entrée n'est pas correcte [ ISSUE 3]
let smallFirst = inputFirst.nextElementSibling;

  if(!testFirst) {
    smallFirst.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  }
  else {
    smallFirst.innerText = ''
  }
}

// Vérification 2 lettres minimum dans l'input last

form.last.addEventListener('change', function() {
  checkLast(this)
})

const checkLast = function(inputLast) {
 
  let lastRegExp = new RegExp('^[a-zA-Z]{2,}$','g') // Création regExp pour vérification des 2 lettres minimum dans l'input last
  let testLast = lastRegExp.test(inputLast.value)

  // console.log(testLast)

  // Message d'erreur lorsque l'entrée n'est pas correcte [ ISSUE 3]
  let smallLast = inputLast.nextElementSibling;

  if(!testLast) {
    smallLast.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  }
  else {
    smallLast.innerText = ''
  }
}

/* ********** VERIFICATION EMAIL VALID ********** */

form.email = addEventListener('change', function() {
  checkEmail(this)
})

console.log(form.email)

const checkEmail = function(inputEmail) {
  // let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

  // let testEmail = emailRegExp.test(inputEmail.value)

// console.log(testEmail)

  let smallEmail = inputEmail.nextElementSibling;

  if(inputEmail) {
    smallEmail.innerHTML = '<strong>VALID Email</strong>';
  }
  else {
    smallEmail.innerHTML = '<strong>INVALID Email</strong>';
  }
}

// vérification 1 Nombre numérique nombre de concours

form.quantity = addEventListener('change', function() {
  checkNumber(this)
})

const checkNumber = function(inputNumber) {
  let inputNumberRegExp = new RegExp('^[0-9]{1,2}$', 'g')
  let textInputNumber = inputNumberRegExp.test(inputNumber.value)

  console.log(textInputNumber)
}

// Un Radio Bouton Sélectionné
form.location = addEventListener('change', function() {
  checkRadioButton(this) 
})

const checkRadioButton = function (inputLocation) {
  if(!inputLocation.value) {

  }
}

// Case Conditions Générales doit-être cochée
// const generalCondition = document.getElementsByClassName('checkbox-icon')

// generalCondition.addEventListener('click', function() {

// })

/* ************* VERIFICATION DATE DE NAISSANCE ********** */
// form.birthdate = addEventListener('') {

// }
