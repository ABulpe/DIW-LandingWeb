'use strict';
const imagenes = document.querySelector('.imagenes');
const punto = document.querySelector('punto');
punto.forEach((cadaPunto, i)=>{
    punto[i].addEventListener('click', ()=>{
        imagenes.style.transform = `translateX(${i * -(100 / punto.length)}%)`;
        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove("activo");
        });
        punto[i].classList.add("activo");
    });
});

//# sourceMappingURL=index.d2a7e152.js.map
