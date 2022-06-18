# Action

Una accion es la unica informacion que se envia por interacciones de usuario o programa.

## Propiedades

-   type: Que es lo que se quiere hacer o cual es la accion que se quiere realizar.
-   payload: Es opcional, ya que no siempre vamos a mandar informacion para realizar una accion.

# Reducer

Es una funcion que unicamente recibe dos argumentos y siempre retorna un estado.
Argumentos:

-   oldState: Es el estado actual de la aplicacion.
-   action: Es un objeto plano que indica que hay que hacer. Buscan ser los mas simple posible
    oldState + Action = New State

# State

Es como se encuentra la informacion actualmente

Reglas:

-   Es de sola lectura
-   Nunca se mutara el STATE de forma diirecta
-   Hay funciones prohibidas de JavaScript. Aquellas que modifican arreglos u objetos en JS

Como sabemos en JavaScript los objetos pasan por referencia y cuando modificamos un objeto, siempre se mantiene la referencia al objeto original, y es lo que tratamos de prevenir, para que el estado sea inmutable y que unicamente creemos nuevos estados.

# Store

Es un obejto que tienes estas responsabilidades:

-   Contiene el estado de la aplicacion
-   Permite la lectura del estado via : getState()
-   Permite crear un nuevo estado utilizando: dispatch(Action)
-   Permite notificar los cambios via subscribe()

https://redux.js.org/ <- Documentacion
