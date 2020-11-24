window.onload=function(){
    
    var apiKey= `cc55526ed6d9221ada36a41066b7c9ea`

    fetch(`https://api.themoviedb.org/3/movie/popular?{api_key=${apiKey}`)
.then(function(response){
return response.json();
})
.then(function(data){
console.log(data);

    var contenidoQueQuieroMostrar = ''
    var urlImagen = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';

    for (let i = 0; i < data.results.length; i++) {
        var peliculas = data.results[i];
        

    var contenidoQueQuieroMostrar += `<div class="uk-card uk-card-hover uk-card-body">
        <img src="${ urlImagen + poster_path}" alt="foto de película">
        <h3 class="uk-card-title uk-text-center">${title}</h3>
        </div>`

};

    var contenedorDePeliculas = document.querySelector('.peliculas');

    contenedorDePeliculas.innerHTML = contenidoQueQuieroMostrar;



.catch(function(error){
console.log('El error fué: ' + error);
})
