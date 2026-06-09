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

            alert("Inicio de sesión correcto.");
            window.location.href = "catalogo.html";
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

            alert("Usuario registrado correctamente.");
            window.location.href = "login.html";
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
        perfilForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombrePerfil").value;
            const correo = document.getElementById("correoPerfil").value;
            const telefono = document.getElementById("telefonoPerfil").value;
            const direccion = document.getElementById("direccionPerfil").value;

            if (!nombre || !correo || !telefono || !direccion) {
                alert("Debe completar todos los campos del perfil.");
                return;
            }

            if (telefono.length < 8) {
                alert("El teléfono debe tener al menos 8 dígitos.");
                return;
            }

            alert("Perfil actualizado correctamente.");
        });
    }

    window.agregarCarrito = function(producto) {
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
});