$(document).ready(function(){
    $("button").click(function(){
  
        if($('#nom').val() != "" && $('#prenom').val() != "" && $('#dn').val() != "" && $('#adresse').val() != "" && $('#mail').val() != ""){
             $('#myModal').modal({show : true})
             $('.modal-title').text("Bienvenue " + $('#nom').val());
             var city = $("#adresse").val();
             $('.modal-body').html("Vous etes née le " + $('#dn').val() +" et vous habitez à : "
  
             + `<a href="http://maps.google.com/maps?q=${city}">	<img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=5&size=150x150&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> </a>`);
      }
     
  
     else {
         $('#myModal').modal({show : true})
     $('.modal-title').text("Erreur");
     $('.modal-body').text("la saisie de touts les champs est obligatoire");
  
     }
  
         
    });
  });