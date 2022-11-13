function login(){

	var user, pass;

	user = document.getElementById("usuario").value;
	pass = document.getElementById("contraseña").value;

	if(user == "usuario1" && pass == "1234"){

		alert('Estas apunto de iniciar sesion')
		window.location= "./inicio.html"; 


	} else{
	alert('Error! Verifica tu usuario y contraseña')
}
}


