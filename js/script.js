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

const formularioCotizador = document.querySelector("#formularioCotizador")
const contenedorHTML2 = document.querySelector(".contenedorCotizador") 
const sitios = []

 const renderizarSitios = () =>{
    contenedorHTML2.innerHTML = ""
    for(const sitio of sitios){
        contenedorHTML2.innerHTML += `
        <div class="card-sitios">
            <p>Nombre del lugar: ${sitios.lugares}</p>
            <p>Cant de noches: ${sitios.noches}</p>
            <h2>Precio de la estadia: ${sitios.lugares}</h2>

        </div>
        `
    }
} 

formularioCotizador.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log(formularioCotizador.lugares.value)
    console.log(formularioCotizador.noches.value)
    sitios.push({
    Nombre:formularioCotizador.lugares.value, 
    Noches: formularioCotizador.noches.value
   
    })
    renderizarSitios() 
})