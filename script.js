// Datos de Pizzas, Paquetes y Complementos

const ingredientes = [
    'Pepperoni',
    'Jamón',
    'Champiñones',
    'Aceitunas',
    'Pimientos',
    'Cebolla',
    'Piña',
    'Salchicha Italiana'
];

const opcionesAdicionales = {
    orillaRellena: false, // Orilla rellena de queso
    quesoExtra: false     // Queso extra
};


const metodosDePago = ['Efectivo', 'Tarjeta de Crédito/Débito', 'Transferencia Bancaria'];

const metodosEntrega = [ // ALGO PARA PREGUNTAR
    { metodosEntrega: 'Paso por el Pedido', precioEnvio: 0 },
    { metodosEntrega: 'Entrega a Domicilio', precioEnvio: 0 }
];


const pizzas = [
    { type: "pizza", name: "Pizza de Pepperoni", img: "imgs/peperoni.jpg", price: 99},
    { type: "pizza", name: "Pizza Suprema", img: "imgs/suprema.jpg", price: 175},
    { type: "pizza", name: "Pizza Hawaiana", img: "imgs/hawaiana.jpg", price: 145},
    { type: "pizza", name: "Pizza 3 Carnes", img: "imgs/3carnes.jpg", price: 155},
    { type: "pizza", name: "Pizza Al Pastor", img: "imgs/pizzaAlPastor.jpg", price: 165},
    { type: "pizza", name: "Pizza A la Mexicana", img: "imgs/mexicana.jpg", price: 175 },
    { type: "pizza", name: "Pizza de Salami", img: "imgs/notFound.jpg", price: 129 },
    { type: "pizza", name: "Pizza de Tocino", img: "imgs/notFound.jpg", price: 129 },
    { type: "pizza", name: "Pizza de Chorizo", img: "imgs/notFound.jpg", price: 129 },
    { type: "pizza", name: "Pizza de Salchicha Italiana", img: "imgs/notFound.jpg", price: 129 },
    { type: "pizza", name: "Pizza de Jamon", img: "imgs/notFound.jpg", price: 129 },
    { type: "pizza", name: "Pizza de Piña", img: "imgs/notFound.jpg", price: 129 },
    { type: "pizza", name: "Pizza de Champiñones", img: "imgs/notFound.jpg", price: 129 },
    { type: "pizza", name: "Pizza de Pimiento Morron", img: "imgs/chileMorron.jpg", price: 129 },
    { type: "pizza", name: "Pizza de Jalapeños", img: "imgs/notFound.jpg", price: 129 },
];

const paquetes = [
    { 
        type: "paquete", 
        name: "Paquete 1", 
        img: "imgs/paquete1.jpg", 
        price: 239, 
        products: [
            { type: "pizza", name: "Pizza Pepperoni" },
            { type: "bonealitas", name: "Boneless o Alitas", options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] }},
            { type: "bebida", name: "Refresco Grande 1.75L" }
        ] 
    },
    { 
        type: "paquete", 
        name: "Paquete 2", 
        img: "imgs/paquete2.jpg", 
        price: 185, 
        products: [
            { type: "pizza", name: "Pizza Pepperoni" },
            { type: "complementos", name: "Espagueti Sencillo" },
            { type: "bebida", name: "Refresco Grande 1.75L" }
        ] 
    },
    { 
        type: "paquete", 
        name: "Paquete 3", 
        img: "imgs/paquete3.jpg", 
        price: 219, 
        products: [
            { type: "pizza", name: "Pizza De Boneless (Bañados o Naturales)" },
            { type: "bebida", name: "Refresco Grande 1.75L" },
            { type: "complemento", name: "Aderezo A Elegir", sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"] }
        ] 
    },
    { 
        type: "paquete", 
        name: "Paquete 4", 
        img: "imgs/paquete4.jpg", 
        price: 259, 
        products: [
            { type: "pizza", name: "2 Pizzas de Peperoni con 1/4 de Queso 100% Mozarella" },
        ] 
    }
];

const bonealitas = [
    { type: "bonealitas", name: "Boneless", img: "imgs/boneless.jpg", price: 119, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] }},
    { type: "bonealitas", name: "Alitas", img: "imgs/alitas.jpg", price: 119, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] }},
    { type: "bonealitas", name: "1Kg de Boneless", img: "imgs/boneless.jpg", price: 269, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] }},
    { type: "bonealitas", name: "1Kg de Alitas", img: "imgs/alitas.jpg", price: 269, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] }},
];

