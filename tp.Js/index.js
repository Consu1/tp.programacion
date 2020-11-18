window.onload=function(){
    fetch('https://api.themoviedb.org/3/movie/550?api_key=3640f935247830e9f54f567258e27a2b')
.then(function(response){
return response.json();
})
.then(function(data){
console.log(data);
})
.catch(function(error){
console.log('El error fué: ' + error);
})
}
