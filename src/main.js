"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};
document.addEventListener("DOMContentLoaded", function () {
    // Referencias a los elementos del HTML
    const select = document.getElementById("items");
    const imgEl = document.getElementById("displayImage");
    const photographerInput = document.getElementById("photographer");
    const descriptionInput = document.getElementById("description");
    const scoreInput = document.getElementById("score");
    const btnUp = document.getElementById("increaseScore");
    const btnDown = document.getElementById("decreaseScore");

    // Llenar el select con los nombres de los ítems
    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    // Función para mostrar los datos del ítem seleccionado
    function mostrarItem(key) {
        const item = itemData[key];
        if (!item) return;
        imgEl.src = item.image;
        photographerInput.value = item.photographer;
        descriptionInput.value = item.description;
        scoreInput.value = item.score;
    }

    // Evento al cambiar el select
    select.addEventListener("change", function () {
        if (this.value !== "-1") {
            mostrarItem(this.value);
        }
    });

    // Eventos para los botones de puntaje
    btnUp.addEventListener("click", function () {
        const key = select.value;
        if (itemData[key]) {
            itemData[key].score++;
            scoreInput.value = itemData[key].score;
        }
    });

    btnDown.addEventListener("click", function () {
        const key = select.value;
        if (itemData[key]) {
            itemData[key].score--;
            scoreInput.value = itemData[key].score;
        }
    });

    // Seleccionar el primer ítem válido por defecto
    const firstKey = Object.keys(itemData)[0];
    select.value = firstKey;
    mostrarItem(firstKey);
});