const complementos = [
    { type: "complemento", name: "Papas Sencillas", img: "imgs/papassencillas.jpg", price: 48},
    { type: "complemento", name: "Papas Preparadas", img: "imgs/papaspreparadas.jpg", price: 68},
    { type: "complemento", name: "Espagueti Sencillo", img: "imgs/espagueti.jpg", price: 58 },
    { type: "complemento", name: "Espagueti Con Carne", img: "imgs/espagueticarne.jpg", price: 78},
    { type: "complemento", name: "Aderezo", img: "imgs/aderezo.jpg", price: 15, options: { sauces: ["Ranch", "Jalapeño", "Chipotle", "BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"] }},
    { type: "complemento", name: "8 Aros de Cebolla", img: "imgs/arosdecebolla.jpg", price: 70},
    { type: "complemento", name: "5 Dedos de Queso", img: "imgs/dedosdequeso.jpg", price: 65},
    { type: "complemento", name: "5 Jalapeños Poppers", img: "imgs/jalapeñospoppers.jpg", price: 75},
    { type: "complemento", name: "Refresco Grande 1.75L", img: "imgs/cocacola.jpg", price: 39}

];

// Variables para almacenar las cantidades seleccionadas
const selectedQuantities = {
    pizzas: {},
    paquetes: {},
    complementos: {},
    bonealitas: {}
};

let currentProduct = null;

// Función para actualizar el estado de las cantidades seleccionadas
function updateSelectedQuantities(type, name, quantity) {
    if (selectedQuantities[type]) {
        selectedQuantities[type][name] = quantity;
    } else {
        console.error(`Tipo desconocido: ${type}`);
    }
}

function updateQuantity(type, name, delta) {
    const quantityInput = document.getElementById(`quantity-${name}`);
    let quantity = parseInt(quantityInput.value);
    quantity = Math.max(0, quantity + delta);
    quantityInput.value = quantity;

    // Actualizar el estado de las cantidades seleccionadas
    updateSelectedQuantities(type, name, quantity);

    // Verificar si el producto tiene opciones y está en productosOrdenados
    if (delta < 0) { // Solo preocuparse si se está disminuyendo la cantidad
        // Encuentra el último índice del producto en productosOrdenados
        for (let i = productosOrdenados.length - 1; i >= 0; i--) {
            if (productosOrdenados[i].name === name) {
                productosOrdenados.splice(i, 1);
                break;
            }
        }
    }
}

function decreaseQuantity(type, name) {
    // Disminuir la cantidad del producto en el carrito
    updateQuantity(type, name, -1);

    // Verificar si el producto tiene opciones
    const index = productosOrdenados.findIndex(product => product.type === type && product.name === name);

    if (index !== -1) {
        // Si el producto tiene opciones, reducir su cantidad en el array productosOrdenados
        const product = productosOrdenados[index];
        if (product.quantity && product.quantity > 1) {
            product.quantity--; // Reducir la cantidad
        } else {
            // Eliminar la última instancia del producto con opciones
            productosOrdenados.splice(index, 1);
        }
    }
}


//AGREGAR BUEN DISEÑO
function createSelectElement(optionsArray, name, labelText) {
    // Crear contenedor para el grupo de formulario con clases mejoradas
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group mb-4 p-2';

    // Crear y configurar la etiqueta con estilos adicionales
    const label = document.createElement('label');
    label.textContent = labelText;
    label.className = 'form-label font-weight-bold mb-2 text-muted'; // Añade color y peso
    formGroup.appendChild(label);

    // Crear y configurar el elemento select con diseño moderno
    const select = document.createElement('select');
    select.name = name;
    select.className = 'form-select custom-select shadow-sm border-0 rounded-pill';
    select.required = true;

    // Crear una opción por defecto para guiar al usuario
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "Selecciona una opción";
    defaultOption.disabled = true; // Deshabilitar la opción por defecto
    defaultOption.selected = true; // Hacerla seleccionada por defecto
    select.appendChild(defaultOption);

    // Añadir cada opción del array
    optionsArray.forEach(optionValue => {
        const option = document.createElement('option');
        option.value = optionValue;
        option.textContent = optionValue;
        select.appendChild(option);
    });

    formGroup.appendChild(select);
    
    // Agregar evento para manejar el cambio de selección
    select.addEventListener('change', () => {
        if (select.value === "") {
            select.setCustomValidity('Debes seleccionar una opción válida.');
        } else {
            select.setCustomValidity('');
        }
    });

    return formGroup;
}



