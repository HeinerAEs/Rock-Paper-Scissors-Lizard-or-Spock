function aleatorio(min, max){
	var numAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
	return numAleatorio;
}


var piedra = 0;
var papel = 1; 
var tijera = 2; 
var lagarto = 3; 
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];


$("input[type=radio]").on("click", function(){

	$(".radio").css("opacity", "1"); /*por defecto todos tienen al inicio un opacity de 1*/

	var opcioneUsuario = $("input[type=radio]:checked").val();
	var opcionMaquina = aleatorio(0, 4);
	$("div.maquina p").html("<b>" + opciones[opcionMaquina]) + "</b>";
	$("div.usuario p").html("<b>" + opciones[opcioneUsuario]) + "</b>";

	if(opcioneUsuario == piedra){

		if (opcionMaquina == piedra) {
			$("#winnerLoser").html("<h3>Empate! </h3>");
			$(".usuarioEleccion").html('<img src="images/piedra.png" alt="piedra" width="180">');
			$(".maquinaEleccion").html('<img src="images/piedra.png" alt="piedra" width="180">');
		}else if (opcionMaquina == papel) {
			$("#winnerLoser").html("<h3>Perdiste! </h3> ");
			$(".usuarioEleccion").html('<img src="images/piedra.png" class="malaEleccion" alt="piedra" width="180">');
			$(".maquinaEleccion").html('<img src="images/papel.png" alt="papel" width="180">');
		}else if (opcionMaquina == tijera) {
			$("#winnerLoser").html("<h3>Ganaste! </h3> ");
			$(".usuarioEleccion").html('<img src="images/piedra.png" alt="piedra" width="180">');
			$(".maquinaEleccion").html('<img src="images/tijera.png" class="malaEleccion" alt="tijera" width="180">');
		}else if (opcionMaquina == lagarto) {
			$("#winnerLoser").html("<h3>Ganaste! </h3> ");
			$(".usuarioEleccion").html('<img src="images/piedra.png" alt="piedra" width="180">');
			$(".maquinaEleccion").html('<img src="images/lagarto.png" class="malaEleccion" alt="lagarto" width="180">');
		}else if (opcionMaquina == spock) {
			$("#winnerLoser").html("<h3>Perdiste! </h3> ");
			$(".usuarioEleccion").html('<img src="images/piedra.png" class="malaEleccion" alt="piedra" width="180">');
			$(".maquinaEleccion").html('<img src="images/spock.png" alt="spock" width="180">');
		}

	}else if(opcioneUsuario == papel){

		if (opcionMaquina == piedra) {
			$("#winnerLoser").html("<h3>Ganasté! </h3> ");
			$(".usuarioEleccion").html('<img src="images/papel.png" alt="piedra" width="180">');
			$(".maquinaEleccion").html('<img src="images/piedra.png" class="malaEleccion" alt="papel" width="180">');
		}else if (opcionMaquina == papel) {
			$("#winnerLoser").html("<h3>Empate! </h3>");
			$(".usuarioEleccion").html('<img src="images/papel.png" alt="papel" width="180">');
			$(".maquinaEleccion").html('<img src="images/papel.png" alt="papel" width="180">');
		}else if (opcionMaquina == tijera) {
			$("#winnerLoser").html("<h3>Perdisté! </h3>");
			$(".usuarioEleccion").html(' <img src="images/papel.png" class="malaEleccion" alt="papel" width="180">');
			$(".maquinaEleccion").html('<img src="images/tijera.png" alt="tijera" width="180">');
		}else if (opcionMaquina == lagarto) {
			$("#winnerLoser").html("<h3>Perdisté! </h3>");
			$(".usuarioEleccion").html(' <img src="images/papel.png" class="malaEleccion" alt="papel" width="180">');
			$(".maquinaEleccion").html('<img src="images/lagarto.png" alt="lagarto" width="180">');
		}else if (opcionMaquina == spock) {
			$("#winnerLoser").html("<h3>Ganasté! </h3> ");
			$(".usuarioEleccion").html('<img src="images/papel.png" alt="papel" width="180">');
			$(".maquinaEleccion").html('<img src="images/spock.png" class="malaEleccion" alt="spock" width="180">');
		}

	}else if(opcioneUsuario == tijera){

		if (opcionMaquina == piedra) {
			$("#winnerLoser").html("<h3>Perdisté! </h3>");
			$(".usuarioEleccion").html(' <img src="images/tijera.png" class="malaEleccion" alt="tijera" width="180">');
			$(".maquinaEleccion").html('<img src="images/piedra.png" alt="papel" width="180">');
		}else if (opcionMaquina == papel) {
			$("#winnerLoser").html("<h3>Ganasté! </h3> ");
			$(".usuarioEleccion").html('<img src="images/tijera.png" alt="tijera" width="180">');
			$(".maquinaEleccion").html('<img src="images/papel.png" class="malaEleccion" alt="papel" width="180">');
		}else if (opcionMaquina == tijera) {
			$("#winnerLoser").html("<h3>Empate! </h3>");
			$(".usuarioEleccion").html('<img src="images/tijera.png" alt="tijera" width="180">');
			$(".maquinaEleccion").html('<img src="images/tijera.png" alt="tijera" width="180">');
		}else if (opcionMaquina == lagarto) {
			$("#winnerLoser").html("<h3>Ganasté! </h3> ");
			$(".usuarioEleccion").html('<img src="images/tijera.png" alt="tijera" width="180">');
			$(".maquinaEleccion").html('<img src="images/lagarto.png" class="malaEleccion" alt="lagarto" width="180">');
		}else if (opcionMaquina == spock) {
			$("#winnerLoser").html("<h3>Perdisté! </h3>");
			$(".usuarioEleccion").html(' <img src="images/tijera.png" class="malaEleccion" alt="tijera" width="180">');
			$(".maquinaEleccion").html('<img src="images/spock.png" alt="spock" width="180">');
		}

	}else if(opcioneUsuario == lagarto){

		if (opcionMaquina == piedra) {
			$("#winnerLoser").html("<h3>Perdisté! </h3>");
			$(".usuarioEleccion").html(' <img src="images/lagarto.png" class="malaEleccion" alt="lagarto" width="180">');
			$(".maquinaEleccion").html('<img src="images/piedra.png" alt="papel" width="180">');
		}else if (opcionMaquina == papel) {
			$("#winnerLoser").html("<h3>Perdisté! </h3>");
			$(".usuarioEleccion").html(' <img src="images/lagarto.png" class="malaEleccion" alt="lagarto" width="180">');
			$(".maquinaEleccion").html('<img src="images/papel.png" alt="papel" width="180">');
		}else if (opcionMaquina == tijera) {
			$("#winnerLoser").html("<h3>Perdisté! </h3>");
			$(".usuarioEleccion").html(' <img src="images/lagarto.png" class="malaEleccion" alt="lagarto" width="180">');
			$(".maquinaEleccion").html('<img src="images/tijera.png" alt="tijera" width="180">');
		}else if (opcionMaquina == lagarto) {
			$("#winnerLoser").html("<h3>Empate! </h3>");
			$(".usuarioEleccion").html('<img src="images/lagarto.png" alt="lagarto" width="180">');
			$(".maquinaEleccion").html('<img src="images/lagarto.png" alt="lagarto" width="180">');
		}else if (opcionMaquina == spock) {
			$("#winnerLoser").html("<h3>Ganasté! </h3> ");
			$(".usuarioEleccion").html('<img src="images/lagarto.png" alt="lagarto" width="180">');
			$(".maquinaEleccion").html('<img src="images/spock.png" class="malaEleccion" alt="spock" width="180">');
		}

	}else if(opcioneUsuario == spock){

		if (opcionMaquina == piedra) {
			$("#winnerLoser").html("<h3>Ganasté! </h3> ");
			$(".usuarioEleccion").html('<img src="images/spock.png" alt="spock" width="180">');
			$(".maquinaEleccion").html('<img src="images/piedra.png" class="malaEleccion" alt="papel" width="180">');
		}else if (opcionMaquina == papel) {
			$("#winnerLoser").html("<h3>Perdisté! </h3>");
			$(".usuarioEleccion").html(' <img src="images/spock.png" class="malaEleccion" alt="spock" width="180">');
			$(".maquinaEleccion").html('<img src="images/papel.png" alt="papel" width="180">');
		}else if (opcionMaquina == tijera) {
			$("#winnerLoser").html("<h3>Ganasté! </h3> ");
			$(".usuarioEleccion").html('<img src="images/spock.png" alt="spock" width="180">');
			$(".maquinaEleccion").html('<img src="images/tijera.png" class="malaEleccion" alt="tijera" width="180">');
		}else if (opcionMaquina == lagarto) {
			$("#winnerLoser").html("<h3>Perdisté! </h3>");
			$(".usuarioEleccion").html(' <img src="images/spock.png" class="malaEleccion" alt="spock" width="180">');
			$(".maquinaEleccion").html('<img src="images/lagarto.png" alt="lagarto" width="180">');
		}else if (opcionMaquina == spock) {
			$("#winnerLoser").html("<h3>Empate! </h3>");
			$(".usuarioEleccion").html('<img src="images/spock.png" alt="spock" width="180">');
			$(".maquinaEleccion").html('<img src="images/spock.png" alt="spock" width="180">');
		}
	}

	var opacity = "." + opciones[opcioneUsuario];
	$(opacity).css("opacity", ".5"); /* el opacity es de 0.5 cuando se elije una opcion*/
});



$("#reglas").on("click", function(){
	alert("Reglas para jugar: \n 1. Tijeras cortan papel \n 2. Papel tapa a piedra \n 3. Piedra aplasta a lagarto \n 4. Lagarto envenena a spock \n 5. Spock rompe tijeras \n 6. Tijeras decapitan lagarto \n 7. Lagarto devora papel \n 8. Papel desautoriza a spock \n 8. Spock vaporiza piedra \n 8. Piedra aplasta a tijeras"); 
})	