'use strict'
//Script Realizado siguiendo el tutorial de la moodle
const enlace = document.querySelectorAll('.enlace')
const bloque = document.querySelectorAll('.bloque')


enlace.forEach( ( cadaEnlace , i )=>{
    enlace[i].addEventListener('click',()=>{

        enlace.forEach( ( cadaEnlace , i )=>{
            enlace[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })
        enlace[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})