function createRadioElement(options, name, label) {
    const wrapper = document.createElement('div');
    wrapper.className = 'radio-group mb-3';

    const labelElement = document.createElement('label');
    labelElement.className = 'option-title';
    labelElement.textContent = label;
    wrapper.appendChild(labelElement);

    options.forEach(option => {
        const radioWrapper = document.createElement('div');
        radioWrapper.className = 'radio-option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = name;
        input.value = option.value;
        input.id = option.id;

        const span = document.createElement('span');
        span.textContent = option.text;

        // Seleccionar el radio button al hacer clic en el contenedor completo
        radioWrapper.addEventListener('click', () => {
            input.checked = true;
            document.querySelectorAll(`.radio-option`).forEach(opt => opt.classList.remove('selected'));
            radioWrapper.classList.add('selected');
        });

        // Agregar el radio button y el texto al contenedor
        radioWrapper.appendChild(input);
        radioWrapper.appendChild(span);
        wrapper.appendChild(radioWrapper);
    });

    return wrapper;
}



// Variables globales
let globalProductName = '';
let globalProductType = '';



function increaseQuantity(type, name) {
    // Encuentra el producto en la lista de productos disponibles
    const product = [...pizzas, ...bonealitas, ...complementos, ...paquetes].find(p => p.name === name);
    if (!product) return;

    // Asignar el producto actual
    currentProduct = {
        type: product.type,
        name: product.name
    };

    // Asignar valores a las variables globales
    globalProductName = product.name;
    globalProductType = product.type;

    const optionsForm = document.getElementById('optionsForm');
    optionsForm.innerHTML = ''; // Limpiar opciones previas

    if (product.img) {
        const img = document.createElement('img');
        img.src = product.img;
        img.alt = product.name;
        img.className = 'img-fluid mb-2';
        optionsForm.appendChild(img);
    }

    let hasOptions = false;

    switch (product.type) {
        case "bonealitas":
            if (product.options) {
                if (product.options.sauces) {
                    const sauceSelect = createSelectElement(product.options.sauces, 'sauces', 'Salsa:');
                    optionsForm.appendChild(sauceSelect);
                    hasOptions = true;
                }
                if (product.options.type) {
                    const typeSelect = createSelectElement(product.options.type, 'type', 'Tipo:');
                    optionsForm.appendChild(typeSelect);
                    hasOptions = true;
                }
            }
            break;

        case "complemento":
            if (product.options && product.options.sauces) {
                const sauceSelect = createSelectElement(product.options.sauces, 'sauces', 'Salsa:');
                optionsForm.appendChild(sauceSelect);
                hasOptions = true;
            }
            break;

        case "paquete":
            product.products.forEach(productOption => {
                if (productOption.name === "Boneless o Alitas") {
                    const radioOptions = [
                        { value: 'Boneless', text: 'Boneless', id: 'bonelessOption' },
                        { value: 'Alitas', text: 'Alitas', id: 'alitasOption' }
                    ];
                    const radioDiv = createRadioElement(radioOptions, 'selection', 'Selecciona:');
                    optionsForm.appendChild(radioDiv);
                    hasOptions = true;
                    if (productOption.options) {
                        if (productOption.options.sauces) {
                            const sauceSelect = createSelectElement(productOption.options.sauces, 'sauces', 'Salsa:');
                            optionsForm.appendChild(sauceSelect);
                            hasOptions = true;
                        }
                        if (productOption.options.type) {
                            const typeSelect = createSelectElement(productOption.options.type, 'type', 'Tipo:');
                            optionsForm.appendChild(typeSelect);
                            hasOptions = true;
                        }
                    }
                }
                if (productOption.name === "Aderezo A Elegir" && productOption.sauces) {
                    const sauceSelect = createSelectElement(productOption.sauces, 'sauces', 'Salsa:');
                    optionsForm.appendChild(sauceSelect);
                    const typeOptions = ['Bañados', 'Naturales'];
                    const typeSelect = createSelectElement(typeOptions, 'type', 'Tipo:');
                    optionsForm.appendChild(typeSelect);                    
                    hasOptions = true;
                }
            });
            break;
    }

    // Solo mostrar el modal si hay opciones adicionales
    if (hasOptions) {
        $('#optionsModal').modal('show');
    } else {
        updateQuantity(type, name, +1);
    }

}


