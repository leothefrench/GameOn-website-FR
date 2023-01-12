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

// Variable targeting the class with name close (span tag)
const closeModal = document.querySelector('.close');

//Listening Event on closeModal, click event, arrow Function with value none for the display attribute
closeModal.addEventListener('click', () => {
      modalbg.style.display = 'none';
});

/* ********** ISSUES 2 - ENTRIES IMPLEMENTATION ********** */ 

// Correction of for label and id input in the file index.html

// Déclaration & Assignation des variables des champs Input

const first = document.getElementById('first')
const last = document.getElementById('last')
const email = document.getElementById('email')
const birthdate = document.getElementById('birthdate')
const quantity = document.getElementById('quantity')
const radioButtons = document.querySelectorAll("input[name=location]");
const checkbox1 = document.getElementById('checkbox1')

/* *********** VERIFICATION 2 LETTRES MINI DANS L'INPUT FIRST ********* */
first.addEventListener('change', function() { 
  checkFirst(this)
})

const checkFirst = function(inputFirst) {
  let regExTypeTextFirst = new RegExp('^[a-zA-Z]{2,}$','g') // Création regExp pour vérification des 2 lettres minimum l'input first
  let testFirst = regExTypeTextFirst.test(inputFirst.value) // Test de la valeur de l'input dans first par rapport à la RegExp

/* ********** ISSUE 3 - MESSAGE ERREUR SI ENTREE INCORRECTE ********** */
let smallFirst = inputFirst.nextElementSibling;

  if(!testFirst && first.value.trim() !== "") {  // trim function pour éviter que l'utilisateur n'insère des espaces devant les lettres
    smallFirst.innerText = "Veuillez entrer 2 caractères minimum"
    smallFirst.style.color = 'red'
    smallFirst.style.fontSize = '.9rem'
    return false
  }
  else {
    smallFirst.innerText = 'champs valide'
    smallFirst.style.color = 'green'
    smallFirst.style.fontSize = '.9rem'
    return true
  }
}

/* *********** VERIFICATION 2 LETTRES MINI DANS L'INPUT LAST ********* */
last.addEventListener('change', function() {
  checkLast(this)
})

const checkLast = function(inputLast) {

  let regExTypeTextLast = new RegExp('^[a-zA-Z]{2,}$','g') // Création regExp pour vérification des 2 lettres minimum dans l'input lats
  let testLast = regExTypeTextLast.test(inputLast.value)   // Test de l'inout de last par rapport à la regExp

// Message d'erreur lorsque l'entrée n'est pas correcte [ ISSUE 3]
  let smallLast = inputLast.nextElementSibling;

  if(!testLast && last.value.trim() !== "") {  // trim function pour éviter que l'utilisateur n'insère des espaces devant les lettres
    smallLast.innerText = "Veuillez entrer 2 caractères minimum"
    smallLast.style.color = 'red';
    smallLast.style.fontSize = '.9rem'
    return false
  }
  else {
    smallLast.innerText = 'champs valide'
    smallLast.style.color = 'green'
    smallLast.style.fontSize = '.9rem'
    return true
  }
}

/* ********** VERIFICATION EMAIL VALID ********** */        
email.addEventListener('input', function() {
  validationEmail(this)
})

function validationEmail() {
  let emailValue = email.value;   // Valeur de l'input email
  // let patternEmail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$') // Création RegExp pour email input
  let patternEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i) // Création RegExp pour email input
  let smallEmail = document.getElementById('smallEmail');

  if(!patternEmail.test(emailValue)) {                 
    smallEmail.innerText = 'Invalid Email'; 
    smallEmail.style.color = 'red';
    smallEmail.style.fontSize = '.9rem'
    return false
  }
  else {
    smallEmail.innerText = 'valid email'
    smallEmail.style.color = 'green'
    smallEmail.style.fontSize = '.9rem'
    return true
  }
}

/* ********* DATE DE NAISSANCE ********** */
birthdate.addEventListener('change', () => {
  checkBirthdate(this)
})

function checkBirthdate() {
  let dateInput = birthdate.value
  let smallBirthdate = document.getElementById('smallBirthdate'); // Span pour confirmation choix d'une date d'anniversaire
 
  if(dateInput !== '') {
    smallBirthdate.innerHTML = '<br>date de naisssance enregistrée'
    smallBirthdate.style.color = 'green'
    smallBirthdate.style.fontSize = '.9rem'
    return true
   }
  else {
    smallBirthdate.innerHTML = ''
    return false
  }
}

/* ********** VERIFICATION 1 NOMBRE NUMERIQUE DE CONCOURS *********** */
quantity.addEventListener('change', () => {  // Event change
  checkNumber(this)
})

function checkNumber() {
  let smallInputNumber = document.getElementById('smallQuantity')

  if(quantity.value >= 0) {
    smallInputNumber.innerText = 'nombre valide'
    smallInputNumber.style.color = 'green'
    smallInputNumber.style.fontSize = '.9rem'
    return true
   }
  else {
    smallInputNumber.innerText = ''
    return false
  }
}

/* *********** VERIFICATION RADIO BOUTON SELECTIONNE *********** */
radioButtons.forEach(btnRadio => btnRadio.addEventListener('change', function(){
  let spanRadio =  document.getElementById('spanRadio')
  let getSelectedValue = document.querySelector( "input[name='location']:checked")?.value;

    if(getSelectedValue.checked) {   
      spanRadio.innerText = "";
      return false
    } else {  
      spanRadio.innerText = "Ville choisie";
      spanRadio.style.color = 'green'
      spanRadio.style.fontSize = '.9rem'
      return true
    }
}));
 
/* *********** CASE CONDITIONS GENERALES DOIT-ÊTRE COCHEE *********** */
let smallCheck = document.getElementById('checkbox1Invalid');

checkbox1.addEventListener('change', () => {

  if(checkbox1.checked !== true) {
    smallCheck.innerHTML = '<br>Vous devez accepter les conditions générales'
    smallCheck.style.color = 'red'
    smallCheck.style.fontSize = '.9rem'
    return false
    
  } else {
    smallCheck.innerHTML = ''
    return true
  }
})

/* ********** SUBMIT BUTTON - VALIDATE FUNCTION ********** */

function validate(event) {

  let first = document.getElementById('first').value
  let last = document.getElementById('last').value
  let email = document.getElementById('email').value
  let birthdate = document.getElementById('birthdate').value
  let quantity = document.getElementById('quantity').value
  let location = document.querySelector( "input[name='location']:checked"); 
  let checkbox1 = document.querySelector('#checkbox1:checked');

  if(first != '' && last != '' 
  && email != ''
  && birthdate != '' 
  && quantity != '' 
  && location != null
  && checkbox1 !== null)
  {
    alert(('Votre réservationé été reçue.'))    // CONFIRMATION APRES SOUMISSION DU FORMULAIRE
  } else {
    
    alert("Merci de bien remplir votre inscription"); // Alert box pour informer l'utilisateur à remplir correctement le formulaire
    event.preventDefault()  // Stop le comportement par défaut de l'envoi du formulaire
  }
}


