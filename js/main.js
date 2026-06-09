document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const registroForm = document.getElementById("registroForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const correo = document.getElementById("correo").value;
            const password = document.getElementById("password").value;

            if (!correo || !password) {
                alert("Debe completar todos los campos.");
                return;
            }
            const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

            if (usuarioRegistrado) {
                localStorage.setItem("usuarioActual", JSON.stringify(usuarioRegistrado));
                localStorage.setItem("usuarioLogeado", "true");
                alert("Inicio de sesión correcto.");
                window.location.href = "catalogo.html";
            } else{
                alert("Usuario no encontrado.");
            }
        });
    }

    if (registroForm) {
        registroForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correoRegistro").value;
            const rol = document.getElementById("rol").value;
            const password = document.getElementById("passwordRegistro").value;
            const confirmarPassword = document.getElementById("confirmarPassword").value;

            const tieneMayuscula = /[A-Z]/.test(password);
            const tieneNumero = /[0-9]/.test(password);
            const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
            const largoValido = password.length >= 8 && password.length <= 16;

            if (!nombre || !correo || !rol || !password || !confirmarPassword) {
                alert("Debe completar todos los campos.");
                return;
            }

            if (!largoValido) {
                alert("La contraseña debe tener entre 8 y 16 caracteres.");
                return;
            }

            if (!tieneMayuscula) {
                alert("La contraseña debe tener al menos una letra mayúscula.");
                return;
            }

            if (!tieneNumero) {
                alert("La contraseña debe tener al menos un número.");
                return;
            }

            if (!tieneEspecial) {
                alert("La contraseña debe tener al menos un carácter especial.");
                return;
            }

            if (password !== confirmarPassword) {
                alert("Las contraseñas no coinciden.");
                return;
            }

            const usuario = {
                nombre: nombre,
                correo: correo,
                rol: rol,
                telefono: "",
                direccion: ""
            };

            localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));
            localStorage.setItem("usuarioLogeado", "true");
            alert("Usuario registrado correctamente.");
            window.location.href = "catalogo.html";
        });
    }

    const recuperarForm = document.getElementById("recuperarForm");

    if (recuperarForm) {
        recuperarForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const correo = document.getElementById("correoRecuperar").value;

            if (!correo) {
                alert("Debe ingresar su correo electrónico.");
                return;
            }

            alert("Se enviaron las instrucciones de recuperación al correo ingresado.");
            window.location.href = "login.html";
        });
    }

    const perfilForm = document.getElementById("perfilForm");

    if (perfilForm) {
        const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

        if (usuarioActual) {
            document.getElementById("nombrePerfil").value = usuarioActual.nombre || "";
            document.getElementById("correoPerfil").value = usuarioActual.correo || "";
            document.getElementById("telefonoPerfil").value = usuarioActual.telefono || "";
            document.getElementById("direccionPerfil").value = usuarioActual.direccion || "";
            document.getElementById("rolPerfil").value = usuarioActual.rol || "";
        }

        perfilForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombrePerfil").value;
            const correo = document.getElementById("correoPerfil").value;
            const telefono = document.getElementById("telefonoPerfil").value;
            const direccion = document.getElementById("direccionPerfil").value;
            const rol = document.getElementById("rolPerfil").value;

            if (!nombre || !correo || !telefono || !direccion) {
                alert("Debe completar todos los campos del perfil.");
                return;
            }

            if (telefono.length < 8) {
                alert("El teléfono debe tener al menos 8 dígitos.");
                return;
            }

            const usuarioActualizado = {
                nombre: nombre,
                correo: correo,
                rol: rol,
                telefono: telefono,
                direccion: direccion
            };

            localStorage.setItem("usuarioActual", JSON.stringify(usuarioActualizado));
            localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioActualizado));

            alert("Perfil actualizado correctamente.");
        });
    }
    window.agregarCarrito = function (producto, precio) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        carrito.push({
            nombre: producto,
            precio: precio,
            cantidad: 1
        });

        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(producto + " agregado al carrito.");
    };

    const pagoForm = document.getElementById("pagoForm");

    if (pagoForm) {
        pagoForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const titular = document.getElementById("titularPago").value;
            const metodo = document.getElementById("metodoPago").value;

            if (!titular || !metodo) {
                alert("Debe completar los datos del pago.");
                return;
            }

            localStorage.removeItem("carrito");
            window.location.href = "pago-exitoso.html";
        });
    }

    const productoForm = document.getElementById("productoForm");

    if (productoForm) {
        productoForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombreProducto").value;
            const categoria = document.getElementById("categoriaProducto").value;
            const precio = document.getElementById("precioProducto").value;
            const stock = document.getElementById("stockProducto").value;

            if (!nombre || !categoria || !precio || !stock) {
                alert("Debe completar todos los datos del producto.");
                return;
            }

            if (precio <= 0 || stock < 0) {
                alert("El precio debe ser mayor a 0 y el stock no puede ser negativo.");
                return;
            }

            alert("Producto guardado correctamente.");
        });
    }

    const usuarioAdminForm = document.getElementById("usuarioAdminForm");

    if (usuarioAdminForm) {
        usuarioAdminForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombreAdminUsuario").value;
            const correo = document.getElementById("correoAdminUsuario").value;
            const rol = document.getElementById("rolAdminUsuario").value;

            if (!nombre || !correo || !rol) {
                alert("Debe completar todos los datos del usuario.");
                return;
            }

            alert("Usuario guardado correctamente.");
        });
    }

    const paginasProtegidas = [
        "catalogo.html",
        "carrito.html",
        "perfil.html",
        "admin-productos.html",
        "admin-usuarios.html",
        "pago-exitoso.html"
    ];

    const paginaActual = window.location.pathname.split("/").pop();

    if (paginasProtegidas.includes(paginaActual)) {
        const usuarioLogeado = localStorage.getItem("usuarioLogeado");

        if (usuarioLogeado !== "true") {
            alert("Debe iniciar sesión para acceder a esta página.");
            window.location.href = "login.html";
        }
    }
    const paginasAdmin = [
        "admin-productos.html",
        "admin-usuarios.html"
    ];

    if (paginasAdmin.includes(paginaActual)) {
        const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

        if (!usuarioRegistrado || usuarioRegistrado.rol !== "administrador") {
            alert("Solo un usuario administrador puede acceder a esta sección.");
            window.location.href = "catalogo.html";
        }
    }

    window.cerrarSesion = function () {
        localStorage.removeItem("usuarioLogeado");
        localStorage.removeItem("usuarioActual");
        alert("Sesión cerrada correctamente.");
        window.location.href = "login.html";
    };
});

const tablaCarrito = document.getElementById("tablaCarrito");
const carritoVacio = document.getElementById("carritoVacio");
const carritoContenido = document.getElementById("carritoContenido");
const totalCarrito = document.getElementById("totalCarrito");

if (tablaCarrito) {
    mostrarCarrito();
}

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    tablaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        carritoVacio.classList.remove("d-none");
        carritoContenido.classList.add("d-none");
        return;
    }

    carritoVacio.classList.add("d-none");
    carritoContenido.classList.remove("d-none");

    let total = 0;

    carrito.forEach((producto, index) => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        tablaCarrito.innerHTML += `
      <tr>
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>$${producto.precio.toLocaleString("es-CL")}</td>
        <td>$${subtotal.toLocaleString("es-CL")}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="eliminarProductoCarrito(${index})">
            Eliminar
          </button>
        </td>
      </tr>
    `;
    });

    totalCarrito.textContent = "Total: $" + total.toLocaleString("es-CL");
}

window.eliminarProductoCarrito = function (index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};