// jscode.js

// Simulación de productos en el carrito
const carrito = [
  { nombre: "Camiseta", cantidad: 2, precioUnitario: 25000 },
  { nombre: "Pantalones", cantidad: 1, precioUnitario: 45000 },
];

// Función para actualizar el carrito en la tabla
function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = ""; // Limpiar la lista antes de actualizar
  let totalProductos = 0;
  let totalCompra = 0;

  carrito.forEach((item) => {
    const precioTotal = item.cantidad * item.precioUnitario;
    totalProductos += item.cantidad;
    totalCompra += precioTotal;

    const fila = document.createElement("tr");
    fila.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.precioUnitario} COP</td>
            <td>${precioTotal} COP</td>
            <td><button class="btn-eliminar" onclick="eliminarProducto('${item.nombre}')">Eliminar</button></td>
        `;
    listaCarrito.appendChild(fila);
  });

  // Actualizar totales
  document.getElementById("total-productos").innerText = totalProductos;
  document.getElementById("total-compra").innerText = totalCompra;
}

// Función para eliminar un producto del carrito
function eliminarProducto(nombre) {
  const index = carrito.findIndex((item) => item.nombre === nombre);
  if (index !== -1) {
    carrito.splice(index, 1);
    actualizarCarrito(); // Actualizar la tabla
  }
}

// Evento para confirmar la compra
document.getElementById("confirmar-compra").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agrega productos para realizar la compra.");
  } else {
    alert("Compra confirmada. Gracias por tu pedido!");
    carrito.length = 0; // Vaciar el carrito
    actualizarCarrito(); // Actualizar la tabla
  }
});

// Inicializar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", actualizarCarrito);
