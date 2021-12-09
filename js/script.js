Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            currentActiveSlide: 0,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                }
            ]
        },
        methods: {
            showNextSlide: function() {
                if(this.currentActiveSlide < this.slides.length - 1) {
                    this.currentActiveSlide++;
                }else {
                    this.currentActiveSlide = 0;
                }
            },
            showPrevSlide: function() {
                if(this.currentActiveSlide > 0) {
                    this.currentActiveSlide--;
                }else {
                    this.currentActiveSlide = this.slides.length - 1;
                }
            },
            changeCurrentSlide = function(index) {
                this.currentActiveSlide = index;
            },
            
        }
    }
);


// // Popolo immagini e thumbnails dagli array
// const bigImagesContainer = document.querySelector('.big-images-container');
// const thumbsContainer = document.querySelector('.thumbs');

// for( let i = 0; i < items.length; i++ ) {
//     // Quali variabili mi servono per popolare il mio nuovo div ad ogni ciclo?
//     // Path
//     const thisPath = items[i];
//     // Alt/Titolo
//     const thisTitle = title[i];
//     // Testo/Descrizione
//     const description = text[i];

//     // Popolare il container big images
//     const newDiv = `
//     <div class="single-image">
//         <img src="${thisPath}" alt="${thisTitle}">

//         <div class="single-image-text">
//             <h3>${thisTitle}</h3>
//             <p>${description}</p>
//         </div>
//     </div>
//     `;

//     bigImagesContainer.innerHTML += newDiv;

//     // Popolare thumbnails a destra
//     const newThumbnail = `
//     <div class="single-thumb">
//         <img src="${thisPath}" alt="${thisTitle}">
//     </div>
//     `;

//     thumbsContainer.innerHTML += newThumbnail;
// }

// // Definire l'elemento di default
// let activeItem = 0;
// const allBigImages = document.getElementsByClassName('single-image');
// const allThumbnails = document.getElementsByClassName('single-thumb');
// allBigImages[activeItem].classList.add('active');
// allThumbnails[activeItem].classList.add('active');

// // Eventi sulle arrows (con l'idea di spostare la classe active all'elemento precedente o successiv)
// const arrowDown = document.querySelector('.down');
// arrowDown.addEventListener('click', function() {
//     // Rimuovo la classe active alla big image e alla thumbnail corrente
//     allBigImages[activeItem].classList.remove('active');
//     allThumbnails[activeItem].classList.remove('active');

//     // Aumento activeImage di 1
//     if( activeItem < allBigImages.length - 1 ) {
//         activeItem++;
//     } else {
//         activeItem = 0;
//     }

//     // Aggiungo la classe active agli elementi big image e thumbnail che hanno il nuovo indice
//     allBigImages[activeItem].classList.add('active');
//     allThumbnails[activeItem].classList.add('active');
// });

// const arrowUp = document.querySelector('.up');
// arrowUp.addEventListener('click', function() {
//     // Rimuovo la classe active alla big image e alla thumbnail corrente
//     allBigImages[activeItem].classList.remove('active');
//     allThumbnails[activeItem].classList.remove('active');

//     // Decrementare activeImage di 1
//     if( activeItem > 0 ) {
//         activeItem--;
//     } else {
//         activeItem = allBigImages.length - 1;
//     }

//     // Aggiungo la classe active agli elementi big image e thumbnail che hanno il nuovo indice
//     allBigImages[activeItem].classList.add('active');
//     allThumbnails[activeItem].classList.add('active');
// });