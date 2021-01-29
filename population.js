var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var asianData = data.filter(region=>{
        return region.population<200000;
    }).map(countryName=> countryName.name)

    console.log(asianData);

    
}