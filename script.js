// Datos de Pizzas, Paquetes y Complementos

let customPizzaQuantityValue = 0; // Variable global para la cantidad

const ingredientes = [
    'Pepperoni',
    'Salami',
    'Tocino',
    'Chorizo',
    'Salchicha Italiana',
    'Jamón',
    'Piña',
    'Champiñones',
    'Cebolla',
    'Pimiento Morron',
    'Jalapeños',
    'Aceitunas'
];

const opcionesAdicionales = {
    orillaRellena: false, // Orilla rellena de queso
    quesoExtra: false     // Queso extra
};

const metodosDePago = ['Efectivo', 'Transferencia Bancaria'];

const metodosEntrega = [ // ALGO PARA PREGUNTAR
    { metodosEntrega: 'Paso por el Pedido', precioEnvio: 0},
    { metodosEntrega: 'Entrega a Domicilio', precioEnvio: 0}
];

const pizzas = [
    { id: "pizza-peperoni", type: "pizza", id: "peperoni", name: "Pizza de Pepperoni", img: "imgs/peperoni.jpg", price: 99 },
    { id: "pizza-queso", type: "pizza", id: "queso", name: "Pizza de Queso", img: "imgs/pizzaQueso.jpg", price: 99 },
    { id: "pizza-suprema", type: "pizza", id: "suprema", name: "Pizza Suprema", img: "imgs/suprema.jpg", price: 185 },
    { id: "pizza-hawaiana", type: "pizza", id: "hawaiana", name: "Pizza Hawaiana", img: "imgs/hawaiana.jpg", price: 155 },
    { id: "pizza-trompo", type: "pizza", id: "trompo", name: "Pizza De Trompo", img: "imgs/pizzaTrompo.jpg", price: 155 },
    { id: "pizza-3carnes", type: "pizza", id: "3carnes", name: "Pizza 3 Carnes", img: "imgs/3carnes.jpg", price: 165 },
    { id: "pizza-alpastor", type: "pizza", id: "alpastor", name: "Pizza Al Pastor", img: "imgs/pizzaAlPastor.jpg", price: 165 },
    { id: "pizza-boneless", type: "pizza", id: "pizzaBoneless", name: "Pizza de Boneless con Aderezo", img: "imgs/pizzaBoneless.jpg", price: 185 },
    { id: "pizza-mexicana", type: "pizza", id: "mexicana", name: "Pizza A la Mexicana", img: "imgs/mexicana.jpg", price: 175 },
    { id: "pizza-cheetos", type: "pizza", id: "cheetos", name: "Pizza de Cheetos Flamin Hot", img: "imgs/cheetos.jpg", price: 175 },
    { id: "pizza-vegetariana", type: "pizza", id: "vegetariana", name: "Pizza Vegetariana", img: "imgs/vegetariana.jpg", price: 175 }
];

const paquetes = [
    { 
        type: "paquete", 
        name: "Paquete 1",
        id: "paquete-1", 
        img: "imgs/paquete1.jpg", 
        price: 265, 
        products: [
            { type: "pizza", name: "Pizza 1 Ingrediente", options: { ingredients: ingredientes } },
            { type: "bonealitas", name: "Boneless o Alitas", options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] }},
            { type: "bebida", name: "Refresco Grande 1.75L" }
        ] 
    },
    { 
        type: "paquete", 
        name: "Paquete 2",
        id: "paquete-2", 
        img: "imgs/paquete2.jpg", 
        price: 199, 
        products: [
            { type: "pizza", name: "Pizza 1 Ingrediente", options: { ingredients: ingredientes } },
            { type: "complementos", name: "Espagueti Sencillo" },
            { type: "bebida", name: "Refresco Grande 1.75L" }
        ] 
    },
    { 
        type: "paquete", 
        name: "Paquete 3",
        id: "paquete-3", 
        img: "imgs/paquete3.jpg", 
        price: 219, 
        products: [
            { type: "pizza", name: "Pizza De Boneless (Bañados o Naturales)", options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } },
            { type: "complemento", name: "Aderezo Ranch", sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"] },
            { type: "bebida", name: "Refresco Grande 1.75L" }

        ] 
    },
    { 
        type: "paquete", 
        name: "Paquete 4", 
        id: "paquete-4",
        img: "imgs/paquete4.jpg", 
        price: 309, 
        products: [
            { type: "pizza", name: "Pizza 1 Ingrediente", options: { ingredients: ingredientes } },
            { type: "complementos", name: "Espagueti Sencillo" },
            { type: "boneless", name: "Boneless", options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] }},
            { type: "bebida", name: "Refresco Grande 1.75L" }
        ] 
    }
];

