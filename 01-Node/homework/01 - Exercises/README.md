# HW 01: Node | Ejercicios

## **🕒 Duración estimada**

3 horas

---

<br />

## **📌 INTRO**

En esta homework vas a implementar comandos bash comunes usando Node.js.

---

<br />

## **⛔️ ATENCIÓN ⛔️**

Creemos que es importante que sepas que **`no`** encontrarás una relación directa entre lo que has visto en la lecture y lo que harás en esta homework.

**👀 What? Why?**

¡Esta es una decisión hecha a propósito! Creemos que con todo lo que sabes hasta este momento es suficiente para que realices esta homework. El nivel de dificultad fue testeado y es acorde para el momento en el que te encuentras.

Si los ejercicios no salen a la primera, o a la segunda, no te preocupes, es normal. Pero una vez que entiendas cómo hacer el primer ejercicio, verás que todos son muy similares y que no era taaaan complicado xD!😉

---

<br />

## **📖 CONSIGNA**

Lee atentamente este **README** y realiza cada uno de los ejercicios.

---

<br />

## **✅ Pasos básicos para realizar la homework**

🔹 Para poder ejecutar los `test` de esta homework, es necesario que abras la terminal dentro de la carpeta `01 - Exercises`.

Cuando te encuentres en esta carpeta, debes ejecutar el comando

```bash
npm install
```

¡Listo! Ya puedes correr los test:

```bash
npm test
```

Si deseas correr por test, puedes utilizar:

```bash
npm run test:01
```

---

<br />

## **ESTRUCTURA**

🔹 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

-  Una carpeta llamada `commands`.
-  Una carpeta llamada `test`.
-  Un archivo **bash.js**.
-  Un archivo **package.json**.
-  Y el archivo **README.md** que ahora mismo estás leyendo. 😙
-  Una carpeta llamada `utils` (no tocar, ya que dentro hay un archivo utilizado para los tests).
-  Un archivo **prueba.js** (Tampoco tocarlo a este archivo, que se utiliza para testear tu código también).

---

<br />

## **👩‍💻 EJERCICIO 1**

### **PROCESS**

📍 Dirígete al archivo `bash.js`. Encontrarás las variables "**process**" y "**commands**" importados en este archivo. Trabajaremos con ambas.  
También estará la función `bash` que es la que ejecutará tu terminal.

📍 Lo que hay que hacer:

1. Crea una función con el nombre `print`. Esta función recibirá por parámetro un **output**. Dentro de ella tendrás que utilizar el método **stdout.write** del objeto `process` dos veces. La primera vez le pasarás como argumento el **output** recibido. La segundo vez el argumento deberá ser: "\nprompt > ".

2. Luego, dentro de la función `bash` utiliza el método **stdout.write** del objeto `process` pasándole como argumento el string: "prompt > ".

3. Agrega también dentro `bash` el método **stdin.on** del objeto `process` al cual le deberás pasar dos parámetros.

   -  El primero debe ser el string: "data".

   -  El segundo debe ser una función que recibe por parámetro `data`.

      A) Dentro de la función crea una variable con el nombre "**args**".Ten en cuenta que el parámetro que recibes no es un string, por lo que tendrás que convertirlo en uno. También ten en cuenta que si este string tiene espacios vacíos al comienzo o al final deberás eliminarlos.

      B) Guarda en una variable llamada "**cmd**" la primer palabra del string, la cuál representará el comando ingresado.

      C) Ahora verifica si dentro del objeto `commands` existe una propiedad con el valor que contiene la variable "**cmd**". En el caso que no existe, ejecuta la función `print` con el texto "command not found: **_cmd_**". En el caso de que si exista, ejecuta el siguiente código:

      ```bash
      commands[cmd](print, args);
      ```

---

<br />

## **👩‍💻 EJERCICIO 2**

📍 Dirígete al archivo `commands/index.js`. Encontrarás las variables "**utils**", "**process**" y "**fs**" importadas en este archivo. Trabajaremos con ambas.  
También estarán 8 funciones que deberás completar, junto a su `module.exports` al final del archivo.

📍 Lo que hay que hacer:

### **PWD**

_PWD_ permitirá imprimir la ruta hacia el directorio en el que estás trabajando.

1. Completa la función `pwd`. Esta recibirá por parámetro el valor "print".
2. Utiliza la función `print`. Como argumento pásale el objeto `process` siendo ejecutado con el método **cwd**.

---

<br />

### **DATE**

_DATE_ imprimirá la fecha actual de tu máquina.

1. Completa la función `date`. Esta recibirá por parámetro el valor "print".
2. Utiliza la función `print`. Como argumento pásale la función `Date` siendo ejecutada.

---

<br />

### **ECHO**

