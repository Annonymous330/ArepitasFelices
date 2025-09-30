let carrito = [];
let total = 0;

function toggleCarrito() {
  document.getElementById("carrito").classList.toggle("mostrar");
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nombre} - $${item.precio}
      <button class="eliminar" onclick="eliminarDelCarrito(${index})">X</button>
    `;
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = `Total: $${total}`;
  document.getElementById("contador-carrito").textContent = carrito.length;
}

function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
}

function finalizarPedido() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }
  let mensaje = "Hola, quiero hacer este pedido:\n";
  carrito.forEach(item => {
    mensaje += `- ${item.nombre}: $${item.precio}\n`;
  });
  mensaje += `Total: $${total}`;
  
  const url = `https://wa.me/51908625014?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
