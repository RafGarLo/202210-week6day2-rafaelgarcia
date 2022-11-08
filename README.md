# Fight club - Ejercicio de grupos

## COMPONENTS

### API:

https://api.themoviedb.org/3/movie/550?api_key=our api key

### Header: Muestra logo cooporativo. Botón de busqueda y enlaces de navegación.

-Home: Inicio
-Mi Lista: Mustra la lista de mis peliculas vistas
-Botón búsqueda: Su responsabilidad es ejecutar una función que recibe del contexto. Admite tanto para búsquedas por personas, como títulos.

### FOOTER:

-Muestra el logo.

### Lista de peliculas.

-Recibe los datos desde el contexto
-Genera un map y le pasa a componente item por props la información que necesite

### ITEM:

-Muestra la imagén.
-A traves del item se puede acceder a los detalles de la pelicula.

### BOTONES

#### (PAGINACIÓN)

-Muestra em que página se encuentra el usuario.
-Recibe petición del usuario e interactúa con el mismo para pasar de página.

#### (VISTAS).

1-Se muestra el botón de vista/no vista. recibe la información de su estado, a través del contexto.
2-Al hacer clic, mediante la interacción del usuario se indica si fue vista o no. Será agregada(add) a lista “Mi lista”
3-Puede ser clicado en la película y navega a los detalles.

#### (FAVORITOS)

1-Se muestra el botón de favoritos, el cual recibe información de su estado desde el contexto. (add).
2-Al presionar marca la película seleccionada como favorita.
3-Al volver a presionar, la quita como favoritos.

### PAGE NOT FOUND.

1-Muestra al usuario no poder encontrar la información solicitada.
2-Esta versión de la página aún contiene el header y footer exactamente iguales, para permitir la navegación a favoritos y página principal.
