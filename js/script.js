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