function createFormGroup(labelText, inputElement) {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    const label = document.createElement('label');
    label.textContent = labelText;
    formGroup.appendChild(label);
    formGroup.appendChild(inputElement);
    return formGroup;
}

const productosOrdenados = [];

const pizzasPersonalizadas = [];


// Función para guardar opciones seleccionadas
function saveOptions() {

    // Verificar que se haya seleccionado un producto actual
    if (!currentProduct) {
        console.error('No se seleccionó un producto.');
        return;
    }

    // Obtener el tipo y nombre del producto actual
    const { type, name } = currentProduct;

    // Encontrar el producto en la lista de productos disponibles
    const product = [...pizzas, ...bonealitas, ...complementos, ...paquetes].find(p => p.name === name);
    if (!product) {
        console.error('Product not found.');
        return;
    }

    // Crear un objeto para guardar las opciones seleccionadas
    const selectedOptions = {
        name: product.name,
        img: product.img,
        price: product.price,
        options: {}
    };

     // Validación y obtención de opciones
     let allOptionsSelected = true; // Variable para validar si todas las opciones están seleccionadas


     if (product.type === "bonealitas") {
        const sauceSelect = document.querySelector('select[name="sauces"]');
        const typeSelect = document.querySelector('select[name="type"]');
        
        if (sauceSelect && sauceSelect.value) {
            selectedOptions.options.sauce = sauceSelect.value;
        } else {
            allOptionsSelected = false; // Marcar como incompleto si falta la opción de salsa
        }
        
        if (typeSelect && typeSelect.value) {
            selectedOptions.options.type = typeSelect.value;
        } else {
            allOptionsSelected = false; // Marcar como incompleto si falta la opción de tipo
        }
    }

    if (product.type === "complemento") {
        const sauceSelect = document.querySelector('select[name="sauces"]');
        
        if (sauceSelect && sauceSelect.value) {
            selectedOptions.options.sauce = sauceSelect.value;
        } else {
            allOptionsSelected = false; // Marcar como incompleto si falta la opción de salsa
        }
    }

    if (product.type === "paquete") {
        console.log(product)
        const bonelessOrWings = document.querySelector('input[name="selection"]:checked');
        const sauceSelect = document.querySelector('select[name="sauces"]');
        const typeSelect = document.querySelector('select[name="type"]');
        
        // Verificación de Boneless o Alitas
        if(product.name == "Paquete 1"){
            if (bonelessOrWings && bonelessOrWings.value) {
                selectedOptions.options["Boneless o Alitas"] = bonelessOrWings.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta la selección de Boneless o Alitas
            }
        }
        
        // Verificación de salsa
        if (sauceSelect && sauceSelect.value) {
            selectedOptions.options["Aderezo A Elegir"] = sauceSelect.value;
        } else {
            allOptionsSelected = false; // Marcar como incompleto si falta la opción de aderezo
        }

        // Verificación de tipo
        if (typeSelect && typeSelect.value) {
            selectedOptions.options["Tipo"] = typeSelect.value;
        } else {
            allOptionsSelected = false; // Marcar como incompleto si falta la opción de tipo
        }

        selectedOptions.options["Refresco Grande 1.75L"] = "Refresco Grande 1.75L"; // Asumimos siempre incluido
    }

    // Verificar si todas las opciones requeridas están seleccionadas
    if (!allOptionsSelected) {
        alert("Por favor selecciona todas las opciones antes de agregar el producto.");
        return; // Detener si falta alguna opción
    }

    // Guardar las opciones en productosOrdenados
    productosOrdenados.push(selectedOptions);

    updateQuantity(globalProductType, globalProductName, +1);

    // Cerrar el modal
    $('#optionsModal').modal('hide');

}

