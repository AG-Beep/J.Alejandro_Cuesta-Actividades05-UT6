'use strict;'

function usuario() 
{
let nombre = prompt("Introduce un nombre de usuario")

let patron = /[A-Z]/

if(patron.test(nombre))

alert("El nombre de Usuario está en Mayuscula")

else 

alert("El nombre de usuario no está en Mayuscula")

}
usuario()

