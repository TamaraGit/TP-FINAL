const contenedorHTML = document.getElementById("contenedor")

fetch("./Database/database.json")
.then(response => response.json())
.then(data => {
        for(locacion of data){
            contenedorHTML.innerHTML += `
            <div class="card">
                <h2>${locacion.destino}</h2>
                <p>${locacion.provincia}</p>
                <img src=${locacion.url}/>
                <p><strong>Precio/noche: ${locacion.precio}$</strong></p>
            </div>
            `
        }
})

/* 
const formularioUsuario = document.querySelector("#formularioUsuario")

const lugares = []
/* const renderizarLugares = () => */
/*
formularioUsuario.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log(formularioUsuario.lugares.value)
    lugares.push({formularioUsuario.nochecitas.value})
})
 */



const formularioCotizador = document.querySelector("#formularioCotizador")
const contenedorHTML2 = document.querySelector(".contenedorCotizador") 
const sitios = []

 const renderizarSitios = () =>{
    contenedorHTML2.innerHTML = ""
    for(const sitio of sitios){
        contenedorHTML2.innerHTML += `
        <div class="card-sitios">
            <h2>Nombre del lugar: ${sitios.lugares}</h2>
            <p>Cant de noches: ${sitios.noches}</p>

        </div>
        `
    }
} 

formularioCotizador.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log(formularioCotizador.lugares.value)
    console.log(formularioCotizador.noches.value)
    sitios.push({
    /* formularioCotizador.lugares.value */
    formularioCotizador.noches.value
   
    })
    renderizarSitios() 
})