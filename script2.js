//Celsius to Farenheit convertion
function convertToFarenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 81;
}

//Farenheit to Celsius convertion
function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 27;
}

//City
function displayWeather(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  // ------------------------ CURRENT LOCATION ---------------------
  /// ***** Not Working *****
  function searchLocation(position) {
    let apiKey = "8f445a7c7ea5a3d052241482838ca33d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  //   searchCity("Phoenix");

  // ---------------------END CURRENT LOCATION ---------------------

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let apiKey = "8f445a7c7ea5a3d052241482838ca33d";
  let city = document.querySelector("#searchTextInput").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", search);

// Date
let now = new Date();

let h6 = document.querySelector("h6");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
minutes = minutes <= 9 ? "0" + minutes : minutes;
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];

h6.innerHTML = `${day} ${month} ${date}, ${year}, ${hours}:${minutes}`;

//Bonus

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", convertToFarenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
