document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const correo = document.getElementById('correo').value.trim();
    let errores = [];

    if (nombre.length < 2) {
        errores.push('El nombre debe tener al menos 2 caracteres.');
    }
    if (isNaN(edad) || edad < 1) {
        errores.push('La edad debe ser un número mayor a 0.');
    }
    if (!correo.match(/^\S+@\S+\.\S+$/)) {
        errores.push('El correo no es válido.');
    }

    const resultado = document.getElementById('resultado');
    if (errores.length > 0) {
        resultado.textContent = errores.join(' ');
        resultado.style.color = 'red';
    } else {
        resultado.textContent = `Datos validados: Nombre: ${nombre}, Edad: ${edad}, Correo: ${correo}`;
        resultado.style.color = '#007bff';
    }
});