const bonealitas = [
    { id: "bonealitas-boneless", type: "bonealitas", name: "Boneless", img: "imgs/boneless.jpg", price: 129, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } },
    { id: "bonealitas-alitas", type: "bonealitas", name: "Alitas", img: "imgs/alitas.jpg", price: 129, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } },
    { id: "bonealitas-1kg-boneless", type: "bonealitas", name: "1Kg de Boneless", img: "imgs/kiloBoneless.jpg", price: 279, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } },
    { id: "bonealitas-1kg-alitas", type: "bonealitas", name: "1Kg de Alitas", img: "imgs/alitas.jpg", price: 279, options: { sauces: ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"], type: ["Bañados", "Naturales"] } }
];

const complementos = [
    { id: "complemento-papas-sencillas", type: "complemento", name: "Papas Sencillas", img: "imgs/papassencillas.jpg", price: 49 },
    { id: "complemento-papas-preparadas", type: "complemento", name: "Papas Preparadas", img: "imgs/papaspreparadas.jpg", price: 69 },
    { id: "complemento-espagueti-sencillo", type: "complemento", name: "Espagueti Sencillo", img: "imgs/espagueti.jpg", price: 59 },
    { id: "complemento-espagueti-carne", type: "complemento", name: "Espagueti Con Carne", img: "imgs/espagueticarne.jpg", price: 79 },
    { id: "complemento-aderezo", type: "complemento", name: "Aderezo", img: "imgs/aderezo.jpg", price: 15, options: { sauces: ["Ranch", "Jalapeño", "Chipotle", "BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"] } },
    { id: "complemento-aros-cebolla", type: "complemento", name: "6 Aros de Cebolla", img: "imgs/arosdecebolla.jpg", price: 69 },
    { id: "complemento-dedos-queso", type: "complemento", name: "5 Dedos de Queso", img: "imgs/dedosdequeso.jpg", price: 89 },
    { id: "complemento-jalapenos-poppers", type: "complemento", name: "5 Jalapeños Poppers", img: "imgs/jalapeñospoppers.jpg", price: 89 },
    { id: "complemento-refresco", type: "complemento", name: "Refresco Grande 1.75L", img: "imgs/cocacola.jpg", price: 59 }
];

let currentProduct = null;

// Variables para almacenar las cantidades seleccionadas
let selectedQuantities = {
    pizza: {},
    paquete: {},
    complemento: {},
    bonealitas: {}
};

// Variables globales
let globalProductName = '';
let globalProductType = '';

let selectedPaymentMethod = "";
let selectedDeliveryMethod = "";

let pizzasPersonalizadas = []; // Arreglo donde se almacenan las pizzas

let productosOrdenados = [];

function generateCards(items, containerId, type) {

    const container = document.getElementById(containerId);

    if (!selectedQuantities[type]) {
        console.error(`Tipo desconocido: ${type}`);
        return;
    }

    let cardsHtml = '';

    // Card especial para crear tu pizza
    if (type === 'pizza') {
        const createPizzaQuantity = customPizzaQuantityValue || 0;

        const createPizzaCard = `
            <div class="col-sm-6 col-md-4">
                <div class="card pizza-card">
                    <img src="imgs/bmo.png" class="card-img-top" alt="Crea tu pizza">
                    <div class="card-body">
                        <h5 class="card-title text-center">Crea tu pizza</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="pizza-price">Personalizar</span>
                            <div class="quantity-control">
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="decreaseCustomPizza()">-</button>
                                <input type="text" id="quantity-customPizza" class="quantity-input" value="${createPizzaQuantity}" readonly>
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="increaseCustomPizza()">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        cardsHtml += createPizzaCard;
    }

    // Generar las demás cards
    cardsHtml += items.map(item => {
        const selectedQuantity = selectedQuantities[type][item.id] || 0;
 
        // Condición para agregar la descripción
        const description = (item.type === "paquete") 
            ? `<p class='card-text'>
                Contiene:
                <ul>
                    ${item.products.map(product => `<li>${product.name}</li>`).join('')}
                </ul>
            </p>` 
            : '';

        return `
            <div class="col-sm-6 col-md-4">
                <div class="card pizza-card">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${item.name}</h5>
                        ${description} <!-- Se agrega la descripción con los productos si es un paquete -->
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="pizza-price">$${item.price.toFixed(2)}</span>
                            <div class="quantity-control">
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="decreaseQuantity('${type}', '${item.id}')">-</button>
                                <input type="text" id="quantity-${item.id}" class="quantity-input" value="${selectedQuantity}" readonly>
                                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="increaseQuantity('${type}', '${item.id}')">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = cardsHtml;

    // Restaurar cantidades en los inputs después de generar los cards
    //restoreInputQuantities(type);
}

    // Función para sincronizar las cantidades restauradas con los inputs
    /*function restoreInputQuantities(type) {
        Object.keys(selectedQuantities[type]).forEach(itemName => {
            const input = document.querySelector(`#quantity-${itemName}`);
            if (input) {
                input.value = selectedQuantities[type][itemName];
            }
        });
    }*/

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
          

            if (productosOrdenados[i].id === name) {
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
    //const index = productosOrdenados.findIndex(product => product.type === type && product.id === name); //ERROR? SI DA ERROR ALGO PUEDE QUE SEA ESTA PARTE



   /* if (index !== -1) {
        // Si el producto tiene opciones, reducir su cantidad en el array productosOrdenados
        const product = productosOrdenados[index];
        if (product.quantity && product.quantity > 1) {
            product.quantity--; // Reducir la cantidad
        } else {
            // Eliminar la última instancia del producto con opciones
            productosOrdenados.splice(index, 1);
        }
    }*/

}

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

function createFormGroup(labelText, inputElement) {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    const label = document.createElement('label');
    label.textContent = labelText;
    formGroup.appendChild(label);
    formGroup.appendChild(inputElement);
    return formGroup;
}

function increaseQuantity(type, name) { //name es el id para que no refactorice todo 

    // Encuentra el producto en la lista de productos disponibles
    const product = [...pizzas, ...bonealitas, ...complementos, ...paquetes].find(p => p.id === name);
    if (!product) return;

    // Asignar el producto actual
    currentProduct = {
        type: product.type,
        name: product.name,
        id: product.id
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

        case "pizza":

        if (product.name === "Pizza de Boneless con Aderezo") {

            // Crear select para elegir si los boneless son bañados o naturales
            const bonelessType = ["Bañados", "Naturales"];
            const typeSelect = createSelectElement(bonelessType, 'bonelessType', 'Tipo de Boneless:');
            optionsForm.appendChild(typeSelect);
            // Crear select para elegir la salsa
            const bonelessSauces = ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"];
            const sauceSelect = createSelectElement(bonelessSauces, 'bonelessSauce', 'Salsa para los Boneless:');
            optionsForm.appendChild(sauceSelect);

            

            hasOptions = true;
        }

        break;

        case "bonealitas":
            if (product.options.type) {
                const typeSelect = createSelectElement(product.options.type, 'type', 'Tipo:');
                optionsForm.appendChild(typeSelect);
                hasOptions = true;
            }
            if (product.options) {
                if (product.options.sauces) {
                    const sauceSelect = createSelectElement(product.options.sauces, 'sauces', 'Salsa:');
                    optionsForm.appendChild(sauceSelect);
                    hasOptions = true;
                }
            }
            break;

        case "complemento": // aquiiii poner los de los aderezos 
            if (product.options && product.options.sauces) {
                const sauceSelect = createSelectElement(product.options.sauces, 'sauces', 'Selecciona un aderezo:');
                optionsForm.appendChild(sauceSelect);
                hasOptions = true;
            }
            break;

        case "paquete":

        if (product.name === "Paquete 4") {
            // Crear select para elegir el ingrediente de la pizza
            const ingredientSelect = createSelectElement(ingredientes, 'pizzaIngredient', 'Ingrediente de la Pizza:');
            optionsForm.appendChild(ingredientSelect);


             // Crear select para elegir si los boneless son bañados o naturales
             const bonelessType = ["Bañados", "Naturales"];
             const typeSelect = createSelectElement(bonelessType, 'bonelessType', 'Tipo de Boneless:');
             optionsForm.appendChild(typeSelect);


            // Crear select para elegir la salsa
            const bonelessSauces = ["BBQ", "Buffalo", "Mango Habanero", "Parmesano", "Lemon Pepper"];
            const sauceSelect = createSelectElement(bonelessSauces, 'bonelessSauce', 'Salsa para los Boneless:');
            optionsForm.appendChild(sauceSelect);

           

            hasOptions = true;
            break;
        }

            product.products.forEach(productOption => {
            
                if (productOption.name === "Pizza 1 Ingrediente") {
                    const ingredientSelect = createSelectElement(ingredientes, 'pizzaIngredient', 'Ingrediente de la Pizza:');
                    optionsForm.appendChild(ingredientSelect); 
                
                    hasOptions = true;

                }
                
                if (productOption.name === "Boneless o Alitas") {
                    const radioOptions = [
                        { value: 'Boneless', text: 'Boneless', id: 'bonelessOption' },
                        { value: 'Alitas', text: 'Alitas', id: 'alitasOption' }
                    ];
                    const radioDiv = createRadioElement(radioOptions, 'selection', 'Selecciona:');
                    optionsForm.appendChild(radioDiv);
                    hasOptions = true;
                    if (productOption.options) {
                        
                        if (productOption.options.type) {
                            const typeSelect = createSelectElement(productOption.options.type, 'type', 'Tipo:');
                            optionsForm.appendChild(typeSelect);
                            hasOptions = true;
                        }
                        if (productOption.options.sauces) {
                            const sauceSelect = createSelectElement(productOption.options.sauces, 'sauces', 'Salsa:');
                            optionsForm.appendChild(sauceSelect);
                            hasOptions = true;
                        }   
                    }
                }
                if (productOption.name === "Aderezo A Elegir" && productOption.sauces) {
                    const sauceSelect = createSelectElement(productOption.sauces, 'sauces', 'Salsa:');
                    const typeOptions = ['Bañados', 'Naturales'];
                    const typeSelect = createSelectElement(typeOptions, 'type', 'Tipo:');
                    optionsForm.appendChild(typeSelect); 
                    optionsForm.appendChild(sauceSelect);
                   
                    hasOptions = true;
                }
                if (productOption.name === "Pizza De Boneless (Bañados o Naturales)") {

                    const sauceSelect = createSelectElement(productOption.options.sauces, 'sauces', 'Salsa:');
                    const typeOptions = ['Bañados', 'Naturales'];
                    const typeSelect = createSelectElement(typeOptions, 'type', 'Tipo:');
                    optionsForm.appendChild(typeSelect); 
                    optionsForm.appendChild(sauceSelect);
                   
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

// Función para guardar opciones seleccionadas
function saveOptions() {

    // Verificar que se haya seleccionado un producto actual
    if (!currentProduct) {
        console.error('No se seleccionó un producto.');
        return;
    }

    // Obtener el tipo y nombre del producto actual
    const { type, name , id} = currentProduct;

    // Encontrar el producto en la lista de productos disponibles
    const product = [...pizzas, ...bonealitas, ...complementos, ...paquetes].find(p => p.id === id);
    if (!product) {
        console.error('Product not found.');
        return;
    }

    // Crear un objeto para guardar las opciones seleccionadas
    const selectedOptions = {
        name: product.name,
        img: product.img,
        price: product.price,
        id: product.id,
        options: {}
    };

     // Validación y obtención de opciones
     let allOptionsSelected = true; // Variable para validar si todas las opciones están seleccionadas

     if (product.type === "pizza") {
        
            const bonelessSauceSelect = document.querySelector('select[name="bonelessSauce"]');
            const bonelessTypeSelect = document.querySelector('select[name="bonelessType"]');
        
            selectedOptions.products = [
                { type: "boneless", name: "Pizza de Boneless", options: {} },
            ];
        
            // Validar y guardar la salsa para los boneless
            if (bonelessSauceSelect && bonelessSauceSelect.value) {
                selectedOptions.products[0].options["Salsa"] = bonelessSauceSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta la salsa
            }
        
            // Validar y guardar el tipo de boneless
            if (bonelessTypeSelect && bonelessTypeSelect.value) {
                selectedOptions.products[0].options["Tipo"] = bonelessTypeSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta el tipo de boneless
            }
        
    }
        
    
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
        const bonelessOrWings = document.querySelector('input[name="selection"]:checked');
        const sauceSelect = document.querySelector('select[name="sauces"]');
        const typeSelect = document.querySelector('select[name="type"]');
        const pizzaIngredientSelect = document.querySelector('select[name="pizzaIngredient"]');

        // Verificación de Boneless o Alitas
        if(product.name == "Paquete 1"){
         
             // Validar y guardar el ingrediente de la pizza
             if (pizzaIngredientSelect && pizzaIngredientSelect.value) {
                selectedOptions.options["Pizza 1 Ingrediente"] = pizzaIngredientSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta el ingrediente de la pizza
            }
        

            if (bonelessOrWings && bonelessOrWings.value) {
                selectedOptions.options["Boneless o Alitas"] = bonelessOrWings.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta la selección de Boneless o Alitas
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

        }

        // Verificación de Boneless o Alitas
        if(product.name == "Paquete 2"){
         
            // Validar y guardar el ingrediente de la pizza
            if (pizzaIngredientSelect && pizzaIngredientSelect.value) {
               selectedOptions.options["Pizza 1 Ingrediente"] = pizzaIngredientSelect.value;
           } else {
               allOptionsSelected = false; // Marcar como incompleto si falta el ingrediente de la pizza
           }
       
       }

        else if (product.name === "Paquete 4") {
            // Obtener los selectores de las opciones del cliente
            const bonelessSauceSelect = document.querySelector('select[name="bonelessSauce"]');
            const bonelessTypeSelect = document.querySelector('select[name="bonelessType"]');
        
            // Inicializar productos específicos del paquete 4
            selectedOptions.products = [
                { type: "pizza", name: "Pizza 1 Ingrediente", options: {} },
                { type: "complementos", name: "Espagueti Sencillo" },
                { type: "boneless", name: "Boneless", options: {} },
                { type: "bebida", name: "Refresco Grande 1.75L" }
            ];
        
            // Validar y guardar el ingrediente de la pizza
            if (pizzaIngredientSelect && pizzaIngredientSelect.value) {
                selectedOptions.products[0].options["Ingrediente"] = pizzaIngredientSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta el ingrediente de la pizza
            }
        
            // Validar y guardar la salsa para los boneless
            if (bonelessSauceSelect && bonelessSauceSelect.value) {
                selectedOptions.products[2].options["Salsa"] = bonelessSauceSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta la salsa
            }
        
            // Validar y guardar el tipo de boneless
            if (bonelessTypeSelect && bonelessTypeSelect.value) {
                selectedOptions.products[2].options["Tipo"] = bonelessTypeSelect.value;
            } else {
                allOptionsSelected = false; // Marcar como incompleto si falta el tipo de boneless
            }
        
            // Asignar el precio e imagen del paquete
            selectedOptions.price = product.price;
            selectedOptions.img = product.img;
        
        } else {
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
    }

    // Verificar si todas las opciones requeridas están seleccionadas
    if (!allOptionsSelected) {
        alert("Por favor selecciona todas las opciones antes de agregar el producto.");
        return; // Detener si falta alguna opción
    }


    // Guardar las opciones en productosOrdenados
    productosOrdenados.push(selectedOptions);
    
    updateQuantity(globalProductType, id, +1);

    // Cerrar el modal
    $('#optionsModal').modal('hide');

}

function validateForm() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    const deliveryAddress = document.getElementById("deliveryAddress").value;

    // Obtener botón de confirmación
    const confirmButton = document.getElementById("confirmButton");

    // Habilitar botón solo si ambos campos están completos
    if (paymentMethod && deliveryAddress) {
        confirmButton.disabled = false;
    } else {
        confirmButton.disabled = true;
    }
}

// Función para aumentar la cantidad de pizzas personalizadas
function increaseCustomPizza() {
    openCreatePizzaModal(); // Abre el modal
}

function decreaseCustomPizza() {
    if (customPizzaQuantityValue > 0) {
        const confirmDelete = confirm("¿Estás seguro de que quieres borrar la última pizza personalizada?");
        if (confirmDelete) {
            pizzasPersonalizadas.pop(); // Elimina la última pizza agregada
            customPizzaQuantityValue--; // Reduce la cantidad
            const customPizzaQuantity = document.getElementById('quantity-customPizza');
            customPizzaQuantity.value = customPizzaQuantityValue; // Actualiza el valor en la vista

            console.log("Última pizza personalizada eliminada.");
        }
    } else {
        alert("No tienes pizzas personalizadas para borrar.");
    }
}

function openCreatePizzaModal() {
    const ingredientesContainer = document.getElementById('ingredientesContainer');
    
    // Generar dinámicamente los checkboxes
    ingredientesContainer.innerHTML = ingredientes.map(ingrediente => `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="${ingrediente}" id="ingrediente-${ingrediente}">
            <label class="form-check-label" for="ingrediente-${ingrediente}">
                ${ingrediente}
            </label>
        </div>
    `).join('');    

    // Limpiar la vista previa y precio al abrir
    document.getElementById('previewPizza').value = 'Aquí se mostrarán tus selecciones...';
    document.getElementById('precioFinal').textContent = '$0.00';

    // Asignar eventos a los checkboxes dinámicos
    const checkboxes = document.querySelectorAll('#ingredientesContainer .form-check-input');
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', actualizarPrecioDinamico));

    // Eventos para opciones adicionales
    document.getElementById('orillaRellena').addEventListener('change', actualizarPrecioDinamico);
    document.getElementById('quesoExtra').addEventListener('change', actualizarPrecioDinamico);

    // Mostrar el modal
    $('#createPizzaModal').modal('show');
}

// Función para actualizar la vista previa
function updatePreview() {
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredientesContainer .form-check-input:checked'))
        .map(input => input.value);
    const orillaRellena = document.getElementById('orillaRellena').checked ? 'Orilla Rellena' : null;
    const quesoExtra = document.getElementById('quesoExtra').checked ? 'Queso Extra' : null;

    const previewText = [...selectedIngredients, orillaRellena, quesoExtra]
        .filter(Boolean)
        .join(', ');

    document.getElementById('previewPizza').value = previewText || 'No has seleccionado nada.';
}

function calcularPrecioPizza(ingredientesSeleccionados) {
    let precioBase = 0;

    if (ingredientesSeleccionados.length === 0) {
        precioBase = 0; // Sin ingredientes, sin costo
    } else if (ingredientesSeleccionados.length === 1) {
        if (ingredientesSeleccionados.includes('Pepperoni') || ingredientesSeleccionados.includes('Queso') ) {
            precioBase = 99; // Si solo tiene Pepperoni
        } else {
            precioBase = 129; // Un ingrediente distinto a Pepperoni
        }
    } else if (ingredientesSeleccionados.length === 2) {
        precioBase = 155; // Precio para 2 ingredientes
    } else if (ingredientesSeleccionados.length === 3) {
        precioBase = 165; // Precio para 3 ingredientes
    } else if (ingredientesSeleccionados.length >= 4) {
        const ingredientesExtra = ingredientesSeleccionados.length - 3;
        precioBase = 165 + (ingredientesExtra * 17); // Precio base + 17 por cada extra
    }

    return precioBase;
}

function guardarPizza() {
    const selectedIngredients = [];
    const ingredientesContainer = document.getElementById('ingredientesContainer');
    const checkboxes = ingredientesContainer.querySelectorAll('.form-check-input');

    // Obtener ingredientes seleccionados
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedIngredients.push(checkbox.value);

        }
    });

    // Opciones adicionales
    const orillaRellena = document.getElementById('orillaRellena').checked;
    const quesoExtra = document.getElementById('quesoExtra').checked;

    // Validar que al menos un ingrediente o una opción adicional esté seleccionada
    if (selectedIngredients.length === 0 && !orillaRellena && !quesoExtra) {
        alert("Debes seleccionar al menos un ingrediente o una opción adicional para guardar tu pizza.");
        return; // Sale de la función y no guarda nada
    }

     // Validar que al menos un ingrediente o una opción adicional esté seleccionada
     if (selectedIngredients.length === 0) {
        alert("Debes seleccionar al menos un ingredientes.");
        return; // Sale de la función
    }

    // Calcular el precio
    let precioBase = calcularPrecioPizza(selectedIngredients);

    // Agregar costo extra por opciones adicionales
    if (orillaRellena) {
        if (precioBase == 99){
            precioBase += 66; // Orilla rellena
        } else if (precioBase == 129){
            precioBase += 36; // Orilla rellena
        } else {
            precioBase += 45; // Orilla rellena
        }
    }

    if (quesoExtra) {
        precioBase += 45; // Queso extra
    }

    // Crear objeto de pizza personalizada
    const pizzaPersonalizada = {
        name: 'Pizza Personalizada',
        price: precioBase,
        options: {
            ingredientes: selectedIngredients,
            orillaRellena,
            quesoExtra
        },
    };

    // Agregar pizza al arreglo
    pizzasPersonalizadas.push(pizzaPersonalizada);

    // Incrementar cantidad y actualizar el valor en la vista
    customPizzaQuantityValue++;
    const customPizzaQuantity = document.getElementById('quantity-customPizza');
    customPizzaQuantity.value = customPizzaQuantityValue;

    // Mostrar mensaje de éxito
    console.log(`Pizza guardada: $${precioBase} MXN`);

    // Cerrar el modal
    $('#createPizzaModal').modal('hide');
}

// Función para actualizar el precio en tiempo real
function actualizarPrecioDinamico() {
    // Obtener ingredientes seleccionados
    const selectedIngredients = Array.from(document.querySelectorAll('#ingredientesContainer .form-check-input:checked'))
        .map(input => input.value);

    // Opciones adicionales
    const orillaRellena = document.getElementById('orillaRellena').checked;
    const quesoExtra = document.getElementById('quesoExtra').checked;

    // Calcular precio base según la cantidad de ingredientes
    let precioBase = calcularPrecioPizza(selectedIngredients);

    // Agregar costo extra por opciones adicionales
    if (orillaRellena) {
        if (precioBase == 99){
            precioBase += 66; // Orilla rellena
        } else if (precioBase == 129){
            precioBase += 36; // Orilla rellena
        } else {
            precioBase += 45; // Orilla rellena
        }
    }

    if (quesoExtra) precioBase += 45;

    // Mostrar el precio en el modal
    const precioFinal = document.getElementById('precioFinal');
    precioFinal.textContent = `$${precioBase.toFixed(2)}`;

    // Actualizar la vista previa también
    updatePreview();
}

// Función para inicializar eventos
function inicializarEventosModal() {
    const checkboxes = document.querySelectorAll('#ingredientesContainer .form-check-input');
    const orillaRellena = document.getElementById('orillaRellena');
    const quesoExtra = document.getElementById('quesoExtra');

    // Agregar evento a cada checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', actualizarPrecioDinamico);
    });

    // Eventos para extras
    orillaRellena.addEventListener('change', actualizarPrecioDinamico);
    quesoExtra.addEventListener('change', actualizarPrecioDinamico);
}

// Reiniciar el modal al abrir
function reiniciarModalPizza() {
    document.querySelectorAll('.form-check-input').forEach(input => input.checked = false);
    document.getElementById('orillaRellena').checked = false;
    document.getElementById('quesoExtra').checked = false;
    document.getElementById('previewPizza').value = 'Aquí se mostrarán tus selecciones...';
    document.getElementById('precioFinal').textContent = '$0.00';
}

$('#pizzeriaTabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');

    // Cambiar las cartas
    switch ($(this).attr('id')) {
        case 'pizzas-tab':
            generateCards(pizzas, 'pizza-content', 'pizza');
            break;
        case 'paquetes-tab':
            generateCards(paquetes, 'paquete-content', 'paquete');
            break;
        case 'bonealitas-tab':
            generateCards(bonealitas, 'bonealitas-content', 'bonealitas');
            break;
        case 'complementos-tab':
            generateCards(complementos, 'complemento-content', 'complemento');
            break;
    }

    // Espera un poco antes de desplazar hacia el inicio (ajusta el tiempo según sea necesario)
    setTimeout(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast'); // Desplazamiento suave hacia el inicio
    }, 100); 
});




