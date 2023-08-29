const AccessKey ="eb250c61e3ff2a5aa6dae49fdf63712d";
const Url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const City=document.getElementById("city");
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".Wind");
const WeatherIcon=document.getElementById("weatherIcon");
const err=document.getElementById("Err");


const inputEl=document.getElementById("data");
const buttonEl=document.getElementById("SearchBtn");

async function checkWeather(city){
    const response=await fetch(Url + city + `&appid=${AccessKey}`);
    let results= await response.json();

    console.log(results);

    City.innerHTML=results.name; 
     temp.innerHTML=Math.round(results.main.temp) +"°c";
     humidity.innerHTML=results.main.humidity +"%";
     wind.innerHTML=results.wind.speed +"kmph";

     if(results.weather[0].main== "Clouds")
     {
        WeatherIcon.src = "images/clouds.png";
     }

     if(results.weather[0].main == "Clear")
     {
        WeatherIcon.src = "images/clear.png";
     }

     if(results.weather[0].main == "Rain")
     {
        WeatherIcon.src = "images/rain.png";
     }

     if(results.weather[0].main == "Drizzle")
     {
        WeatherIcon.src = "images/drizzle.png";
     }

     if(results.weather[0].main == "Mist")
     {
        WeatherIcon.src = "images/mist.png";
     }

 }


 checkWeather("Pune");

buttonEl.addEventListener("click",()=>{
    checkWeather(inputEl.value);
});