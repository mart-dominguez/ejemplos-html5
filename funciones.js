/**
 * 
 */
function invisible(elemento){
	alert("Voy a hacer invisible el elemento "+elemento.id);
	elemento.style.visibility="hidden";
}

function ocultar(elemento){
	alert("Voy a hacer OCULTAR el elemento "+elemento.id);
	elemento.style.display="none";
	
}

function visible(idElemento){
	elemento = document.getElementById(idElemento);
	elemento.style.visibility="visible";
	
}

function mostrar(idElemento){
	elemento = document.getElementById(idElemento);
	elemento.style.display="";
}

function cambiarEstilo(idElemEstiloOrigen,idElemEstiloDestino){
	elementoOrigen = document.getElementById(idElemEstiloOrigen)
	elementoDestino = document.getElementById(idElemEstiloDestino)
	elementoOrigen.className=elementoDestino.className;
	elementoOrigen.innerHTML="Cambio clase de elemento ["+idElemEstiloOrigen+"] por la del elemento ["+idElemEstiloDestino+"]";
}
