const miPromesa = new Promise((resolve,reject) => {
    resolve('Promesa resuelta √')       // se resuelve
    //reject('Promesa rechazada X')     // se rechaza
})

/*

Promesa A --->

--> Se resuelve -->

    (si Tiene Success Handler puede...)
        -> Retornar un valor --> Promesa B se resuelve al valor nuevo
        -> Arrojar un error --> Promesa B se rechaza a la razón
        -> Retornar una promesa --> Promesa B se convierte en Promesa Z

    (si No tiene Success Handler...)
        ---> Promesa B se RESUELVE al mismo valor

--> Se rechaza -->

    (si Tiene Success Handler puede...)
        -> Retornar un valor --> Promesa B se resuelve al valor nuevo
        -> Arrojar un error --> Promesa B se rechaza a la razón
        -> Retornar una promesa --> Promesa B se convierte en Promesa Z

    (si No tiene Error Handler...)
        ---> Promesa B se RECHAZA al mismo valor
*/