//Definimos una variable global para establecer un numero de intentos 7
var intentos = 0;
//Definimos una variable global para establecer el numero de barcos 5
var barcos = 0;

pintarTablero();
esconderBarcos();


//Funcion para dibujar el tablero
function pintarTablero () {

	document.write("<table border='3'>");

	for ( var i = 1 ; i <= 3; i++ ) {

		document.write("<tr>");

		for ( var j = 1 ; j <= 4 ; j++ ) {

			document.write("<td id='"+i+j+"' width='50' height='50' onClick='jugar(this.id)' style='background-color: lightblue' ></td>");

		}

		document.write("</tr>");

	}

	document.write("</table>");

}


//Funcion para esconder los barcos en el tablero generando un numero aleatorio comprendido
//entre 11 y 34 que corresponden a los id definidos anteriormente. Añadiremos un atributo
//name con valor S para establecer un barco. Controlamos que sean 5 barcos.
function esconderBarcos () {

	var contador = 0;

	do {
	
		var numRandom = Math.round(Math.random()*(34-11+1)+11);
	
		var elemento = document.getElementById(numRandom);

		if ( elemento != null ) {

			var name = document.createAttribute("name");
			name.value = "S";
			elemento.setAttributeNode(name);
			contador++;

		}

	}while(contador < 5);	

}


//Esta funcion recibe como parametro el id de la celda asociado al evento onClick
//si encuentra un barco, sumamos uno al contador de barcos y decrementamos los intentos
//y para que sea mas visible al usuario cambiara el color de la celda de fondo.
function jugar ( id ) {

	var elemento = document.getElementById(id);

	if ( elemento.getAttribute('name') == "S" ) {

		window.alert("Hundido");
		barcos++;
		intentos--;
		elemento.style.backgroundColor = "blue";

	}else{

		window.alert("Intentalo de nuevo...");
		intentos++;

	}

	comprobarGanador();

}


//Comprobamos si hay ganador o no
function comprobarGanador () {

	if ( intentos <= 7 && barcos == 5 ) {

		window.alert("¡¡¡¡¡ Has ganado !!!!!");

	}else if( intentos >= 7 && barcos < 5 ){

		window.alert("Has perdido.");
		window.close();

	}

}