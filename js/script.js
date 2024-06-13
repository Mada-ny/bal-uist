var message_valeur = document.querySelector(".information").children[1];
var Prenom, Nom, email, Paiement, Numero;
var valeur;
//CECI NOUS PERMET DE SELECTIONNER LE 2 EME PARAGRAHPE DANS LA DIV AYANT LA CLASS INFORMATION
window.onload = () => {
  valeur = "Aucune valeur";
  message_valeur.innerHTML = valeur;
};
document.forms[0].onchange = () => {
  console.log("change");
};

var qr = new QRious({
  element: document.querySelector(".qrious"),
  size: 250,
  value: valeur,
});
function change(element) {
  switch (element.name) {
    case "Prenom":
      Prenom = element.value;
      break;
    case "Nom":
      Nom = element.value;
      break;
    case "Numero":
      Numero = element.value;
      break;
    case "email":
      email = element.value;
      break;
      break;
    case "Paiement":
      Paiement = element.value;
      break;
  }

  valeur =
    "nom & prénoms : " +
    Nom +
    " " +
    Prenom +
    " | " +
    "email : " +
    email +
    " | " +
    "num : " +
    Numero +
    " | " +
    "moyen : " +
    Paiement;
  qr.value = valeur;
  message_valeur.innerHTML = qr.value;
}

function validateForm() {
  // Récupérer tous les champs du formulaire
  var fields = document.querySelectorAll("input, select");

  // Vérifier si tous les champs sont remplis
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value.trim() === "") {
      // Si un champ est vide, retourner false
      return false;
    }
  }

  // Si tous les champs sont remplis, retourner true
  return true;
}

function Popup() {
  if (validateForm()) {
    var paymentMethod = document.querySelector(
      'input[name="Paiement"]:checked'
    ).value;

    // Afficher le popup approprié
    switch (paymentMethod) {
      case "OM":
        // Afficher le popup pour Orange Money
        displayOrangeMoneyPopup();
        break;
      case "MoMo":
        // Afficher le popup pour MTN Money
        displayMTNMoneyPopup();
        break;
      case "Moov Money":
        // Afficher le popup pour Moov Money
        displayMoovMoneyPopup();
        break;
    }
  }
}

function displayOrangeMoneyPopup() {
  // Code pour afficher le popup
  alert(
    "Paiement par Orange Money:\n\nVeuillez suivre les instructions suivantes pour effectuer le paiement :\n\n- Ouvrez l'application Orange Money ou composez le #144*11#\n- Numéro à entrer : 07 87 99 67 81\n- Somme à transférer : 10.000F (avec les frais)\n- Validez le paiement"
  );
}
function displayMTNMoneyPopup() {
  // Code pour afficher le popup
  alert(
    "Paiement par MTN Money:\n\nVeuillez suivre les instructions suivantes pour effectuer le paiement :\n\n- Ouvrez l'application MTN Money ou composez *133#\n- Choissisez l'option 3 puis l'option 1\n- Numéro à entrer : 05 45 87 11 41\n- Somme à transférer : 10.000F (avec les frais)\n- Validez le paiement"
  );
}
function displayMoovMoneyPopup() {
  // Code pour afficher le popup
  alert(
    "Paiement par Moov Money:\n\nVeuillez suivre les instructions suivantes pour effectuer le paiement :\n\n- Ouvrez l'application Moov Money ou composez *155*1#\n- Numéro à entrer : 01 01 49 36 19\n- Somme à transférer : 10.000F (avec les frais)\n- Validez le paiement"
  );
}

function reserver() {
  // Rediriger l'utilisateur vers la page précédente
  window.location.href = "inscription.html";
}

function goBack() {
  // Rediriger l'utilisateur vers la page précédente
  window.location.href = "index.html";
}
