const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay');

let API = '';

changeLocation.querySelector('.form-control').focus()

changeLocation.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = changeLocation.querySelector('.form-control').value;
    API = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=cd894f226099e03bd00257ed781081da`
    setData()
    changeLocation.reset()
})

// setData and give data to setLocation
function setData() {
    getData(API)
        .then((res) => setLocation(res))
        .catch((err) => errorAlert(err))
}

// setData to document
function setLocation(data) {
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
    details.innerHTML = `
        <h5 class="mb-3">${data.name}, ${data.sys.country}</h5>
          <p class="mb-3">${data.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(data.wind.deg / 10)}</span>
            <span>&deg;C</span>
        </div>
    `
}

// error message
function errorAlert() {
    alert('please write correct city name')
}

// loader
function loaderFunc(a) {
    if(a) {
        overlay.classList.remove('d-none')
    } else {
        overlay.classList.add('d-none')
    }
}