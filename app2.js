
var search=document.getElementById('search');
search.addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
        var getCityName=e.target.value
    }
    getWeather(getCityName);

});
function getWeather(getCityName){
  
    const weatherapi=`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=c87fab8d948ed12d3d027fa78f39618f`;
window
.fetch(weatherapi)
.then(data=>{
    data
    .json()
    .then(weather=>{
        var output=[];
       
        var weatherData=weather.weather;

        
        for(let X of weatherData){
            output+=`
                <div class="col-md-4 offset-4 mt-4 card">
                <div class="card-body">
                <h1>${weather.name}</h1>
                <span class="icon"><img src="http://openweathermap.org/img/wn/${X.icon}.png"/></span>
                <p><span>temp:</span>
                <span class="temp">${weather.main.temp}&deg;c</span></p>
                <span  class="des float-left">${X.description}</span>
                <span class="des float-right">${X.main}</span>
                </div>
                </div>
                `;
                document.getElementById("template").innerHTML=output;
        }
    }).catch(err=>console.log(err));
}).catch(err=>console.log(err));
}