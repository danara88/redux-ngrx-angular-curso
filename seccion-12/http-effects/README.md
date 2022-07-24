# Que son los efectos ?

Los efectos son como la tercera ley de Newton **Por cada accion hay una reaccion**.
Esas reaccion seria un efecto. No todas las acciones dispararan efectos.
Esa accion puede se escuchada por un efecto.

-   Un efecto escucha acciones que son despachadas por el ngrx/store.
-   Simplificar la logica en los componentes
-   Comunicarse fuera de la app de Angular (Http o Sockets)

El STORE esta compuesto por:

-   Estado
-   Acciones
-   Reducer

Componente -> Accion -> Reducer -> Estado -> Componente

Las acciones son funciones puras que solo deben trabajar con la informacion que disponen. No deben de hacer peticiones asincronas. Solo trabajar con el payload y nunca necesitar recursos externos.

Cuando disparas una accion, puedes crear un efecto que escuche esa determinada accion. El efecto puede comunicarse a un servicio, el servicio a un servidor y la respuesta notifica al servicio y el servicio notifica al efecto, el efecto dispara una nueva accion para que llegue al reducer y se cree un nuevo estado.
