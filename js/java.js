window.addEventListener("load", function() {
    // BUSCADOR
    document.querySelector("form").addEventListener("click", function(event) {
  
    });
    // nada
    // Api's
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=cc55526ed6d9221ada36a41066b7c9ea&language=en-US&page=1")
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {
        console.log(datos);
        var sliderUl = document.querySelector("#maspopulares");
        var pel = datos.results;
  
        for (var i = 0; i < pel.length; i++) {
          sliderUl.innerHTML += '<li><a id="click_pelis" href="info_serie.html?id=' + datos.results[i].id + '"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
        }
      })
    //
    /*fech de series */
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=cc55526ed6d9221ada36a41066b7c9ea&language=en-US&page=1")
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {
        console.log(datos);
        var sliderUl = document.querySelector("#series");
        var pel = datos.results;
  
        for (var i = 0; i < pel.length; i++) {
          sliderUl.innerHTML += '<li><a id="click_pelis" href="info_serie.html?id=' + datos.results[i].id + '"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
        }
      })
  
    /*fech de peliculas */
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=cc55526ed6d9221ada36a41066b7c9ea&language=en-US&page=1")
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {
        console.log(datos);
        var sliderUl = document.querySelector("#peliculas");
        var pel = datos.results;
  
        for (var i = 0; i < pel.length; i++) {
          sliderUl.innerHTML += '<li><a id="click_pelis" href="info_serie.html?id=' + datos.results[i].id + '"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
        }
      })
    console.log("hola");
  
  
    // agarrar info de la película
  
  
  
  
    //Random
  
    var buscarRandom = document.querySelector(".descubrir")
  
    function aleatorio() {
      return Math.floor(Math.random() * 9542);
    }
  
    buscarRandom.innerHTML = '<a href="info_serie.html?id=' + aleatorio() + '">' + 'Descubrir' + '</a>'
  
    //Se creo una funcion que permite hallar series random
  
  
  
  
  
  
  
  
  
  })
  