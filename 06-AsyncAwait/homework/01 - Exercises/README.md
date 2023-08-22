# **HW 06 Async Await | Ejercicios**

## **🕒 Duración estimada**

x minutos

---

<br />

## **📌 INTRO**

Esta homework consiste en modificar los poemas que vimos en la homework **03-Promises** en la que en cada ejercicio encontrabas callbacks y en cada uno de ellos debías promisificarlo, ahora debes utilizar async await.

---

<br />

## **📍 CONSIGNA**

Modifica los archivos `exercise-one.js` y `exercise-two.js` para pasar de callbacks a async await. Recuerda es equivalente a cuando realizaste la conversión a Promises pero ahora aplicándolo desde el punto de vista de async await.

Recordar modificar el `xit` por `it` en los tests para ir corriendo el test que deseen.

---

<br />

## **📖 Pasos básicos para realizar la homework**

🔹 Para poder ejecutar los `test` de esta homework, es necesario que abramos la terminal ubicados dentro de la carpeta `01 - Exercises`.

-  Cuando te encuentres en esta carpeta, debes ejecutar el comando

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

-  Una carpeta llamada **poem-one**.
-  Una carpeta llamada **poem-two**.
-  Una carpeta llamada **tests**
-  Un archivo `exercises-one.js`.
-  Un archivo `exercises-two.js`.
-  Un archivo package.json
-  Un archivo **utils.js**
-  Y el archivo **README.md** que ahora mismo estás leyendo. 😙

---

<br />

## **👩‍💻 EJERCICIO 1**

### **Poema uno**

📍 Dirígete al archivo `exercise-one.js`. Encontrarás las funciones "**problemA**, "**problemB**", "**problemC**", "**problemD**", "**problemE**","**problemF**", en este archivo. Trabajaremos en las seis.

> Hint: exercisesUtils es una variable que viene del archivo `utils.js`, este archivo crea un `promisifiedReadFile`, lo necesitarás para los ejercicios.

📍 Dentro de cada función verás realizada la versión callback, el objetivo de la homework es pasar estas funciones callbacks a la versión async await, así que debes comentar la función callback para crear la promesa.

📍 Cuando la consigna manejo de errores, asegúrate de verificar que funcione en ambos casos. Es decir, si la promesa se resuelve por el camino del error debería ingresar al catch y si se resuelve por el camino del éxito debería mostrar las stanzas cumpliendo con el orden especificado en la consigna, utilizando try-catch.

📍 Lo que hay que hacer:

1. Función problemA: En este ejercicio debes loguear del **poem-one** la stanza 1 e ignorar errores.

   a. Utiliza el método `promisifiedReadFile`, que se encuentra dentro del archivo **utils.js**, este método nos devuelve una promesa que a su vez nos entrega el contenido del archivo.

   b. La función **problem A** debe tener el `async`, llama la función `blue` que se encuentra en el archivo **utils.js**.

   c. Dentro de la función blue espera con `await` el método **promisifiedReadFile** que a su vez recibe como parámetro la ruta donde se encuentra **stanza-01.txt**, recuerda que ésta se encuentra en la carpeta **poem-one**, por el momento ignora los errores.

2. Función problemB: En este ejercicio la finalidad es loguear del `poem-one` las stanzas **stanza-02.txt** y **stanza-03.txt**, en cualquier orden.

   a. La función **problem B** debe tener el `async`

   b. Crea una función asíncrona que reciba un parámetro, el cual será las stanzas, en el cuerpo de la función llama el método **blue**.

   c.Dentro del método **blue** y espera a que se resuelva el método **promisifiedReadFile**, pasándole como argumento el parámetro que recibe la función asíncrona.

   d.Para finalizar llama la función asíncrona dos veces, pasa como argumento la **stanza-02.txt** en una llamada y en la otra llamada la **stanza-03.txt**.

