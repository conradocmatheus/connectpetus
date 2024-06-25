function create_card({id, img_src, pet_name, pet_neighborhood}) {
    return `
        <div class="card m-2" style="width: 18rem; cursor: pointer;" id:"${id}" onclick="open_profile(${id})">
            <img src="${img_src}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${pet_name}</h5>
                <p class="card-text">${pet_neighborhood}</p>
            </div>
        </div>
    `
}

pets = [
    {
        id: 1,
        img_src: "https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg",
        pet_name: "Jorginho",
        pet_neighborhood: "Porto Meira",
        description: "Jorginho é um pet muito bonzinho, sempre muito animado e querendo brincar"
    },
    {
        id: 2,
        img_src: "https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg",
        pet_name: "Jorginho",
        pet_neighborhood: "Porto Meira",
        description: "Jorginho é um pet muito bonzinho, sempre muito animado e querendo brincar"
    },
    {
        id: 3,
        img_src: "https://t4.ftcdn.net/jpg/01/99/00/79/360_F_199007925_NolyRdRrdYqUAGdVZV38P4WX8pYfBaRP.jpg",
        pet_name: "Jorginho",
        pet_neighborhood: "Porto Meira",
        description: "Jorginho é um pet muito bonzinho, sempre muito animado e querendo brincar"
    }
]

function load_pets() {
    const cards_container = document.getElementById('cards_container')

    pets.forEach(pet_data => {
        const pet_card = create_card(pet_data)
        cards_container.innerHTML += pet_card
    });
}

document.addEventListener('DOMContentLoaded', function() {
    load_pets()
});


function open_profile(id) {
    const pet = pets.find(pet => pet.id === id);
    if (pet) {
        const popupContent = `
            <div class="pet_container">
                <div id="pet_image" style="background-image: url('${pet.img_src}');"></div>
                <h1>${pet.pet_name}</h1>
                <p>${pet.description}</p>

                <button>Adotar</button>
            </div>
        `;
        document.getElementById('popup_content').innerHTML = popupContent;
        document.getElementById('popup').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    } else {
        console.error('Pet not found');
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}