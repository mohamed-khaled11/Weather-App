// the elements
let search = document.querySelector(".search");
let form = document.querySelector("form");
let hide = document.querySelector(".hide");
let switchElement = document.querySelectorAll('.switch-element');
let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
function switchColor(){
    switchElement.forEach((element) =>{
        element.addEventListener('click',(e)=>{
            switchElement.forEach((el) =>{
                el.classList.remove('active')
            })
            element.classList.toggle('active')
        })
    })
    sun.addEventListener('click',()=>{
        document.body.style.backgroundColor ='#5596c3'
    });
    moon.addEventListener('click',()=>{
        document.body.style.backgroundColor ='#101014'
    });
}
switchColor();
// function to display and hide search input
// Api
class weather {
  constructor(apikey) {
    this.apikey = "7e4e046423df149d00b2410931055b69";
  }
  // Methods
  // method to fetch weather api
  fetchWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&type=hour&appid=7e4e046423df149d00b2410931055b69`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  }
  // function to display results
  displayWeather(data) {
    const name = data.name;
    let country = data.sys.country;
    // const state = data.weather[0].main;
    const state = data.weather[0].description;
    const icon = data.weather[0].icon;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;
    const windSpeed = data.wind.speed;
    const windDeg = data.wind.deg;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const timezone = data.timezone;
    const dt = data.dt;
    // the interface variables
    const TempValue = document.querySelector(".temperature");
    const CityName = document.querySelector(".city-name");
    const ReelFeel = document.querySelector(".reel-feel");
    const Humidity = document.querySelector(".humidity");
    const Sunrise = document.querySelector(".sunrise");
    const Sunset = document.querySelector(".sunset");
    const Wind = document.querySelector(".wind");
    const TodayIcon = document.querySelector(".today-icon");
    const CityCountry = document.querySelector(".city-country");
    const Pressure = document.querySelector(".pressure");
    let TodayState = document.querySelector(".today-state");
    let DayIcon = document.querySelectorAll(".day-icon");
    let DayTemp = document.querySelectorAll(".day-temp");
    // set the values
    TempValue.innerHTML = `${temp}°c `;
    TodayState.innerHTML = state;
    ReelFeel.innerHTML = `${feelsLike}°`;
    Humidity.innerHTML = `${humidity}%`;
    Pressure.innerHTML = `${pressure}mB`;
    Sunrise.innerHTML = `${sunrise}Am`;
    Sunset.innerHTML = `${sunset}pm`;
    Wind.innerHTML = `${windDeg}km/h`;
    if (country == "IL") {
      country = "Not IL but Palestines";
    }
    CityName.innerHTML = `${name},${country}`;
    TodayIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
    DayIcon.forEach((ele) => {
      ele.src = `https://openweathermap.org/img/wn/${icon}.png`;
    });
    DayTemp.forEach((ele) => {
      ele.innerHTML = `${Math.floor(temp)}°c `;
    });
  }
  // function to display serch input
  DisplaySearch() {
    search.addEventListener("click", function () {
      form.classList.add("display");
    });
  }
  // function to serch on the specify city
  search() {
    this.fetchWeather(document.querySelector(".search-input").value);
  }
  // method to fetch weather of other countries
  fetchWeatherC(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&type=hour&appid=7e4e046423df149d00b2410931055b69`
    )
      .then((response) => response.json())
      .then((info) => this.displayWeatherC(info));
  }
  displayWeatherC(info) {
    // data form api
    // console.log(info);
    // console.log(info.weather[0].description),
    //   console.log(info.weather[0].icon),
    //   console.log(info.main.temp),
    //   console.log(info.sys.country);
    // elements
    let caliState = document.querySelector(".cali-state");
    let caliIcon = document.querySelector(".cali-icon");
    let caliTemp = document.querySelector(".cali-temp");
    let caliCountry = document.querySelector(".cali-country");
    // executed
    caliIcon.src = `https://openweathermap.org/img/wn/${info.weather[0].icon}.png`;
    caliCountry.innerHTML = info.sys.country;
    caliState.innerHTML = info.weather[0].description;
    caliTemp.innerHTML = `${info.main.temp}°c`;
  }
  // method to fetch weather of other countries
  fetchWeatherB(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&type=hour&appid=7e4e046423df149d00b2410931055b69`
    )
      .then((response) => response.json())
      .then((info2) => this.displayWeatherB(info2));
  }
  displayWeatherB(info2) {
    // data form api
    // console.log(info2);
    // console.log(info2.weather[0].description),
    //   console.log(info2.weather[0].icon),
    //   console.log(info2.main.temp),
    //   console.log(info2.sys.country);

    // elements
    let BeiState = document.querySelector(".bei-state");
    let BeiIcon = document.querySelector(".bei-icon");
    let BeiTemp = document.querySelector(".bei-temp");
    let BeiCountry = document.querySelector(".bei-country");
    // executed
    BeiIcon.src = `https://openweathermap.org/img/wn/${info2.weather[0].icon}.png`;
    BeiCountry.innerHTML = info2.sys.country;
    BeiState.innerHTML = info2.weather[0].description;
    BeiTemp.innerHTML = `${info2.main.temp}°c`;
  }
  // method to fetch weather of other countries
  fetchWeatherJ(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&type=hour&appid=7e4e046423df149d00b2410931055b69`
    )
      .then((response) => response.json())
      .then((info3) => this.displayWeatherJ(info3));
  }
  displayWeatherJ(info3) {
    // data form api
    // console.log(info3);
    // console.log(info3.weather[0].description),
    //   console.log(info3.weather[0].icon),
    //   console.log(info3.main.temp),
    //   console.log(info3.sys.country);
    // elements
    let jerState = document.querySelector(".jer-state");
    let jerIcon = document.querySelector(".jer-icon");
    let jerTemp = document.querySelector(".jer-temp");
    let jerCountry = document.querySelector(".jer-country");
    // executed
    jerIcon.src = `https://openweathermap.org/img/wn/${info3.weather[0].icon}.png`;
    jerCountry.innerHTML = `Not ${info3.sys.country} but Palestine`;
    jerState.innerHTML = info3.weather[0].description;
    jerTemp.innerHTML = `${info3.main.temp}°c`;
  }
  // method for display date today
  date() {
    let date = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = date.getUTCDay();
    let dayName = days[day];
    let hour = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let TodayName = document.querySelector(".today-name");
    let TimeNow = document.querySelector(".time-now");
    TodayName.innerHTML = dayName;
    hour < 12 ?TimeNow.innerHTML = `UTC ${hour}:${minutes} Am`:TimeNow.innerHTML = `UTC ${hour}:${minutes} pm`;
  }
}

let myWeather = new weather();
myWeather.DisplaySearch();
myWeather.fetchWeatherC("california");
myWeather.fetchWeatherB("Beijing");
myWeather.fetchWeatherJ("jerusalem");
// display first look of website
document.addEventListener("DOMContentLoaded", function () {
  myWeather.fetchWeather("cairo");
  myWeather.date()
});
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  form.classList.remove("display");
  myWeather.search();
  myWeather.date();
});