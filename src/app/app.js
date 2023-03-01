const input = document.querySelector('.costum-input');
const btn = document.querySelector('.btn');
const show = document.querySelector('.body-show');

// klik enter
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    btn.click();
  }
});

btn.onclick = () => {
  if (!input.value) {
    show.innerHTML = alertShow();
  }
  fetch(`http://api.weatherapi.com/v1/current.json?key=1584153914904089b52124252230103&q=${input.value}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      show.innerHTML = showBody(data);
    });
};

function showBody(data) {
  return `<div class="body-box">
            <h3>${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
            <p>${data.location.localtime}</p>
            <div class="box">
              <h1>${data.current.temp_c} &degC</h1>
              <h2>${data.current.condition.text}</h2>
              <img src="${data.current.condition.icon}" alt="" />
            </div>
          </div>`;
}

function alertShow(alert) {
  return `<div class="alert alert-danger w-50 mx-auto" role="alert">Tolong masukan lokasi yang valid!</div>`;
}
