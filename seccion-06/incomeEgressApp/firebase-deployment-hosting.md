# Firebase Hosting deployment

Firebase Hosting es un servicio de hosting de contenido web con nivel de producción orientado a programadores. Con Firebase Hosting, puedes implementar apps web y contenido estático en una red de distribución de contenido global (CDN) con un solo comando, en forma rápida y sencilla.

1. Ir al directorio del proyecto y generar la app de produccion de angular:

```
$ ng build --prod
```

2. Instalar el firebase tools:

```
$ sudo npm install -g firebase-tools
```

3. Autenticarte en firebase:

```
$ firebase login
```

4. Inicializar firebase y seleccionar la opcion de Hosting. Luego seleccionar mi proyecto, apuntar al directorio dist (con los archivos de produccion) y NO sobreescribir el archivo index dentro del directorio:

```
$ firebase init
```

5. Hacer el deploy de la aplicacion:

```
$ firebase deploy
```

Para consultar la seccion del curso ver: https://www.udemy.com/course/redux-ngrx-angular/learn/lecture/10942164#questions

Para consultar documentacion oficial ver: https://firebase.google.com/docs/hosting/quickstart
