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

//Ciclo for per stampare immagine principale nel DOM
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

 //icone arrow up and down
let arrowUp = document.getElementById(`up`)
let arrowDown= document.getElementById(`down`)

let immagineAttiva = 0

//funzione per far scorrere le immagini verso il basso quando si clicca arrow down
arrowDown.addEventListener(`click`, function(){
    let immaginePrecedente = document.getElementById(`box${immagineAttiva}`)
    let immagineSlidePrecedente = document.getElementById(`slide${immagineAttiva}`);
    immagineAttiva = immagineAttiva + 1
    
    if (immagineAttiva == images.length) {
            immagineAttiva = 0;
        }
        
    let immagineSuccessiva= document.getElementById(`box${immagineAttiva}`);
    let immagineSlideSuccessiva = document.getElementById(`slide${immagineAttiva}`);
    
    if (immaginePrecedente.classList.contains('active')){

        immaginePrecedente.classList.remove('active');
        immagineSuccessiva.classList.add('active');
        immagineSlideSuccessiva.classList.remove(`opacity`);
        immagineSlidePrecedente.classList.add(`opacity`);
    }
    
} )

//funzione per far scorrere le immagini verso il l'alto quando si clicca arrow up
arrowUp.addEventListener(`click`, function(){
    let immaginePrecedente = document.getElementById(`box${immagineAttiva}`)
    let immagineSlidePrecedente = document.getElementById(`slide${immagineAttiva}`);

    if (immagineAttiva == 0) {
            immagineAttiva = images.length;
        }
        
    immagineAttiva = immagineAttiva - 1;
    let immagineSuccessiva = document.getElementById(`box${immagineAttiva}`);
    let immagineSlideSuccessiva = document.getElementById(`slide${immagineAttiva}`);
    
    if (immaginePrecedente.classList.contains('active')){

        immaginePrecedente.classList.remove('active');
        immagineSuccessiva.classList.add('active');
        immagineSlideSuccessiva.classList.remove(`opacity`);
        immagineSlidePrecedente.classList.add(`opacity`);
        
    }
    
} )

//Ciclo for per stampare immagine secondarie nel DOM
for (let i = 0; i < images.length; i++) {
    let singolaImage = (images[i])
   
    document.getElementById(`img-secondarie`).innerHTML += 
    `
    <img class="slide opacity" id="slide${i}" src="./${singolaImage[`image`]}" alt="">
   
    `
}

let slide = document.querySelectorAll(`.slide`)
let slideAttiva = 0
slide.forEach((element, index)=>{
    element.addEventListener(`click`, function (){

        document.getElementById(`box${index}`).classList.add(`active`) 
        document.getElementById(`slide${index}`).classList.remove(`opacity`) 
        document.getElementById(`box${index - 1}`).classList.remove(`active`)
        document.getElementById(`slide${index - 1}`).classList.add(`opacity`)
        document.getElementById(`box${index + 1}`).classList.remove(`active`)
        document.getElementById(`slide${index + 1}`).classList.add(`opacity`)
        
        console.log(element)
        console.log(index)
        console.log(slideAttiva)

    })
});

console.log(slide)





// let immagineSelezionata = document.getElementById(`slide${immaginePassiva}`)
//     immaginePassiva = immaginePassiva + 1