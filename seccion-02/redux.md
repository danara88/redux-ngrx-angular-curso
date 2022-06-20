# Que es REDUX ?

Es un simple patron para el manejo de la informacion.
Nos permite saber:
Cual es el estado de mi aplicacion?
Quien cambio alguna variable
Como cambio la informacion?
Como se encuentra determinada variable?

Puede ser implementado en React, Vanilla JS, Angular y mas.
Cualquier componente puede cambiar la data en una aplicacion de Angular.

Cualquier accion que hagamos tiene que hacerse a traves de acciones.

# Los 6 conceptos fundamentales del REDUX

-   Toda la data de la aplicacion, se encuentra en una estructura previamente DEFINIDA.
-   Toda la informacion se encontrara almacenada en un unico lugar llamado STORE.
-   El store JAMAS se modifica de forma directa.
-   Cualquier interaccion del usuario y/o codigo disparan acciones que describen qué sucedio.
-   El valor actual de la informacion de la aplicacion se llama STATE.
-   Un nuevo estado es creado, en base a la combinacion del viejo estado y una accion por una funcion llamada REDUCER.
