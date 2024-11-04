const productos = [
  {
    id: 1,
    nombre: "Abrigo de lana",
    categoria: "abrigos",
    precio: 200000,
    descripcion: "Abrigo de lana suave y cálido.",
    imagen: "./images/abrigo-lana.jpg",
  },
  {
    id: 2,
    nombre: "Camiseta básica",
    categoria: "camisetas",
    precio: 30000,
    descripcion: "Camiseta básica de algodón.",
    imagen: "./images/camiseta-basica.jpg",
  },
  {
    id: 3,
    nombre: "Pantalón de mezclilla",
    categoria: "pantalones",
    precio: 70000,
    descripcion: "Pantalón de mezclilla resistente.",
    imagen: "./images/pantalon-mezclilla.jpg",
  },
];

function cargarProductos(categoria = "todos") {
  const contenedor = document.getElementById("contenedor-productos");
  contenedor.innerHTML = "";

  const productosFiltrados = productos.filter(
    (producto) => categoria === "todos" || producto.categoria === categoria
  );

  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;

  const productosPagina = productosFiltrados.slice(inicio, fin);

  productosPagina.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.className = "producto";
    divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto" />
            <h3>${producto.nombre}</h3>
            <p>Precio: COP ${producto.precio}</p>
            <p>${producto.descripcion}</p>
            <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
        `;
    contenedor.appendChild(divProducto);
  });

  crearPaginacion(totalPaginas);
}
