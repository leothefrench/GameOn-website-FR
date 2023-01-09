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

/* ********** SUBMIT BUTTON - VALIDATE FUNCTION ********** */

function validate() {

  let first = document.getElementById('first').value
  let last = document.getElementById('last').value
  let email = document.getElementById('email').value
  let birthdate = document.getElementById('birthdate').value
  let quantity = document.getElementById('quantity').value
  let location = document.querySelector( "input[name='location'].checked"); // CHECK RADIO BUTTON
  let checkbox1 = document.getElementById('checkbox1')

  if(
    first != '' 
  && last.value != '' 
  && email.value != ''
  && birthdate != '' 
  && quantity != '' 
  && location.checked == true
  && checkbox1.checked != '') 
  {
    alert(('Votre réservationé été reçue.'))    // CONFIRMATION APRES SOUMISSION DU FORMULAIRE
  } else {
    alert("Merci de bien remplir votre inscription");
  }
}

/* *********** VERIFICATION 2 LETTRES MINIMUM DANS L'INPUT FIRST ********* */

let form = document.querySelector('#form') // id='form' added in index.html for the targeting the form

/* *********** VERIFICATION 2 LETTRES MINI DANS L'INPUT FIRST ********* */
form.first.addEventListener('change', function() { 
  checkFirst(this)
})

const checkFirst = function(inputFirst) {
 
  let firstRegExp = new RegExp('^[a-zA-Z]{2,}$','g') // Création regExp pour vérification des 2 lettres minimum dans l'input first
  let testFirst = firstRegExp.test(inputFirst.value) // Test de la valeur de l'input dans first par rapport à la RegExp

/* ********** ISSUE 3 - MESSAGE ERREUR SI ENTREE INCORRECTE ********** */
let smallFirst = inputFirst.nextElementSibling;

  if(!testFirst && form.first.value.trim() !== "") {  // trim function pour éviter que l'utilisateur n'insère des espaces devant les lettres
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

form.last.addEventListener('change', function() {
  checkLast(this)
})

const checkLast = function(inputLast) {
 
  let lastRegExp = new RegExp('^[a-zA-Z]{2,}$','g') // Création regExp pour vérification des 2 lettres minimum dans l'input last
  let testLast = lastRegExp.test(inputLast.value)   // Test de l'inout de last par rapport à la regExp

  // Message d'erreur lorsque l'entrée n'est pas correcte [ ISSUE 3]
  let smallLast = inputLast.nextElementSibling;

  if(!testLast && form.last.value.trim() !== "") {  // trim function pour éviter que l'utilisateur n'insère des espaces devant les lettres
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

form.email.addEventListener('input', function() {
  validationEmail(this)
})

function validationEmail() {
  let email = document.getElementById('email').value;   // Valeur de l'input email stockée dans la variable email
  let patternEmail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$')
  // let patternEmail = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
  let smallEmail = document.getElementById('smallEmail');

  if(!patternEmail.test(email)) {                 // Si l'email différend du modèle du pattern email alors affichage message Invalid Email
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

form.birthdate.addEventListener('change', () => {
  checkBirthdate(this)
})

function checkBirthdate() {
  let dateInput = document.getElementById('birthdate')

  let smallBirthdate = document.getElementById('smallBirthdate');
 
  if(dateInput.value !== '') {
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

form.quantity.addEventListener('change', () => {  // Event mouseout, lorsque l'utilisateur survol on lui indique de fournir un nombre
  checkNumber(this)
})

function checkNumber() {

let smallInputNumber = document.getElementById('smallQuantity')

  if(form.quantity.value >= 0) {
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

/* *********** CASE CONDITIONS GENERALES DOIT-ÊTRE COCHEE *********** */

let checkGeneralCondition = document.getElementById('checkbox1')
let smallCheck = document.getElementById('checkbox1Invalid');

checkGeneralCondition.addEventListener('change', () => {

  if(checkGeneralCondition.checked !== true) {
    smallCheck.innerHTML = '<br>Vous devez accepter les conditions générales'
    smallCheck.style.color = 'red'
    smallCheck.style.fontSize = '.9rem'
    return false
    
  } else {
    smallCheck.innerHTML = ''
    return false
  }
})

/* *********** VERIFICATION RADIO BOUTON SELECTIONNE *********** */

let radioButtons = document.querySelectorAll("input[name=location]");

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


/* COMMENT CONSERVER LES DONNEES APRES UNE MAUVAISE SOUMISSION */
// const btnValid = document.getElementById("btnValid");

// btnValid.addEventListener("click", function() { 
//   window.location.reload();
// });


// document.addEventListener('click', checkButton (e) {
  
// let getSelectedValue = document.querySelector( "input[name='location']:checked"); 

// let spanRadio =  document.getElementById('spanRadio')

//   if(getSelectedValue != null) {   
//     spanRadio.innerText = "POUF";

//   } else {  
//     spanRadio.innerText = "Nothing has been selected";
//   }
// }


/* ***************ANOTHER OPTION ******************* */

// document.addEventListener('change', function (event) {

// let spanRadio =  document.getElementById('spanRadio')

//     if ( !(event.target.classList.contains( 'radio' )) ) {
//       spanRadio.innerText = "Choisir un bouton";
//       spanRadio.style.color = 'red'
//       spanRadio.style.fontSize = '1rem'


//       // return false
//     } else {
//       spanRadio.innerText = "";
//       // return true

//     }
// });