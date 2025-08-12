
let datos = []; // Aquí guardamos los registros
let editIndex = null; // Índice para editar

function mostrar() {
    const tabla = document.getElementById("tablaDatos");
    tabla.innerHTML = ""; // Limpiar la tabla
    datos.forEach((item, index) => {
        tabla.innerHTML += `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.email}</td>
                <td>
                    <button onclick="editar(${index})">Editar</button>
                    <button onclick="eliminar(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function crear() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (!nombre || !email) {
        alert("Por favor, completa todos los campos");
        return;
    }

    if (editIndex === null) {
        // Crear nuevo registro
        datos.push({ nombre, email });
    } else {
        // Actualizar registro existente
        datos[editIndex] = { nombre, email };
        editIndex = null;
    }

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    mostrar();
}

function editar(index) {
    document.getElementById("nombre").value = datos[index].nombre;
    document.getElementById("email").value = datos[index].email;
    editIndex = index; // Guardar índice para actualización
}

function eliminar(index) {
    if (confirm("¿Seguro que deseas eliminar este registro?")) {
        datos.splice(index, 1);
        mostrar();
    }
}

mostrar();