3. Función problemC: En este ejercicio el objetivo es leer y loguear del poema uno, la **stanza-02.txt** y después leer y loguear la **stanza-03.txt**, luego debes loguear 'done' cuando ambas promesas hayan terminado, los tests esperan la palabra exacta `done`(case sensitive) para ser logueada y pasar. Ignora el manejo de errores por este ejercicio:

   a. La función **problem C** debe tener el `async`, llama la función `blue` que se encuentra en el archivo **utils.js**.

   b. Dentro de la función **blue** espera con `await` el método **promisifiedReadFile** que a su vez recibe como parámetro la ruta donde se encuentra **stanza-02.txt**, recuerda que por el momento ignora errores.

   c. Haz lo mismo que el punto b pero para la **stanza-03.txt**.

   d. Por último consologuea `done`.

   c. Vuelve a llamar el método **.then** que haga lo mismo que se realizó para la **stanza-02.txt**.

4. Función problemD: En este ejercicio debes loguear del **poem-one** la **stanza-04.txt** o un error si llega a ocurrir:

   a. La función **problem D** debe tener el `async`.

   b. Maneja los errores con el bloque `try-catch`.

   c. Dentro del bloque `try`llama la función `blue` que se encuentra en el archivo **utils.js**.

   d. Dentro de la función **blue** espera con `await` el método **promisifiedReadFile** que a su vez recibe como parámetro la ruta donde se encuentra **stanza-04.txt** o una ruta errada como por ejemplo, **poem-one/wrong-file-name.txt** .

   e. Dentro del bloque `catch` quien recibe como parámetro un error, en el cuerpo del catch invoca la función `magenta` que se encuentra en el archivo **utils.js**, pasándole como argumento el error.

5. Función problemE: Teniendo de base los ejercicios anteriores, en esta función debes leer y loguear la **stanza-03.txt**, luego debe leer y loguear la **stanza-04.txt**, maneja errores logueando un error si llegara a suceder para cualquiera de las dos stanzas.

   a. La función **problem E** debe tener el `async`.

   b. Maneja los errores con el bloque `try-catch`.

   c. Dentro del bloque `try`llama la función `blue` dos veces una para la **stanza-03.txt** y otra la **stanza-04.txt**.

   d. Dentro de cada función **blue** espera con `await` el método **promisifiedReadFile** que a su vez reciba como parámetro la ruta donde se encuentra **stanza-03.txt** y **stanza-04.txt**.

   e. Prueba colocando dentro de una de las funciones **blue** una ruta errada o la ruta **poem-one/wrong-file-name.txt**.

   f. Dentro del bloque `catch` quien recibe como parámetro un error, en el cuerpo del catch invoca la función `magenta` que se encuentra en el archivo **utils.js**, pasándole como argumento el error.

6. Función problemF: Teniendo de base los ejercicios anteriores, en esta función debes leer y loguear la **stanza-03.txt**, Luego debe leer y la **stanza-04.txt**, maneja errores logueando un error si llegara a suceder para cualquiera de las dos stanzas y por último, tanto en el bloque try como en el catch siempre debes loguear `'done'` cuando haya terminado todo.

   a. La función **problem F** debe tener el `async`.

   b. Maneja los errores con el bloque `try-catch`.

   c. Dentro del bloque `try`llama la función `blue` dos veces una para la **stanza-03.txt** y otra la **stanza-04.txt**.

   d. Dentro de cada función **blue** espera con `await` el método **promisifiedReadFile** que a su vez reciba como parámetro la ruta donde se encuentra **stanza-03.txt** y **stanza-04.txt**.

   e. Prueba colocando dentro de una de las funciones **blue** una ruta errada o la ruta **poem-one/wrong-file-name.txt**.

   f. Dentro del bloque `catch` quien recibe como parámetro un error, en el cuerpo del catch invoca la función `magenta` que se encuentra en el archivo **utils.js**, pasándole como argumento el error.

   g. Por último consologuea `done` fuera del bloque try-catch.

---

<br />

## **👩‍💻 EJERCICIO 2**

