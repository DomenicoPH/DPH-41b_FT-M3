# **HW 02 Testing | Ejercicios**

## **🕒 Duración estimada**

x minutos

---

<br />

## **📌 INTRO**

En esta homework crearás un servidor básico con distintas rutas que cumplirán funcionalidades específicas.

---

<br />

## **📖 CONSIGNA**

Lee atentamente este **README** y realiza cada uno de los ejercicios.

---

<br />

## **✅ Pasos básicos para realizar la homework**

Para iniciar, debes pararte sobre la carpeta **`01 - Excercises`**. Dentro de ella escribe el comando:

```bash
npm install
npm test
```

---

<br />

## **ESTRUCTURA**

Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

-  Una carpeta **Part 01**.
   -  Un archivo **levels.js** que contendrá los ejercicios.
   -  Un archivo **levels.test.js** que contendrá los tests de cada ejercicio.
-  Una carpeta **Part 02**.
   -  Un archivo **antiTrollsSecurity.js** que contendrá el ejercicio.
   -  Un archivo **antiTrollsSecurity.test.js** que contendrá el test del ejercicio.
-  Un archivo **package.json**.
-  Un archivo **.gitignore**.
-  Un archivo **README.md**.

---

<br />

## **📋 INSTRUCCIONES**

Dentro de la carpeta **`Part 01`** encontrarás los ejercicios con los que deberás iniciar esta homework. Cada ejercicio tiene mayor complejitud a medida que subes de nivel. Deberás guiarte tanto por este README como por los test para resolver cada ejercicio.

Dentro de la carpeta **`Part 02`** encontrarás dos archivos. Para resolver esta segunda parte deberás guiarte 100% mediante este README.

---

</br >

## **PART 01**

### **👩‍💻 Level 01**

Esta función recibe dos números por parámetro. A partir de los test identifica el resultado de qué operación debes devolver.

<br />

### **👩‍💻 Level 02**

Esta función recibe string de muchas letras al azar. Identifica el patrón de conversión de las letras a partir de los test, y devuelve el string correcto.

<br />

### **👩‍💻 Level 03**

Esta función recibe dos arreglos por parámetros. Deberás unirlos y devolver el nuevo arreglo ordenado. Puedes guiarte a partir de los test.

<br />

### **👩‍💻 Level 04**

🥳¡Felicitaciones si haz llegado hasta aquí!🥳

En este ejercicio tendrás que encontrar los **`Números Henry`**. Estos números tienen la particularidad que, si sumamos cada uno de sus dígitos, y luego multiplicamos esa suma por el inverso de sus dígitos, obtendremos el número original. Por ejemplo:

```javascript
   let henryNumber = 1729;
   let suma = 1 + 7 + 2 + 9 = 19;
   let reverse = 91;
   19 * 91 === 1729 // True
```

Si el número que recibes cumple esta condición, retorna **True**. Caso contrario, **False**.

<br />

---

## **PART 02**

### **👩‍💻 Anti Trolls Security**

Este ejercicio constitirá en dos momentos:

1. Primero deberás crear los **`test`** para este ejercicio. Puedes hacerlo dentro del archivo testing.

   -  Esta función recibe un string por parámetro. Debe retornar el mismo string pero habiendo eliminado todas las vocales de él (no importa si la vocal está en minúscula o en mayúscula).

   -  Deberás crear una descripción para el test.

   -  Debes componer al menos cinco tests individuales distintos para comprobar que funcione correctamente.

2. Luego de haber realizado el test correspondiente, dirígete al archivo donde esta la función y créala desde cero.

3. Una vez finalizado esto, valida que ftu nuevo test esté funcionando con el comando:

```bash
   npm test
```

---

<br />

## **🔎 Recursos adicionales**

-  Documentación [**MATCHERS FROM JEST**](https://jestjs.io/docs/using-matchers)

---

<br />

¡Listo! Aprendiste a utilizar las funciónes básicas que nos provee **jest** para testear funciones en JavaScript.