document.getElementById('ingredientesContainer').addEventListener('change', updatePreview);
document.getElementById('orillaRellena').addEventListener('change', updatePreview);
document.getElementById('quesoExtra').addEventListener('change', updatePreview);

// Inicializar eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    inicializarEventosModal();
    // Reiniciar modal al abrir
    $('#createPizzaModal').on('show.bs.modal', reiniciarModalPizza);
});

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
                    
                if (pizza == "Crea tu pizza"){
                    
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
            // Este es para el aderezo
        }


        // Para los paquetes
        if (optionObject['Boneless o Alitas'] === undefined && optionObject['Aderezo A Elegir'] && optionObject['Tipo']) {
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: Pizza de Boneless ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']} un Aderezo Ranch y un Refresco Grande 1.75L`; //Paquete 3
        } else if (optionObject['Aderezo A Elegir'] && optionObject['Tipo'] && optionObject['Pizza 1 Ingrediente'] ) { // Paquete 1
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: Pizza de ${optionObject['Pizza 1 Ingrediente']}, ${optionObject['Boneless o Alitas']} ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']} y un Refresco Grande 1.75L`; //Paquete 3
        } else if (optionObject['Boneless o Alitas'] === undefined && optionObject['Aderezo A Elegir'] === undefined && optionObject['Tipo'] === undefined && optionObject['Pizza 1 Ingrediente'] ) { // Paquete 2
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: Pizza de ${optionObject['Pizza 1 Ingrediente']}, un Espagueti Sencillo y un Refresco Grande 1.75L`;
        }

        if (product.name == "Paquete 4") {
            // Construir los detalles de cada producto en el paquete
            const productosDelPaquete = product.products.map(prod => {
                if (prod.type === 'pizza') {
                    // Para pizza, incluir el ingrediente
                    return `Pizza de ${prod.options.Ingrediente}`;
                } else if (prod.type === 'boneless') {
                    // Para boneless, incluir la salsa y el tipo
                    return `${prod.name} con Salsa ${prod.options.Salsa}, Tipo ${prod.options.Tipo}`;
                } else {
                    // Para otros productos, simplemente mostrar el nombre
                    return prod.name;
                }
            }).join(', '); // Unir todos los productos con comas
        
            // Mostrar el texto en el contenido de la lista
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''}${name}: ${productosDelPaquete}`;
        }


        if (product.name == "Pizza de Boneless con Aderezo") {
            // Construir los detalles de cada producto en el paquete
            const productosDelPaquete = product.products.map(prod => {
                if (prod.type === 'boneless') {
                    // Para boneless, incluir la salsa y el tipo
                    return `${prod.name} ${prod.options.Tipo} con Salsa ${prod.options.Salsa} y con Aderezo Ranch Aparte`;
                } else {
                    return prod.name;
                }
            }).join(', '); // Unir todos los productos con comas
        
            // Mostrar el texto en el contenido de la lista
            li.textContent = `${productQuantity > 1 ? `${productQuantity} ` : ''} ${productosDelPaquete}`;
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
        const orillaRellenaText = options.orillaRellena ? 'Con orilla rellena' : '';
        const quesoExtraText = options.quesoExtra ? 'Con extra queso' : '';

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


function handleDeliveryChange() {
    const deliveryAddress = document.getElementById("deliveryAddress").value;
    const deliveryInputsContainer = document.getElementById("deliveryInputsContainer");
    const confirmButton = document.querySelector('.btn-primary');
    const deliveryNotice = document.getElementById('deliveryNotice');


    if (deliveryAddress === "Entrega a Domicilio") {
        deliveryNotice.style.display = 'block';
        deliveryInputsContainer.style.display = "block";
        validateDeliveryInputs();
    } else {
        deliveryNotice.style.display = 'none';
        deliveryInputsContainer.style.display = "none";
        confirmButton.disabled = false; // Habilitar botón si no es a domicilio
    }
}

// Validar en tiempo real los inputs de entrega a domicilio
document.getElementById("colonia").addEventListener("input", validateDeliveryInputs);
document.getElementById("numeroCasa").addEventListener("input", validateDeliveryInputs);


function validateDeliveryInputs() {
    const colonia = document.getElementById("colonia").value.trim();
    const numeroCasa = document.getElementById("numeroCasa").value.trim();
    const confirmButton = document.querySelector('.btn-primary');

    // Deshabilitar botón si algún campo está vacío
    if (colonia && numeroCasa) {
        confirmButton.disabled = false;
    } else {
        confirmButton.disabled = true;
    }
}

// Llamar populatePaymentAndDeliveryOptions al abrir el modal
$('#orderModal').on('show.bs.modal', populatePaymentAndDeliveryOptions);

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
            if (pizza == "Crea tu pizza"){


            } else {
                const priceElement = cardBody.querySelector('.pizza-price');
                const price = parseFloat(priceElement.textContent.replace('$', ''));
                selectedPizzas.push({ name: pizza, quantity, price });
            }
            
        }
    });

    // Agregar pizzas personalizadas al cálculo
    pizzasPersonalizadas.forEach(pizza => {
        const existsInOrder = productosOrdenados.some(product => product.name === pizza.name);
        if (!existsInOrder) {
            selectedPizzas.push({
                name: pizza.name,
                quantity: 1, // Las pizzas personalizadas se consideran individuales
                price: pizza.price
            });
        }
    });

    // Filtrar productos ya ordenados
    const filteredPizzas = selectedPizzas.filter(pizza => {
        return !productosOrdenados.some(product => product.name === pizza.name);
    });

    // Calcular el precio total
    let totalPrice = filteredPizzas.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
    totalPrice += productosOrdenados.reduce((acc, product) => acc + product.price, 0);

    // Actualizar el total en el modal
    document.getElementById('totalPrice').textContent = `${totalPrice.toFixed(2)}`;
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
    filteredPizzas.forEach(pizza => {    
        if (pizza.name === "Paquete 2") {
            orderMessage += `${pizza.quantity} Paquete 2: Una Pizza de Peperoni, Un Espagueti Sencillo y un Refresco Grande 1.75L\n`;
        } else if (pizza.name === "Crea tu pizza") {
            // para ahorrar problemas
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
            optionDetails = `${optionObject.type} con salsa ${optionObject.sauce}`; //PARA LOS BONELESS Y ALITAS VER SI CAUSA ALGUN CONFLICTO
        } else if (optionObject.sauce && Object.keys(optionObject).length === 2) {
            optionDetails = `con salsa ${optionObject.sauce}`;
        } else if (optionObject['Boneless o Alitas'] === undefined && optionObject['Aderezo A Elegir'] && optionObject['Tipo']) { 
            optionDetails = `Pizza de Boneless ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']}  un Aderezo Ranch y un ${optionObject['Refresco Grande 1.75L']}`; //PAQUETE 3
        }
        else if (optionObject['Aderezo A Elegir'] && optionObject['Tipo'] && optionObject['Pizza 1 Ingrediente'] ) { // Paquete 1
            optionDetails = `Pizza de ${optionObject['Pizza 1 Ingrediente']}, ${optionObject['Boneless o Alitas']} ${optionObject['Tipo']} con Salsa ${optionObject['Aderezo A Elegir']} y un Refresco Grande 1.75L`; //Paquete 3
        } else if (optionObject['Boneless o Alitas'] === undefined && optionObject['Aderezo A Elegir'] === undefined && optionObject['Tipo'] === undefined && optionObject['Pizza 1 Ingrediente'] ) { // Paquete 2
            optionDetails = `Pizza de ${optionObject['Pizza 1 Ingrediente']}, un Espagueti Sencillo y un Refresco Grande 1.75L`;
        } else if (name === "Pizza de Boneless con Aderezo"){

            orderMessage += `Pizza de Boneless con Aderezo:\n`;

            // Detalles de los boneless
            const boneless = product.products.find(p => p.type === "boneless");
        
            if (boneless) {
                orderMessage += `    - Boneless:\n`;
                orderMessage += `        * Salsa: ${boneless.options?.Salsa || "Salsa no seleccionada"}\n`;
                orderMessage += `        * Tipo: ${boneless.options?.Tipo || "Tipo no seleccionado"}\n`;
            }

        } else if (name === "Paquete 4") {
        
               // Agregar el encabezado del paquete
        
               const paquete = product.products; // Accede al arreglo de productos dentro del paquete

               // Mensaje inicial para Paquete 4
               orderMessage += `Paquete 4:\n`;
           
               // Toma las opciones específicas
               const pizza = paquete.find(p => p.type === "pizza");
               const complemento = paquete.find(p => p.type === "complementos");
               const boneless = paquete.find(p => p.type === "boneless");
               const bebida = paquete.find(p => p.type === "bebida");
           
               // Añadir los detalles al mensaje, verificando que existan
               if (pizza) {
                   orderMessage += `    - Pizza 1 Ingrediente: ${pizza.options?.Ingrediente || "Ingrediente no seleccionado"}\n`;
               }
           
               if (complemento) {
                   orderMessage += `    - ${complemento.name}\n`;
               }
           
               if (boneless) {
                   orderMessage += `    - Boneless:\n`;
                   orderMessage += `        * Salsa: ${boneless.options?.Salsa || "Salsa no seleccionada"}\n`;
                   orderMessage += `        * Tipo: ${boneless.options?.Tipo || "Tipo no seleccionado"}\n`;
               }
           
               if (bebida) {
                   orderMessage += `    - ${bebida.name}\n`;
               }
        } else if (optionObject.sauce && Object.keys(optionObject).length === 1){
        optionDetails = `Salsa ${optionObject.sauce}`; 
            // Este es para el aderezo
        }
            
         
        if (optionDetails) {
            orderMessage += `${productQuantity} ${name}: ${optionDetails}\n`;
        }



    });

    // Agregar pizzas personalizadas
    pizzasPersonalizadas.forEach(pizza => {
        const { name, price, options } = pizza;
        const { ingredientes, orillaRellena, quesoExtra } = options;

        // Crear descripción de la pizza personalizada
        let pizzaDescription = `1 ${name} ($${price.toFixed(2)}): `;

        // Ingredientes seleccionados
        if (ingredientes.length > 0) {
            pizzaDescription += `con ${ingredientes.join(', ')}`;
        }

        // Opciones adicionales
        if (orillaRellena || quesoExtra) {
            const extras = [];
            if (orillaRellena) extras.push('orilla rellena');
            if (quesoExtra) extras.push('queso extra');
            pizzaDescription += ` y ${extras.join(' y ')}`;
        }

        // Agregar la descripción al mensaje
        orderMessage += `${pizzaDescription}\n`;
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

    if (deliveryAddress === "Entrega a Domicilio") {
        const colonia = document.getElementById("colonia").value.trim();
        const numeroCasa = document.getElementById("numeroCasa").value.trim();

        // Verificar que los campos de dirección estén llenos
        if (!colonia || !numeroCasa) {
            alert("Por favor, llena todos los campos de la dirección.");
            return;
        }

        // Agregar datos de dirección al mensaje
        orderMessage += `\nDirección:\n    Colonia y Sector: ${colonia}\n   Calle y Número de Casa: ${numeroCasa}`;
    }


    // Variable para almacenar el texto del total ajustado
    let totalText;

    // Verificar si la opción de entrega es "Entrega a Domicilio"
    if (deliveryAddress === "Entrega a Domicilio") {
        orderMessage += `\nTotal: $${totalPrice.toFixed(2)} + Envio`;

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

function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000)); // Minutos convertidos en milisegundos
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
}