function generateCards(items, containerId, type) {
    const container = document.getElementById(containerId);
    
    // Verificar si el tipo es válido
    if (!selectedQuantities[type]) {
        console.error(`Tipo desconocido: ${type}`);
        return;
    }

    // Variable para las cards
    let cardsHtml = '';

    // Generar la card especial "Crea tu pizza" solo para pizzas
    /*if (type === 'pizzas') {
        const createPizzaCard = `
            <div class="col-sm-6 col-md-4">
                <div class="card pizza-card">
                    <img src="imgs/peperoni.jpg" class="card-img-top" alt="Crea tu pizza">
                    <div class="card-body">
                        <h5 class="card-title text-center">Crea tu pizza</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="quantity-control">
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="decreaseQuantity('${type}', 'Crea tu pizza')">-</button>
                                <input type="text" id="quantity-Crea-tu-pizza" class="quantity-input" value="0" readonly>
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="openCreatePizzaModal()">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cardsHtml += createPizzaCard;
    }*/

    // Generar las demás cards
    cardsHtml += items.map(item => {
        const selectedQuantity = selectedQuantities[type][item.name] || 0;

        const productsList = item.products ? item.products.map(product => `<li>${product.name}</li>`).join('') : '';

        return `
            <div class="col-sm-6 col-md-4">
                <div class="card pizza-card">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${item.name}</h5>
                        ${productsList ? `<ul class="list-unstyled">${productsList}</ul>` : ''}
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="pizza-price">$${item.price.toFixed(2)}</span>
                            <div class="quantity-control">
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="decreaseQuantity('${type}', '${item.name}')">-</button>
                                <input type="text" id="quantity-${item.name}" class="quantity-input" value="${selectedQuantity}" readonly>
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="increaseQuantity('${type}', '${item.name}')">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = cardsHtml;
}

function openCreatePizzaModal() {
    const ingredientesContainer = document.getElementById('ingredientesContainer');
    const orillaRellenaCheckbox = document.getElementById('orillaRellena');
    const quesoExtraCheckbox = document.getElementById('quesoExtra');

    // Rellenar los ingredientes en el modal
    ingredientesContainer.innerHTML = ingredientes.map(ingrediente => `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="${ingrediente}" id="${ingrediente}">
            <label class="form-check-label" for="${ingrediente}">
                ${ingrediente}
            </label>
        </div>
    `).join('');

    // Resetear los checkboxes
    orillaRellenaCheckbox.checked = false;
    quesoExtraCheckbox.checked = false;

    // Mostrar el modal
    $('#createPizzaModal').modal('show');
}

function guardarPizza() {
    const selectedIngredients = [];
    const ingredientesContainer = document.getElementById('ingredientesContainer');
    const checkboxes = ingredientesContainer.querySelectorAll('.form-check-input');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedIngredients.push(checkbox.value);
        }
    });

    const orillaRellena = document.getElementById('orillaRellena').checked;
    const quesoExtra = document.getElementById('quesoExtra').checked;

    // Verificar si hay ingredientes o si se seleccionaron opciones adicionales
    if (selectedIngredients.length === 0 && !orillaRellena && !quesoExtra) {
        $('#createPizzaModal').modal('hide');
        return; // No guarda la pizza ni cierra el modal si no se seleccionó nada
    }

    // Calcular el precio basado en los ingredientes
    let precioBase = calcularPrecioPizza(selectedIngredients);

    // Agregar costo extra por opciones adicionales
    if (orillaRellena) {
        precioBase += 20; // Costo adicional por orilla rellena
    }
    if (quesoExtra) {
        precioBase += 15; // Costo adicional por queso extra
    }

    const pizzaPersonalizada = {
        name: 'Pizza Personalizada',
        price: precioBase,
        options: {
            ingredientes: selectedIngredients,
            orillaRellena,
            quesoExtra
        },
    };

    // Guardar la pizza en `productosOrdenados`
    pizzasPersonalizadas.push(pizzaPersonalizada);

    // Cerrar el modal después de guardar
    $('#createPizzaModal').modal('hide');

    // Incrementar el valor del input de cantidad
    const quantityInput = document.getElementById('quantity-Crea-tu-pizza');
    quantityInput.value = parseInt(quantityInput.value || '0') + 1;
    // Actualizar la vista si es necesario
    reviewOrder(); // Si tienes esta función para revisar el pedido, se puede actualizar la vista
}

// Evento de cambio de pestaña
$('#pizzeriaTabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');

    switch ($(this).attr('id')) {
        case 'pizzas-tab':
            generateCards(pizzas, 'pizza-content', 'pizzas');
            break;
        case 'paquetes-tab':
            generateCards(paquetes, 'paquete-content', 'paquetes');
            break;
        case 'bonealitas-tab':
        generateCards(bonealitas, 'bonealitas-content', 'bonealitas');
        break;
        case 'complementos-tab':
            generateCards(complementos, 'complemento-content', 'complementos');
            break;
    }
});

let selectedPaymentMethod = "";
let selectedDeliveryMethod = "";

function reviewOrder() {
    const selectedPizzas = [];
    const quantityInputs = document.querySelectorAll('.quantity-input');

    quantityInputs.forEach(input => {
        const quantity = parseInt(input.value);
        if (quantity > 0) {
            const cardBody = input.closest('.card-body');
            // Verificar si existen 'card-title' y 'pizza-price' antes de usarlos
            const titleElement = cardBody.querySelector('.card-title');
            const priceElement = cardBody.querySelector('.pizza-price');

            if (titleElement && priceElement) {
                const pizza = titleElement.textContent;
                const price = parseFloat(priceElement.textContent.replace('$', ''));
                if (pizza == "Paquete 2") {
                    selectedPizzas.push({ name: "Paquete 2: Una Pizza de Peperoni, Un Espagueti Sencillo y un Refresco Grande 1.75L", quantity, price });
                } else if (pizza == "Paquete 4") {
                    selectedPizzas.push({ name: "Paquete 4: Dos Pizzas de Peperoni con Extra Queso", quantity, price });
                } else {
                    selectedPizzas.push({ name: pizza, quantity, price });
                }
            }
        }

    });

    const orderSummary = document.getElementById('orderSummary');
    const totalPriceElement = document.getElementById('totalPrice');
    const modalBody = document.querySelector('#orderModal .modal-body');

    orderSummary.innerHTML = '';
    totalPriceElement.textContent = '';

    let totalPrice = 0;

     // Eliminar mensaje previo de selección vacía
     const noSelectionMessage = modalBody.querySelector('.no-selection-message');
     if (noSelectionMessage) {
         noSelectionMessage.remove();
     }
 
     if (!Array.isArray(productosOrdenados)) {
         console.error('productosOrdenados no está definido o no es un array.');
         return;
     }

    // Filtrar productos en selectedPizzas para excluir aquellos que tienen opciones en productosOrdenados
    const filteredPizzas = selectedPizzas.filter(pizza => {
        return !productosOrdenados.some(product => product.name === pizza.name);
    });

    // Mostrar pizzas seleccionadas sin opciones
    filteredPizzas.forEach(pizza => {
        const pizzaTotalPrice = pizza.quantity * pizza.price;
        totalPrice += pizzaTotalPrice;
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = `${pizza.quantity} ${pizza.name}`;
        const span = document.createElement('span');
        span.className = 'badge badge-primary badge-pill';
        span.textContent = `$${pizzaTotalPrice.toFixed(2)}`;
        li.appendChild(span);
        orderSummary.appendChild(li);
    });

    // Mostrar productos ordenados con opciones
    productosOrdenados.forEach(product => {
        console.log(product);
        const { name, price, options, quantity } = product;

        const optionDetails = Object.entries(options || {}) // Manejar caso de opciones no definidas
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');

        // Usar 1 como cantidad predeterminada si no está definida
        const productQuantity = quantity !== undefined ? quantity : 1;

        // Obtener opciones del producto
        const optionEntries = Object.entries(options || {});
        const optionObject = Object.fromEntries(optionEntries);

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        if (optionObject.sauce && optionObject.type) {
            // Crear un elemento para el producto
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name} ${optionObject.type} Con salsa ${optionObject.sauce}`;
        }

        if (optionObject.sauce && Object.keys(optionObject).length === 1) {
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name} de salsa ${optionObject.sauce}`;
        }

        // Para los paquetes
        if (optionObject['Tipo'] && optionObject['Boneless o Alitas'] && optionObject['Aderezo A Elegir'] && Object.keys(optionObject).length === 4) {
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: Pizza de Peperoni, ${optionObject['Boneless o Alitas']} ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']} con un ${optionObject['Refresco Grande 1.75L']}`;
        } else if (optionObject['Boneless o Alitas'] === undefined && optionObject['Aderezo A Elegir'] && optionObject['Tipo']) {
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: Pizza de Boneless ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']}`;
        }

        const span = document.createElement('span');
        span.className = 'badge badge-primary badge-pill';
        span.textContent = `$${price.toFixed(2)}`;
        li.appendChild(span);
        orderSummary.appendChild(li);

        // Sumar el precio total
        totalPrice += price;
    });

    // Mostrar pizzas personalizadas
    pizzasPersonalizadas.forEach(pizza => {
        const { name, price, options } = pizza;
        const ingredientDetails = options.ingredientes.join(', ');
        const orillaRellenaText = options.orillaRellena ? 'con orilla rellena' : 'sin orilla rellena';
        const quesoExtraText = options.quesoExtra ? 'con queso extra' : 'sin queso extra';

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = `${name} (${ingredientDetails}), ${orillaRellenaText}, ${quesoExtraText}`;
        
        const span = document.createElement('span');
        span.className = 'badge badge-primary badge-pill';
        span.textContent = `$${price.toFixed(2)}`;
        li.appendChild(span);
        orderSummary.appendChild(li);

        totalPrice += price;
    });


    totalPriceElement.textContent = `${totalPrice.toFixed(2)}`;

    populatePaymentAndDeliveryOptions();

    $('#orderModal').modal('show');
}

