# 😎 React Query con un Event Dispatcher

<img src="https://raw.githubusercontent.com/ger86/react-query-event-dispatcher/master/cover.jpg" alt="React Query con un Event Dispatcher">

## Descripción

Este es el repositorio que he creado para el vídeo de mi canal: [¿Qué tal un event dispatcher para React Query?](https://youtu.be/lfr1NezEvmY).

El proyecto está escrito en TypeScript para que sea más fácil entender cómo funciona el Event Dispatcher y cómo podemos integrarlo con React Query. Sin embargo si trabajas con Javascript no te preocupes, basta con que elimines la sintaxis de TS para que todo te funcione del mismo modo.

Si nunca has trabajado con React Query te recomiendo que antes veas el vídeo [React Query. Versión 3](https://youtu.be/u6TuxMhQwNg) en el que explico los conceptos de esta librería cuyo uso se ha extendido muchísimo este último año.

### ¿Por qué un Event Dispatcher?

Esta idea se me ocurrió mientras trabajaba con un proyecto que empleaba **React Query** para gestionar el estado de las llamadas a la API.

Como sabéis, React Query nos permite cachear el resultado de las llamadas de modo que no sea necesario consultar la API una y otra vez cuando queremos acceder a los datos.

Sin embargo, siempre que usamos una caché tenemos que asegurarnos de que no estamos recuperando datos desactualizados. Por ejemplo, si usamos la API para recuperar la lista de usuarios y posteriormente actualizamos el nombre de uno de ellos, no queremos usar la llamada cacheada que contiene el email antiguo.

React Query nos permite invalidar la caché gracias a que cada llamada está asociada a una clave. Sin embargo, ¿quién debe invalidar la caché? Si lo hacemos dentro del componente que nos permite editar un usuario estamos cargándole con una responsabilidad adicional. Si además tiene que limpiar la caché de varias llamadas, podemos terminar con un bloque de código gigante que a la larga será difícil de mantener (por ejemplo, si cambiamos el formato de nuestras claves tendremos que modificar este componente).

Por eso creo que el uso de un Event Dispatcher puede ser una solución muy adecuada para este problema. En el momento en que editamos el usuario, el componente lanzará un evento para notificar a quién lo deseé que el usuario ha sido editado de modo que podamos limpiar la caché dónde realmente tiene sentido hacerlo.

## Apóyame

Si te ha gustado, puedes invitarme a un cafelito en
[☕️ Buy me a coffe](https://www.buymeacoffee.com/latteandcode)
