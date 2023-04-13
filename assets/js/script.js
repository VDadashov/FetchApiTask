let inp = document.querySelector("input");
let form = document.querySelector("form");


form.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
      `${inp.value}` +
      "&units=metric&appid=" +
      "b829dacffe84055bd55497633318a637" +
      "&lang = az");
    let value = await response.json();
    await result(value);

  } catch (error) {
    alert("there is no such city")
  }
});



function result(value) {
  let body = document.querySelector('body');

  body.lastChild.remove();

  let newDate = new Date();
  let dayOfWeek = newDate.getDay();
  let dayName;
  switch (dayOfWeek) {
    case 0:
      dayName = 'Bazar';
      break;
    case 1:
      dayName = 'Bazar Ertesi';
      break;
    case 2:
      dayName = 'Çərşənbə Axşamı';
      break;
    case 3:
      dayName = 'Çərşənbə';
      break;
    case 4:
      dayName = 'Cümə Axşamı';
      break;
    case 5:
      dayName = 'Cümə';
      break;
    case 6:
      dayName = 'Şənbə';
      break;
    default:
      dayName = 'Xetali';
      break;
  }

  let tbl = `
    <article class="box weather">
  <div class="icon bubble black">
    <div class="spin">
      <img src="https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png">
    </div>
  </div>
  
  <h1>${dayName}</h1>
  <span class="temp">${Math.floor(value.main.temp)}°C</span>
  <span class="high-low">${Math.floor(value.main.temp_min)}°C  /  ${Math.floor(value.main.temp_max)}°C</span>
</article>`

  let createTbl = document.createElement("div");
  createTbl.innerHTML = tbl;
  body.append(createTbl);
}