📍 Dirígete al archivo `exercise-two.js`. Encontrarás las funciones "**problemA**, "**problemB**", "**problemC**", "**problemD**", "**problemE**", en este archivo. Trabajaremos en las cinco.

📍 Dentro de cada función verás realizada la versión callback, el objetivo de la homework es pasar estas funciones callbacks a la versión async await, así que debes comentar la función callback para crear la promesa.

📍 Cuando la consigna manejo de errores, asegúrate de verificar que funcione en ambos casos. Es decir, si la promesa se resuelve por el camino del error debería ingresar al catch y si se resuelve por el camino del éxito debería mostrar las stanzas cumpliendo con el orden especificado en la consigna, utilizando try-catch.

📍 Lo que hay que hacer:

1. Función problemA:

   a. Con el método **promisifiedReadFile** debes loguear la **stanza-01.txt** y la **stanza-02.txt** que se encuentran en la carpeta **poem-two**.

   b. Por el momento ignora los errores.

   c. Las dos promesas deben leerse simultáneamente en cualquier orden.

   d. Por último debes loguear `'done'` cuando ambas promesas hayan terminado.

   e. Asegúrate de testear el output de tus soluciones corriéndolos múltiples veces, para ver las posibilidades.

   > Hint: Recuerda que puedes usar el método promise.all()

2. Función problemB:

   a. Con el método **promisifiedReadFile** debes loguear todos las stanzas que se encuentran en la carpeta **poem-two**.

   b. Por el momento ignora los errores.

   c. Las promesas deben ser resueltas simultáneamente en cualquier orden.

   d. Por último debes loguear `'done'` cuando todas las promesas hayan terminado.

   e. Asegúrate de testear el output de tus soluciones corriéndolos múltiples veces, para ver las posibilidades.

   > Hint: Puedes utilizar el arreglo `filenames`.

3. Función problemC:

   a. Con el método **promisifiedReadFile** debes loguear todos las stanzas que se encuentran en la carpeta **poem-two**.

   b. Por el momento ignora los errores.

   c. Las promesas deben ser resueltas en orden y en serie, es decir, cada promesa se resuelve cuando la anterior haya terminado.

   d. Por último debes loguear `'done'` cuando todas las promesas hayan terminado.

   e. Asegúrate de testear el output de tus soluciones corriéndolos múltiples veces, para ver las posibilidades.

4. Función problemD:

   a. Con el método **promisifiedReadFile** debes loguear todos las stanzas que se encuentran en la carpeta **poem-two**.

   b. En este ejercicio debes tener en cuenta los errores.

   c. Las promesas deben ser resueltas en orden y en serie, es decir, cada promesa se resuelve cuando la anterior haya terminado.

   d. Por último debes loguear 'done' cuando todas las promesas hayan terminado.

   e. Asegúrate de testear el output de tus soluciones corriéndolos múltiples veces, para ver las posibilidades.

---

<br />

## **🧠 Recuerda que...**

-  Usamos try-catch para que cuando ejecutemos nuestro código podamos detectar y manejar errores.

-  `async` significa asincrónico y `await` hace que Javascript espere hasta que una promesa se resuelva y devuelva su respectivo resultado.

-`async-await` es otro mecanismo de Javascript para manejar el asincronismo, la palabra **async** antes de una función indica a la función que debe devolver una promesa y **await** se usa dentro de la función asincrónica esperando a que se resuelva la promesa.

---

<br />

## **🔎 Recursos adicionales**

-  Documentación [**async-await**](https://javascript.info/async-await)

-  [**try-catch**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch)

---

<br />

¡Listo! Aprendiste a desarrollar una API que gestiona POST's, utilizando los métodos HTTP!!!😎 creaste algo similar a un gestor de publicaciones de cualquier red social conocida. ✨🚀

Dirígete a la carpeta 📂 "02 - Integration" y continúa desarrollando la app de Rick & Morty 🤩 ---
