
function añadir(){
	var nuevaFruta = document.getElementById("nuevoLi").value;
	if (nuevaFruta.length > 0) 
		{
			var agregaLi = document.createElement("li");
			agregaLi.id = nuevaFruta;
			document.getElementById("lista").appendChild(agregarLi);

	}
	return false;
}
// 	var valor = document.getElementById("fruta").value
	
// 	document.getElementById("frutas").innerhtml += "li"

// }
// 	// var nuevaFruta=document.getElementById('nuevaFruta').value;
// 	// if (nuevaFruta.length>0) 
// 	// {
// 	// 	if (nuevaFruta) 
// 	//      {
// 	// 		var li=document.createElement('li');
// 	// 		li.id=nuevoFru;

// 	// 		li.innerhtml="<span onclick 'eliminar(this)'>x</spam>"+nuevaFruta;
// 	// 		document.getElementById("listaOrdenada").appendChild(li);
// 	//  	}

// 	//  }
// 	//  return false;
//  // }