function populatePaymentAndDeliveryOptions() {
    const paymentMethodSelect = document.getElementById('paymentMethod');
    paymentMethodSelect.innerHTML = '';
    
    // Default option for payment method
    const defaultPaymentOption = new Option("Selecciona un método de pago", "", true, true);
    defaultPaymentOption.disabled = true;
    paymentMethodSelect.appendChild(defaultPaymentOption);

    // Populate payment methods
    metodosDePago.forEach(metodo => {
        const option = new Option(metodo, metodo);
        if (metodo === selectedPaymentMethod) {
            option.selected = true;
        }
        paymentMethodSelect.appendChild(option);
    });

    const deliveryAddressSelect = document.getElementById('deliveryAddress');
    deliveryAddressSelect.innerHTML = '';
    
    // Default option for delivery address
    const defaultAddressOption = new Option("Selecciona un método de entrega", "", true, true);
    defaultAddressOption.disabled = true;
    deliveryAddressSelect.appendChild(defaultAddressOption);

    // Populate delivery methods
    metodosEntrega.forEach(({ metodosEntrega }) => {
        const option = new Option(metodosEntrega, metodosEntrega);
        if (metodosEntrega === selectedDeliveryMethod) {
            option.selected = true;
        }
        deliveryAddressSelect.appendChild(option);
    });

    // Show or hide delivery notice based on selected delivery method
    handleDeliveryChange();
}

