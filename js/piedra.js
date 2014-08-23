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
	var opcioneUsuario = $("input[type=radio]:checked").val();
	var opcionMaquina = aleatorio(0, 4);
	$("div.maquina").html("La Máquina eligío: <b>" + opciones[opcionMaquina]) + "</b>";
	$("div.usuario").html("El usuario eligío: <b>" + opciones[opcioneUsuario]) + "</b>";

	if(opcioneUsuario == piedra){

		if (opcionMaquina == piedra) {
			$(".ganador").html("<b>Empate!</b>");
		}else if (opcionMaquina == papel) {
			$(".ganador").html("Papel tapa a piedra: <b>perdiste!</b>");
		}else if (opcionMaquina == tijera) {
			$(".ganador").html("Piedra aplasta tijera: <b>Ganaste!</b>");
		}else if (opcionMaquina == lagarto) {
			$(".ganador").html("Piedra aplasta lagarto: <b>Ganaste!</b>");
		}else if (opcionMaquina == spock) {
			$(".ganador").html("Spock vaporiza piedra: <b>Perdiste!</b>");
		}

	}else if(opcioneUsuario == papel){

		if (opcionMaquina == piedra) {
			$(".ganador").html("Papel tapa a piedra: <b>Ganaste!</b>");
		}else if (opcionMaquina == papel) {
			$(".ganador").html("<b>Empate!</b>");
		}else if (opcionMaquina == tijera) {
			$(".ganador").html("Tijera corta papel: <b>Perdiste!</b>");
		}else if (opcionMaquina == lagarto) {
			$(".ganador").html("Lagarto devóra papel: <b>Perdiste!</b>");
		}else if (opcionMaquina == spock) {
			$(".ganador").html("Papel desautoriza spock: <b>Ganaste!</b>");
		}

	}else if(opcioneUsuario == tijera){

		if (opcionMaquina == piedra) {
			$(".ganador").html("Piedra aplasta tijera: <b>Perdiste!</b>");
		}else if (opcionMaquina == papel) {
			$(".ganador").html("Tijera corta papel: <b>Ganaste!</b>");
		}else if (opcionMaquina == tijera) {
			$(".ganador").html("<b>Empate!</b>");
		}else if (opcionMaquina == lagarto) {
			$(".ganador").html("Tijera corta lagarto: <b>Ganaste!</b>");
		}else if (opcionMaquina == spock) {
			$(".ganador").html("Spock rompe tijera: <b>Perdiste!</b>");
		}

	}else if(opcioneUsuario == lagarto){
		if (opcionMaquina == piedra) {
			$(".ganador").html("Piedra aplasta lagarto: <b>Perdiste!</b>");
		}else if (opcionMaquina == papel) {
			$(".ganador").html("Lagarto devóra papel: <b>Perdiste!</b>");
		}else if (opcionMaquina == tijera) {
			$(".ganador").html("Tijera corta lagarto: <b>Perdiste!</b>");
		}else if (opcionMaquina == lagarto) {
			$(".ganador").html("<b>Empate!</b>");
		}else if (opcionMaquina == spock) {
			$(".ganador").html("Lagarto envenena spock: <b>Ganaste!</b>");
		}

	}else if(opcioneUsuario == spock){
		if (opcionMaquina == piedra) {
			$(".ganador").html("Spock vaporiza piedra: <b>Ganaste!</b>");
		}else if (opcionMaquina == papel) {
			$(".ganador").html("Papel desautoriza spock: <b>Perdiste!</b>");
		}else if (opcionMaquina == tijera) {
			$(".ganador").html("Spock rompe tijera: <b>Ganaste!</b>");
		}else if (opcionMaquina == lagarto) {
			$(".ganador").html("Lagarto envenena spock: <b>Perdiste!</b>");
		}else if (opcionMaquina == spock) {
			$(".ganador").html("<b>Empate!</b>");
		}
	}
	$("input[type=radio]:checked").css("background-color", "#0f0");
});

$("#reglas").on("click", function(){
	alert("Reglas para jugar: \n 1. Tijeras cortan papel \n 2. Papel tapa a piedra \n 3. Piedra aplasta a lagarto \n 4. Lagarto envenena a spock \n 5. Spock rompe tijeras \n 6. Tijeras decapitan lagarto \n 7. Lagarto devora papel \n 8. Papel desautoriza a papel \n 8. Spock vaporiza piedra \n 8. Piedra aplasta a tijeras"); 
})