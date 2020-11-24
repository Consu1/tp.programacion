window.onload=function(){
    
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
.then(function(response){
return response.json();
})
.then(function(data){
console.log(data);
})
.catch(function(error){
console.log('El error fué: ' + error);
})

/* no tocar lo sigunte*/

   fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cc55526ed6d9221ada36a41066b7c9ea&language=en-US&page=1`)
.then(function(response){
return response.json();
})
.then(function(data){
console.log(data);

var contenidoQueQuieroMostrar = " ;"

   for (let i = 0; i < data.results.length; i++) {
       var movie = data.results[i];

    
       contenidoQueQuieroMostrar = document.querySelector(`.peliculas`).innerHTML
    `<h2 class="peliculas">Películas</h2>
        
    <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
     <div>
         <div class="uk-card uk-card-default uk-card-body">
             <h3 class="uk-card-title"></h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
     </div>
     <div>
         <div class="uk-card uk-card-primary uk-card-body">
             <h3 class="uk-card-title">Primary</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
     </div>
     <div>
         <div class="uk-card uk-card-secondary uk-card-body">
             <h3 class="uk-card-title">Secondary</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
         </div>
     </div>
 </div>`

   };

 

})
.catch(function(error){
console.log('El error fué: ' + error);
})

/*hasta aca*/



}