// Event handler for payment method change
function handlePaymentChange() {
    const paymentMethodSelect = document.getElementById('paymentMethod');
    selectedPaymentMethod = paymentMethodSelect.value;
}

// Event handler for delivery method change
function handleDeliveryChange() {
    const deliveryAddressSelect = document.getElementById('deliveryAddress');
    selectedDeliveryMethod = deliveryAddressSelect.value;

    const deliveryNotice = document.getElementById('deliveryNotice');
    if (selectedDeliveryMethod === "Entrega a Domicilio") {
        deliveryNotice.style.display = 'block';
    } else {
        deliveryNotice.style.display = 'none';
    }
}

// Llamar populatePaymentAndDeliveryOptions al abrir el modal
$('#orderModal').on('show.bs.modal', populatePaymentAndDeliveryOptions);




//todavia noop
function calcularPrecioPizza(ingredientes) {
    let precio = 0;

    if (ingredientes.length === 1 && ingredientes.includes('Pepperoni')) {
        precio = 99;
    } else if (ingredientes.length === 1) {
        precio = 109; // Precio para 1 que no sea solo peperoni 
    } else if (ingredientes.length === 2) {
        precio = 129; // Precio para 2 ingredientes
    } else if (ingredientes.length === 3) {
        precio = 149; // Precio para 3 ingredientes
    } else if (ingredientes.length > 3) {
        precio = 169; // Precio para más de 3 ingredientes
    }

    return precio;
}

document.getElementById('deliveryAddress').addEventListener('change', updateTotalPrice);

function updateTotalPrice() {
    // Obtener el precio base de los productos seleccionados
    const selectedPizzas = [];
    const quantityInputs = document.querySelectorAll('.quantity-input');

    quantityInputs.forEach(input => {
        const quantity = parseInt(input.value);
        if (quantity > 0) { 
            const cardBody = input.closest('.card-body');
            const pizza = cardBody.querySelector('.card-title').textContent;
            if(pizza == "Crea tu pizza"){
                const priceElement = cardBody.querySelector('.pizza-price');
            }
            const priceElement = cardBody.querySelector('.pizza-price');
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            selectedPizzas.push({ name: pizza, quantity, price });
        }
    });

    const filteredPizzas = selectedPizzas.filter(pizza => {
        return !productosOrdenados.some(product => product.name === pizza.name);
    });

    let totalPrice = filteredPizzas.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
    totalPrice += productosOrdenados.reduce((acc, product) => acc + product.price, 0);

    console.log(totalPrice)
    

    // Actualizar el total en el modal
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}