_ECHO_ imprimirá el texto que escribas en la consola.

1. Completa la función `echo`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Utiliza la función `print`. Como argumento pásale a la función el parámetro `args`

---

<br />

### **LS**

_LS_ va a imprimir los archivos y carpetas que estén disponibles en tu directorio actual.

1. Completa la función `ls`. Esta recibirá por parámetro un valor: "print".
2. Invoca el método `readdir` de la constante `fs` para leer los archivos actuales.  
   tendrás que pasarle como argumento un string con un valor de `.` (El punto hace referencia a tu directorio actual)  
    y un callback, que recibirá a su vez 2 parámetros, `error` (Posible error que pueda devolver el callback)  
    y `files` (un array de string conteniendo los archivos y carpetas encontrados).
3. Si `fs.readdir` devuelve un error arrójalo. (Puedes usar `throw error`)
4. Invoca la función `print` y pásale como argumentos los archivos encontrados.  
   _IMPORTANTE_: ¡Debes pasarlos como un string, sino se imprimirá un arreglo y arrojará un error!

---

<br />

### **CAT**

_CAT_ Imprimirá en la consola cualquier archivo que le indiques. Recuerda que si quieres imprimir un archivo  
por fuera del directorio que estás parado, deberás indicar la ruta hacia el mismo.

1. Completa la función `cat`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Invoca el método `readFile` de `fs` y pásale los siguientes argumentos:

-  `args` (El parámetro que recibes en la función `cat`)
-  Un string `'utf-8'` (El formato Unicode que deberá tener el texto)
-  Un callback con los parámetros `error` y `data`

3. Si `fs.readFile` devuelve un error arrójalo. (Puedes usar `throw error` como se mencionó antes)
4. Invoca la función `print` y pásale como argumento el parámetro `data` (Que es el archivo encontrado)

---

<br />

### **HEAD**

_HEAD_ Imprimirá las primeras _8_ línea de cualquier archivo que indiques, ten en cuenta los mismos puntos  
descritos en la función de _CAT_ para utilizarlo correctamente.

1. Completa la función `head`. Esta recibirá por parámetro dos valores: "print" y "args".
2. Invoca el método `fs.readFile` y pásale los siguientes argumentos:

-  `args` (El parámetro que recibes en la función `head`)
-  Un string `'utf-8'` (El formato Unicode que deberá tener el texto)
-  Un callback con los parámetros `error` y `data`

3. Si `fs.readFile` devuelve un error arrójalo. (Puedes usar `throw error` como se mencionó antes)
4. Invoca la función `print` y pásale como argumento la primera línea del archivo `data` (¡Te toca pensar cómo hacerlo!)

---

<br />

### **TAIL**

_TAIL_ Permitirá imprimir la última línea de cualquier archivo que indiques, ten en cuenta las mismas anotaciones descritas en el ejercicio de _CAT_ para utilizarlo correctamente.

1. Completa la función `tail`. Esta recibirá por parámetros dos valores: "print" y "args".
2. Invoca el método `fs.readFile` y pásale los siguientes argumentos:

-  `args` (El parámetro que recibes en la función `tail`)
-  Un string `'utf-8'` (El formato Unicode que deberá tener el texto)
-  Un callback con los parámetros `error` y `data`

3. Si `fs.readFile` devuelve un error arrójalo. (Puedes usar `throw error` como se mencionó antes)
4. Invoca la función `print` y pásale como argumento la última línea del archivo `data` (¡Te toca también pensar cómo hacerlo!)

---

<br />

### **CURL**

_CURL_ Imprimirá cualquier respuesta de una url que le puedas proveer, tiene que tener el prefijo `https://` antes de  
ingresar la dirección.

1. Completa la función `head`. Esta recibirá por parámetros dos valores: "print" y "args".
2. Invoca la función `request` que se encuentra importada más arriba y pásale los siguientes argumentos:

   -  `args` (El parámetro que recibes en la función `curl`).
   -  un callback con los parámetros `error` y `response`.

3. Si `request` devuelve un error, arrojarlo (Puedes usar `throw error` como se mencionó antes).
4. Invoca la función `print` pasándole como argumento el parámetro `response`.

---

<br />

## **🔎 Recursos adicionales**

-  Documentación [**VARIABLES GLOBALES DE NODE**](https://apuntes.de/nodejs-desarrollo-web/globals/#gsc.tab=0)
-  Documentación [**VARIABLE GLOBAL PROCESS**](https://nodejs.org/docs/latest-v16.x/api/process.html)
-  Documentación [**NODE**](https://nodejs.org/en/docs/)
-  Documentación [**FILE SYSTEM**](https://nodejs.org/api/fs.html)

---

<br />

¡Listo! Aprendiste a crear los comandos más básicos de una terminal bash.🥳
