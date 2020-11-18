window.onload=function(){
    fetch('https://api.themoviedb.org/3/movie/550?api_key=cc55526ed6d9221ada36a41066b7c9ea')
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
