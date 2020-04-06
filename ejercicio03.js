'use strict;'

function email() 
{

let correo =(prompt("Introduce tu correo electronico"))

let patron = /[a-z]*@[iesdoctorbalmis|hotmail|outlook|gmail][.com|.es]/

if(patron.test(correo))

alert("El Correo es valido")

else

alert("El Correo no es valido")

}

email()