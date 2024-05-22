const form = document.querySelector("#myForm");
const cityInput = document.querySelector("#cityInput");
const API_KEY = "107f0a4900fe176149bf71880f2351a2";
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");

const formHandler = async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();

  temp.innerText = data.main.temp ;
  humidity.innerText = data.main.humidity ;

  console.log( data);
};

form.addEventListener("submit", formHandler);

