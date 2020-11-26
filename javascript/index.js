window.onload=function(){

    var apiKey= 'cc55526ed6d9221ada36a41066b7c9ea';
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`)
        .then(function (response) {
            return response.json()
        })
        .then(function (information) {
            console.log(information);

            var ul = document.querySelector (".pelis")


            for (let i = 0; i < information.results.length; i++) {
                var element = information.results[i];
                ul.innerHTML  += `
                
                    <li>
                    <a href="detail.html?tipo=serie&id=${element.id}">
                    <img src="${linkimagen}${element.poster_path}" alt="">
                    </a>
                    </li>
                ` 
            }
        })
        .catch(function (error) {
            console.log('El error fue: ' + error);
        })

    
    
    /*    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
.then(function(response){
return response.json();
})
.then(function(data){
console.log(data);

    var contenidoQueQuieroMostrar = document.getElementById('');


    for (let i = 0; i < data.results.length; i++) {
        var peliculas = data.results[i];


    contenidoQueQuieroMostrar += `<div class="uk-card uk-card-hover uk-card-body">
        <img src="https://image.tmdb.org/t/p/w500${peliculas.poster_path}" alt="foto de película">
        <h3 class="uk-card-title uk-text-center">${peliculas.title}</h3>
        </div>`

}

    var contenedorDePeliculas = document.querySelector('.peliculas');

    contenedorDePeliculas.innerHTML = contenidoQueQuieroMostrar;

})

.catch(function(error){
console.log('El error fue: ' + error);
})
*/
}