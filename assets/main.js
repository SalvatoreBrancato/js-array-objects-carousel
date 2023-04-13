// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

 for (let i = 0; i < images.length; i++) {
     let singolaImage = (images[i])
    
     document.getElementById(`img-principale`).innerHTML += 
     `
     <div class="slide-big" id="box${i}">
        <img class="immagine" src="./${singolaImage[`image`]}" alt="">
        <div class="testo">
            <h1>${singolaImage[`title`]}</h1>
            <p>${singolaImage[`text`]}</p>
        </div>     
     </div>
    
     `
     console.log(singolaImage[`image`])
 }

 document.querySelector(`.slide-big`).classList.add(`active`)

 

// images.forEach((element, index) =>{
//     console.log(`${element.image}, ${index.image}`)
// })

let arrowUp = document.getElementById(`up`)
let arrowDown= document.getElementById(`down`)

let immagineAttiva = 0


arrowDown.addEventListener(`click`, function(){
    let immaginePrecedente = document.getElementById(`box${immagineAttiva}`)
    immagineAttiva = immagineAttiva + 1
    
    if (immagineAttiva == images.length) {
            immagineAttiva = 0;
        }
        
    let immagineSuccessiva= document.getElementById(`box${immagineAttiva}`);
    
    if (immaginePrecedente.classList.contains('active')){

        immaginePrecedente.classList.remove('active');
        immagineSuccessiva.classList.add('active');
    }
    
} )

arrowUp.addEventListener(`click`, function(){
    let immaginePrecedente = document.getElementById(`box${immagineAttiva}`)
    

    if (immagineAttiva == 0) {
            immagineAttiva = images.length;
        }
        
    immagineAttiva = immagineAttiva - 1;
    let immagineSuccessiva= document.getElementById(`box${immagineAttiva}`);
    
    if (immaginePrecedente.classList.contains('active')){

        immaginePrecedente.classList.remove('active');
        immagineSuccessiva.classList.add('active');
    }
    
} )

