$(document).ready(function(){
	//intercepte le boutton valider et ecris ds la modal
  $("#Ajouter").click(function(event){
	event.preventDefault();
	//var city = $("#adresse").val();
	

  	if($('#nom').val() != "" && $('#prenom').val() != "" && $('#date').val() != "" && $('#adresse').val() != "" && $('#mail').val() != ""){
   		$('#myModal').modal({show : true})
   		$('.modal-title').text("Bienvenue " + $('#nom').val() );
   		$('.modal-body').html("Vous etes enregistrer" );
			
		   
			//ajout a la table 
		   contactStore.add($('#nom').val(), $('#prenom').val(), $('#date').val(), $('#adresse').val(), $('#mail').val());
		   //stockage data en string -----> stringify---->js object to String
		    localStorage.setItem('contactList', JSON.stringify(contactStore.getList()));
		   
      AfficherList();


	}
		   
	  

   else {
   	$('#myModal').modal({show : true})
   $('.modal-title').text("Erreur");
   $('.modal-body').text("Vous devez remplire tous les champs !");

   }

   	
  });
  

});
//interception du boutton GPS
window.onload = function (){
	document.querySelector('#gps').addEventListener("click", function (event) {
		getLocation();
	});


};


function AfficherList() {
	//parse ----> String to js object
	var contactList = JSON.parse(localStorage.getItem("contactList"));
	for (var index in contactList) {
	  document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
		
		'<tr>'+
		'<th scope="row">'+index+'</th>'+
		'<td>'+ contactList[index].nom +'</td>'+
		'<td>'+ contactList[index].prenom +'</td>'+
		'<td>'+ contactList[index].date +'</td>'+
		'<td>'+ contactList[index].adresse +'</td>'+
		'<td><a href=mailto:>'+ contactList[index].mail +'</a></td>'+
	  '</tr>'
	}
  }
