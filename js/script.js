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

/* const Islas de los estados = 7200
const Cerro Castor = 4500
const Fitz Roy = 6500
const El Chalten = 7500
const El Calafate = 8000 */


const renderizarSitios = () =>{
    contenedorHTML2.innerHTML = ""
    for(const x of sitios){
        contenedorHTML2.innerHTML += `
        <div class="card-sitios">
            <p>Nombre del lugar: ${x.Nombre}</p>
            <p>Cant de noches: ${x.Noches}</p>
            <p><strong>Costo de la estadia: ${x.Noches}$</strong></p>
            if(Isla de los estados ==${x.Nombre}){
                ${x.Noches}*7200
            }

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
    Noches:formularioCotizador.noches.value
   
    })
    renderizarSitios() 
})