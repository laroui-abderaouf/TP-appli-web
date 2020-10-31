function controle(){

    var tailleNom =document.getElementById("nom").value.length;
    var nom =document.getElementById("nom").value;

    var taillePrenom =document.getElementById("prénom").value.length;
    var Prénom =document.getElementById("prénom").value;

    var tailleadresse =document.getElementById("adr").value.length;
    var adr =document.getElementById("adr").value;

    var tailleMail =document.getElementById("mail").value.length;
    var mail =document.getElementById("mail").value;

    var tailleDate =document.getElementById("dn").value.length;
    var dateNaissance =document.getElementById("dn").value;



    


    if ((tailleNom<5) || (taillePrenom<5) || (tailleadresse<5) || (tailleMail<5) || (tailleDate<6)){

         document.getElementById("erreur").innerHTML=" chaque champ doit contenir au moins 5 caracteres !";
         
    }

    else {
        document.getElementById("resultat").innerHTML="Bonjour "+ nom  ;
        }
        
    }
    