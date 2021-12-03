

// Produccion -> Entorno de produccion , Entorno real

// Desarrollo, local -> Entorno de desarrollo

// Control de versiones de Software : GIT , Mercurial

// Volver a versiones antiguas del desarrollo

// Volver a versiones ESTABLES del desarrollo

// Trabajar en grupo sobre un proyecto

// Trabajar sobre un proyecto desde distintos ordenadores

// CONSOLA -> Hay que aplicar comandos
// Cliente de Git -> Sourcetree , guarda en local el estado del proyecto

// Tracked - Git está pendiente de los cambios del archivo
// Staged -> Los archivos están preparados
// Commit -> Es una foto del código en ese punto. Un punto de guardado( Podremos volver a él si fuera necesario )

// REPOSITORIO LOCAL 

// REPOSITORIO REMOTO -> REPOSITORIO en INTERNET 

let contador = 0;
$('#btnClic').on({
    click: function(){
        contador++;
       $( "#datos" ).html(contador);
       consola.log('8888');
    }
});
