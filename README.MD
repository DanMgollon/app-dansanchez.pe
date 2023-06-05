# FERRETERIA JR

## TECNOLOGÍAS USADAS
- [NEXT.JS](https://nextjs.org/)
-  [TYPESCRIPT](https://www.typescriptlang.org/)
- [SQL SERVER](https://www.microsoft.com/es-es/sql-server/sql-server-downloads)
- [NEXT-AUTH](https://next-auth.js.org/)
- [CLOUDINARY](https://cloudinary.com/)
- [TAILWIND CSS](https://tailwindcss.com/)
- [PRISMA](https://www.prisma.io/)
- [REACT HOOK FORM](https://react-hook-form.com/)
- [REACT SELECT](https://react-select.com/home)
- [REACT-PDF](https://react-pdf.org/)

## DIAGRAMA DE LA BASE DE DATOS
![MODELADO BASE DE DATOS](/public/images/Diagrama.png)

### SCRIPT PARA RESTAURAR LA BASE DE DATOS
Este script contiene tantos las tablas como algunos datos de prueba para la base de datos.   
[DESCARGAR SCRIPT PARA RESTAURAR LA BASE DE DATOS](/public/scripts/)   

## ¿Cómo iniciar el proyecto?
Para iniciar el proyecto debemos descargarlo ya sea mediante zip o clonando el repositorio.

```
  git clone https://github.com/Kevin04C/app_ferreteria
```
Una vez que hayamos descargado el proyecto tenemos que instalar las dependencias, para esto debemos tener [node.js](https://nodejs.org) instalado en nuestro equipo.

```
# instalar dependencias
npm install
```
Una vez instaladas las dependencias debemos renombrar un archivo llamado **.env.example** a **.env** que se encuentra en la raiz del proyecto, este archivo contendra las variables de entorno que se usaran en el proyecto, las variables que se deben agregar son las siguientes:

``` 
DATABASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
- ### DATABASE_URL
La cadena de conexion a la base de datos, esta debe ser una cadena de conexion valida para SQL SERVER.   
```
DATABASE_URL=sqlserver://HOST:PORT;database=DATABASE;user=USER;password=PASSWORD;encrypt=true
```
- #### NEXTAUTH_URL
Al implementar en producción, establezca la variable de entorno NEXTAUTH_URL en la dirección URL canónica de su sitio.
 ```
  NEXTAUTH_URL=https://example.com
 ```
- ### NEXTAUTH_SECRET
Una cadena que se utiliza para cifrar NextAuth.js JWT y para hash tokens    
```
NEXTAUTH_SECRET=secret
```
- ### CLOUDINARY_CLOUD_NAME
El nombre de la nube de Cloudinary que se usara para almacenar las imagenes de los productos.
```
CLOUDINARY_CLOUD_NAME=cloud_name
```
- ### CLOUDINARY_API_KEY
La clave de la API de Cloudinary que se usara para almacenar las imagenes de los productos.
```
CLOUDINARY_API_KEY=api_key

```
- ### CLOUDINARY_API_SECRET
La clave secreta de la API de Cloudinary que se usara para almacenar los archivos.
```
CLOUDINARY_API_SECRET=api_secret
```