function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length));
        }
    }
    return null;
}

function guardarDatosEnCookies() {
    setCookie("customPizzaQuantityValue", customPizzaQuantityValue, 1);
    setCookie("pizzasPersonalizadas", JSON.stringify(pizzasPersonalizadas), 1);
    setCookie("productosOrdenados", JSON.stringify(productosOrdenados), 1);
    setCookie("selectedQuantities", JSON.stringify(selectedQuantities), 1);
    setCookie("selectedPaymentMethod", selectedPaymentMethod, 1);
    setCookie("selectedDeliveryMethod", selectedDeliveryMethod, 1);
}

function restaurarDatosDeCookies() {
    const pizzaQuantity = getCookie("customPizzaQuantityValue");
    if (pizzaQuantity !== null) {
        customPizzaQuantityValue = parseInt(pizzaQuantity, 10);
    }

    const personalizadas = getCookie("pizzasPersonalizadas");
    if (personalizadas !== null) {
        pizzasPersonalizadas = JSON.parse(personalizadas);
    }

    const productos = getCookie("productosOrdenados");
    if (productos !== null) {
        productosOrdenados = JSON.parse(productos);
    }

    const cantidades = getCookie("selectedQuantities");

    if (cantidades !== null) {
        const restoredQuantities = JSON.parse(cantidades);

        // Actualiza el estado global de selectedQuantities
        Object.keys(restoredQuantities).forEach((key) => {
            if (selectedQuantities[key]) {
                selectedQuantities[key] = restoredQuantities[key];
            }
        });
    }

    const paymentMethod = getCookie("selectedPaymentMethod");
    if (paymentMethod !== null) {
        selectedPaymentMethod = paymentMethod;
    }

    const deliveryMethod = getCookie("selectedDeliveryMethod");
    if (deliveryMethod !== null) {
        selectedDeliveryMethod = deliveryMethod;
    }
}

window.addEventListener('beforeunload', guardarDatosEnCookies);


// Inicialización de la pestaña activa
document.addEventListener('DOMContentLoaded', () => {
    restaurarDatosDeCookies(); // Restaurar datos desde cookies
    generateCards(pizzas, 'pizza-content', 'pizza');
    generateCards(paquetes, 'paquete-content', 'paquete'); 
    generateCards(bonealitas, 'bonealitas-content', 'bonealitas');
    generateCards(complementos, 'complemento-content', 'complemento'); //importante cargar todas para que seleccione los inputs en la cookie
});

