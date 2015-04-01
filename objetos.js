function Producto(id,nombre,precio,stock){
	this.id=id;
	this.nombre=nombre;
	this.precio =precio;
	this.stock = stock;
}

Producto.prototype.calcularPrecio= function() {
  if(this.stock<100){
	  return this.precio*1.1;
  }else if(this.stock>200){
	  return this.precio *0.9;
  }else{
	  return this.precio;
  }  
};

function agregarProducto(){
	var li = document.createElement("li");
	var prd = new Producto(
					document.getElementById('idProd').value,
					document.getElementById('nombreProd').value,
					document.getElementById('precioProd').value,
					document.getElementById('stockProd').value);
	li.appendChild(document.createTextNode("Producto: "+prd.id+" - "+prd.nombre+" precio: $"+prd.calcularPrecio()));
	lista= document.getElementById('listaProductos');
	lista.appendChild(li);
}