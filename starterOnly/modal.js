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

/* ********** Issue 1 - ADD FUNCTION CLOSE MODAL ********** */

// Variable constant targeting the class with name close (span tag)
const closeModal = document.querySelector('.close');

//Listening Event on closeModal, click event, arrow Function with value none for the display attribute
closeModal.addEventListener('click', () => {
      modalbg.style.display = 'none';
});

//POSER VARIABLES ICI POUR CHECK AVANT SUBMIT BOUTON



/* ********** ISSUES 2 - ENTRIES IMPLEMENTATION ********** */ 

// SUBMIT BUTTON

function mySubmit() {
  document.getElementById('form').submit()
}

// Correction of for label and id input in the File index.html - Done 

/* *********** VERIFICATION 2 LETTRES MINI DANS L'INPUT FIRST ********* */

let form = document.querySelector('#form') // id='form' added in index.html for the targeting the form

form.first.addEventListener('mouseout', function() {
  checkFirst(this)
})

const checkFirst = function(inputFirst) {
 
  let firstRegExp = new RegExp('^[a-zA-Z]{2,}$','g') // Création regExp pour vérification des 2 lettres minimum dans l'input first
  let testFirst = firstRegExp.test(inputFirst.value) // Test de la valeur de l'input dans first

/* ********** ISSUE 3 - MESSAGE ERREUR SI ENTREE INCORRECTE ********** */
let smallFirst = inputFirst.nextElementSibling;

  if(!testFirst) {
    smallFirst.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    return false;
  }
  else {
    smallFirst.innerText = ''
    return true
  }
}

/* *********** VERIFICATION 2 LETTRES MINI DANS L'INPUT LAST ********* */

form.last.addEventListener('mouseout', function() {
  checkLast(this)
})

const checkLast = function(inputLast) {
 
  let lastRegExp = new RegExp('^[a-zA-Z]{2,}$','g') // Création regExp pour vérification des 2 lettres minimum dans l'input last
  let testLast = lastRegExp.test(inputLast.value)

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

form.email.addEventListener('input', function() {
  validationEmail(this)
})

function validationEmail() {
  let email = document.getElementById('email').value;
  let patternEmail = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9\.-_])+.([a-z]+)?$/;
  let smallEmail = document.getElementById('smallEmail');

  if(!patternEmail.test(email)) {
    smallEmail.innerText = 'Invalid Email'; 
    smallEmail.style.color = 'red';
    return false;
  }
  else {
    smallEmail.innerText = ''
    return true;
  }
}

/* ********* DATE DE NAISSANCE ********** */

form.birthdate.addEventListener('click', function checkBirthdate() {

  let dateInput = document.getElementById('birthdate')
  let smallBirthdate = document.getElementById('smallBirthdate');
 
  if(!dateInput.value) {
    smallBirthdate.innerHTML = '<br>Entrée une date de naissance'
  }
  else {
    smallBirthdate.innerHTML = ''
  }
})

/* ********** VERIFIACTION 1 NOMBRE NUMERIQUE DE CONCOURS *********** */

form.quantity.addEventListener('mousedown', () => {
  checkNumber(this)
})

function checkNumber() {

let quantity = form.quantity.value;
let smallInputNumber = document.getElementById('smallQuantity')

  if(!quantity) {
    smallInputNumber.innerText = 'Veuillez entrer 1 nombre.'
    return false
  }
  else {
    smallInputNumber.innerText = ''
    return true
  }
}

/* *********** VERIFICATION RADIO BOUTON SELECTIONNE *********** */

let btnsRadio = document.querySelectorAll('.radio');
let selectedRadioButton;

/* Transformer une NodeList en Array */
let btnsRadioArr = Array.from(btnsRadio);

let spanRadio =  document.getElementById('spanRadio')

btnsRadioArr.forEach(checkRadio)

function checkRadio(button) {
  if(button.checked) {
    selectedRadioButton = button;
    return selectedRadioButton;
  }
}

/* *********** CASE CONDITIONS GENERALES DOIT-ÊTRE COCHEE *********** */

let checkGeneralCondition = document.getElementById('checkbox1')
let smallCheck = document.getElementById('checkbox1Invalid');

checkGeneralCondition.addEventListener('click', () => {

  if(checkGeneralCondition.checked !== true) {
    smallCheck.innerHTML = '<br>Accepté les conditions générales'
  } else {
    smallCheck.innerHTML = ''
  }
})

