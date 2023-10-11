function poner() {
    console.log("hola");
    let botonPrimero = document.getElementsByClassName("quitar-clases")[0];
    let botonSegundo = document.getElementsByClassName("agregar-clases")[0];
  
    botonSegundo.style.display = "none";
    botonPrimero.style.display = "flex";
    botonPrimero.style.alignItems = "center";
  }
  
  function quitar() {
    let botonPrimero = document.getElementsByClassName("quitar-clases")[0];
    let botonSegundo = document.getElementsByClassName("agregar-clases")[0];
  
    botonPrimero.style.display = "none";
    botonSegundo.style.display = "flex";
    botonSegundo.style.alignItems = "center";
  
  }

  


  