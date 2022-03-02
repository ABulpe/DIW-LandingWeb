'use strict';
//Script realizado segun el tutorial de la moodle
const imagenes = document.querySelector('.imagenes');
const punto = document.querySelectorAll('.punto');
punto.forEach((cadaPunto, i)=>{
    punto[i].addEventListener('click', ()=>{
        imagenes.style.transform = `translateX(${i * -(100 / punto.length)}%)`;
        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove("activo");
        });
        punto[i].classList.add("activo");
    });
});

//# sourceMappingURL=index.ba3df694.js.map