function sendOrder() {
    const selectedPizzas = [];
    const quantityInputs = document.querySelectorAll('.quantity-input');


    // Recolectar pizzas seleccionadas sin opciones
    quantityInputs.forEach(input => {
        const quantity = parseInt(input.value);
        if (quantity > 0) { 
            const cardBody = input.closest('.card-body');
            const pizza = cardBody.querySelector('.card-title').textContent;
            const priceElement = cardBody.querySelector('.pizza-price');
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            selectedPizzas.push({ name: pizza, quantity, price });
        }
    });

    const filteredPizzas = selectedPizzas.filter(pizza => {
        return !productosOrdenados.some(product => product.name === pizza.name);
    });


    let orderMessage = 'Hola, quiero ordenar:\n';

    // Agregar productos seleccionados sin opciones
    filteredPizzas.forEach(pizza => {
        if (pizza.name === "Paquete 2") {
            orderMessage += `${pizza.quantity} Paquete 2: Una Pizza de Peperoni, Un Espagueti Sencillo y un Refresco Grande 1.75L\n`;
        } else if (pizza.name === "Paquete 4") {
            orderMessage += `${pizza.quantity} Paquete 4: Dos Pizzas de Peperoni con Extra Queso\n`;
        } else {
            orderMessage += `${pizza.quantity} ${pizza.name}\n`;
        }
    });

    // Agregar productos con opciones
    productosOrdenados.forEach(product => {
        const { name, price, options, quantity } = product;
        const optionObject = Object.fromEntries(Object.entries(options || {}));
        const productQuantity = quantity !== undefined ? quantity : 1;

        let optionDetails = '';
        if (optionObject.sauce && optionObject.type) {
            optionDetails = `${optionObject.type} con salsa ${optionObject.sauce}  y un ${optionObject['Refresco Grande 1.75L']}`;
        } else if (optionObject.sauce && Object.keys(optionObject).length === 2) {
            optionDetails = `con salsa ${optionObject.sauce}`;
        } else if (optionObject['Tipo'] && optionObject['Boneless o Alitas'] && optionObject['Aderezo A Elegir'] && Object.keys(optionObject).length === 4) {
            optionDetails = `Pizza de Peperoni, ${optionObject['Boneless o Alitas']} ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']} y un ${optionObject['Refresco Grande 1.75L']}`;
        } else if (optionObject['Boneless o Alitas'] === undefined && optionObject['Aderezo A Elegir'] && optionObject['Tipo']) {
            optionDetails = `Boneless ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']} y un ${optionObject['Refresco Grande 1.75L']}`;
        }

        if (optionDetails) {
            orderMessage += `${productQuantity} ${name}: ${optionDetails}\n`;
        }
    });

    // Obtener el precio total calculado
    let totalPrice = parseFloat(document.getElementById('totalPrice').textContent);

    // Obtener método de pago y dirección, si existen
    const paymentMethod = document.getElementById('paymentMethod')?.value;
    const deliveryAddress = document.getElementById('deliveryAddress')?.value;



     // Validar si los campos de opciones están seleccionados
     if (!paymentMethod) {
        alert("Por favor, selecciona un método de pago.");
        return; // Evitar que se envíe el pedido
    }

    if (!deliveryAddress) {
        alert("Por favor, selecciona un método de entrega.");
        return; // Evitar que se envíe el pedido
    }

    if (filteredPizzas.length == 0 && selectedPizzas.length == 0) {
        alert("Por favor, selecciona al menos un Producto.");
        return; // Evitar que se envíe el pedido
    }

    // Agregar método de pago y dirección al mensaje
    orderMessage += `\nMétodo de Pago: ${paymentMethod || 'No especificado'}`;
    orderMessage += `\nMétodo de Entrega: ${deliveryAddress || 'No especificada'}`;


    // Variable para almacenar el texto del total ajustado
let totalText;

    // Verificar si la opción de entrega es "Entrega a Domicilio"
    if (deliveryAddress === "Entrega a Domicilio") {
        orderMessage += `\nTotal: $${totalPrice.toFixed(2)} + Entrega a domicilio`;

        totalText = ``;
    } else {
        // Usar solo el total sin costos adicionales
        orderMessage += `\nTotal: $${totalPrice.toFixed(2)}`;
    }

    // Agregar el precio total al mensaje

    const whatsappNumber = '8142661510'; // Reemplaza con tu número de WhatsApp
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
    
    window.open(url, '_blank');
}

// Inicialización de la pestaña activa
document.addEventListener('DOMContentLoaded', () => {
    generateCards(pizzas, 'pizza-content', 'pizzas');
});