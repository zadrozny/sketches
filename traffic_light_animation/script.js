let colors = ["red", "yellow", "green"];

let currentLight = 0;


function changeLight() {
  const lights = document.querySelectorAll('.light');

  lights.forEach(light => {
    light.style.backgroundColor = 'black';
  });


  document.getElementById(colors[currentLight]).style.backgroundColor = colors[currentLight];

  currentLight == 2 ? currentLight = 0 : currentLight++;

  return currentLight;
};


// changeLight();


setInterval(changeLight, 1000);