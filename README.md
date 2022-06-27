# Curso: REDUX en Angular con NGRX: Desde las bases hasta la práctica

## Resumen

En este repositorio se encuentran mis apuntes y desarrollos realizados durante el curso.
Sientete libre de navegar por el repositorio y checar algunos conceptos relacionados al patrón Redux.

## Qué es REDUX ?

REDUX es un patrón de diseño que nos permite manejar de una mejor manera la información de nuestra app. Este patrón puede ser aplicado en multiples tecnologías (React JS, Vanilla JS, Angular, etc)
Usando este patrón podemos saber:

- Cuál es el estado de mi app ?
- Cómo cambió la información ?
- Cómo se encuentra una determinada variable ?

## Estructuras del patrón REDUX

A continuación se explicarán las estructuras más importantes al momento de implementar REDUX:

- **State**: El estado representa la información actual.

- **Action**: Es la información que se dispara o se envía por medio de interacciones del usuario y del la app. Una acción contiene las siguientes propiedades:

  - type: Indica qué es lo que se quiere realizar.
  - payload: Indica qué información se ocupa mandar (Opcional).

- **Reducer**: Es una función pura la cual siempre retorna un estado. A este se le pasan parámetros como el viejo estado y la acción a ejecutar.Explicación de los parámetros:

  - oldState: Representa el estado actual de la app.
  - actions: Es un objeto que indica lo que se tiene que hacer.
    Por lo tanto tenemos que oldState + action = new state

- **Store**: El store es un objeto con las siguientes resposabilidades:
  - Contiene el estado de la app.
  - Permite la lectura del estado.
  - Permite la creación de un nuevo estado, disparando acciones.
  - Permite notificar los cambios por medio de un observable.

## Los 6 conceptos fundamentales del patrón REDUX

- Todos los datos de una aplicación, se encuentran en una estructura previamene **definida**.
- Toda la información se encuentra almacenada en un único lugar llamado **store**.
- El store **jamás** se modifica de forma directa.
- Cualquier interacción del usuario y/o código dispararán acciones que describen lo que sucedió.
- El valor actual de la data de la app se llama **state**.
- Un nuevo estado es creado en base a la combinación del viejo estado y de una acción por medio de una función pura llamada **reducer**.
