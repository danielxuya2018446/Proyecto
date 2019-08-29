var formulario = document.getElementById('formulario');
var res = document.getElementById('res');
var enlaces = document.getElementById('enlaces');
var primera = document.getElementById('primera');
var segunda = document.getElementById('segunda');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('INICIO')

    var datos = new FormData(formulario);

    console.log(datos)
    console.log(datos.get('nombre'))
    console.log(datos.get('apellido'))
    console.log(datos.get('mail'))
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))
    console.log(datos.get('sexo'))

    fetch('index.php',{
        method: 'POST',
        body: datos
    })

    .then( respuesta => respuesta.json())
    .then( data => {
        console.log(data)
        if(data === 'error'){
            res.innerHTML = `<div class="alert alert-danger" role="alert">
            Llena todos los campos
            </div>
            `
        }else{
            res.innerHTML = `<div class="alert alert-primary" role="alert"> 
                ${data} 
            </div>
            `;
            

        }
    })
})