function poner() {
    console.log("hola");
    let botonPrimero = document.getElementsByClassName("quitar-clases")[0];
    let botonSegundo = document.getElementsByClassName("agregar-clases")[0];
    let container = document.getElementById('containerUno')
    let imagen = document.getElementById('container-imagenUno')
    let formulario = document.getElementById('form-containerUno')
  
    botonSegundo.style.display = "none";
    botonPrimero.style.display = "flex";
    botonPrimero.style.alignItems = "center";
    container.style.display='flex';
    container.style.justifyContent = 'center';
    imagen.style.display = "flex";
    formulario.style.display='none';
    
  }
  
  function quitar() {
    let botonPrimero = document.getElementsByClassName("quitar-clases")[0];
    let botonSegundo = document.getElementsByClassName("agregar-clases")[0];
    let container = document.getElementById('containerUno')
    let imagen = document.getElementById('container-imagenUno')
    let formulario = document.getElementById('form-containerUno')
  
    botonPrimero.style.display = "none";
    botonSegundo.style.display = "flex";
    botonSegundo.style.alignItems = "center";
    container.style.display='none';
    imagen.style.display = "none";
    formulario.style.display='flex';
    
  
  }

  


  