const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
// Ejecutar cuando se de click. Dentro de la func. agregar Capítulo

//Se asegura que la entrada no esté en blanco antes de realizar las siguientes tareas
//restantes en esta lista. usando un bloque if ; de lo contrario,
//proporciona un mensaje o al menos no haga nada y devuelva .focus() al campo de entrada.

button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    //Cree un lielemento que contendrá el título del capítulo de cada entrada y un botón de eliminación asociado.

    //Cree una eliminación de button

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = input.value;

    //Complete el contenido del texto del botón con una X
    deleteButton.textContent = "X";

    //Agregue la variable del elemento li con el botón Eliminar.
    li.append(deleteButton);

    //Agregue la variable del elemento li a la lista desordenada en su HTML
    list.append(li);
  }
  //Agregue un detector de eventos al botón Eliminar que elimina el elemento li cuando se hace clic
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    input.focus();
  });

  //Cambie el valor de entrada a nada o a la cadena vacía para limpiar la interfaz para el usuario
  input.value = "";

  //Independientemente de si se creó o no un elemento de la lista, el foco (cursor activo) debe enviarse
  //al elemento de entrada.

  input.focus();
});
