var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var population = data.reduce((acc, country)=>{
        return acc + country.population;
       
    }, 0);
    console.log(population);
    
}