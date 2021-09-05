APIKEY="08638bfd9bd1dc256a6018d0ad3a6a90";


function onGeoOk(position) {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("you live in", lat, lon);

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`


    fetch(url)
        .then(response => response.json())
        .then((data) => {
                const city =document.querySelector("#weather span:first-child");
                const weather =document.querySelector("#weather span:last-child");

                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

        });


}

function onGeoError () {
    console.log("Can't find you. no weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);