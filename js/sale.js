window.onload = function () {
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Aplastado',
            precio: 9000,
            imagen: '/images/Aplastados.png'
            

        },
        {
            id: 2,
            nombre: 'Arepas',
            precio: 9000,
            imagen: '/images/Arepas.png'
        },
        {
            id: 3,
            nombre: 'Hamburguesa',
            precio: 9000,
            imagen: '/images/Hamburguesa.png'
        },
        {
            id: 4,
            nombre: 'Patacones',
            precio: 11000,
            imagen: '/images/Patacones.png'
        },

        {
            id: 5,
            nombre: 'Perros',
            precio: 10000,
            imagen: '/images/Perros.png'
        },

    
        {
            id: 6,
            nombre: 'Picadas',
            precio: 25000,
            imagen: '/images/Picadas.png'
        },

        {
            id: 7,
            nombre: 'Asados',
            precio: 12000,
            imagen: '/images/Asados.png'
        },
    ];

    let Pedido = [];
    let total = 0;
    const DOMitems = document.querySelector('#items');
    const DOMPedido = document.querySelector('#Pedido');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el Pedido
    */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            //miNodoPrecio.textContent = info.precio + '$';
            miNodoPrecio.textContent =  '$' + info.precio;

            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Añadir';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlPedido);

            
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al Pedido de la compra
    */
    function anyadirProductoAlPedido(evento) {
        // Anyadimos el Nodo a nuestro Pedido
        Pedido.push(evento.target.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Actualizamos el Pedido 
        renderizarPedido();
        // Actualizamos el LocalStorage
        guardarPedidoEnLocalStorage();
    }

    /**
    * Dibuja todos los productos guardados en el Pedido
    */
    function renderizarPedido() {
        // Vaciamos todo el html
        DOMPedido.textContent = '';
        // Quitamos los duplicados
        const PedidoSinDuplicados = [...new Set(Pedido)];
        // Generamos los Nodos a partir de Pedido
        PedidoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = Pedido.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del Pedido
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemPedido);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMPedido.appendChild(miNodo);
        });
    }

    /**
    * Evento para borrar un elemento del Pedido
    */
    function borrarItemPedido(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        Pedido = Pedido.filter((PedidoId) => {
            return PedidoId !== id;
        });
        // volvemos a renderizar
        renderizarPedido();
        // Calculamos de nuevo el precio
        calcularTotal();
        // Actualizamos el LocalStorage
        guardarPedidoEnLocalStorage();

    }

    /**
    * Calcula el precio total teniendo en cuenta los productos repetidos
    */
    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del Pedido
        Pedido.forEach((item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            total = total + miItem[0].precio;
        });
        // Renderizamos el precio en el HTML
        DOMtotal.textContent = total.toFixed(2);
    }

    /**
    * Varia el Pedido y vuelve a dibujarlo
    */
    function vaciarPedido() {
        // Limpiamos los productos guardados
        Pedido = [];
        // Renderizamos los cambios
        renderizarPedido();
        calcularTotal();
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarPedidoEnLocalStorage () {
        miLocalStorage.setItem('Pedido', JSON.stringify(Pedido));
    }

    function cargarPedidoDeLocalStorage () {
        // ¿Existe un Pedido previo guardado en LocalStorage?
        if (miLocalStorage.getItem('Pedido') !== null) {
            // Carga la información
            Pedido = JSON.parse(miLocalStorage.getItem('Pedido'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarPedido);

    // Inicio
    cargarPedidoDeLocalStorage();
    renderizarProductos();
    calcularTotal();
    renderizarPedido();
}
