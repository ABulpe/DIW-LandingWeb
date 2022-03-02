'use strict';
//Script realizado despues de ver los tutoriales de la moodle
const subbloque = document.querySelectorAll('.subbloque');
const h2 = document.querySelectorAll('.h2');
h2.forEach((cadaH2, i)=>{
    h2[i].addEventListener('click', ()=>{
        console.log(subbloque);
        subbloque.forEach((cadaBloque, i)=>{
            subbloque[i].classList.remove('activo');
        });
        subbloque[i].classList.add('activo');
    });
});

//# sourceMappingURL=index.cbbc5561.js.map
