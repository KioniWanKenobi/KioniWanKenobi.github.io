const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");

var hilt = document.createElement('img');
hilt.src = 'https://raw.githubusercontent.com/KioniWanKenobi/KioniWanKenobi.github.io/main/assets/img/vailderhilt_horizontal.png';
document.body.appendChild(hilt);

var blade = document.createElement('div');
var shadow = '8px 0 8px #B30000,5px 0 5px 8px ivory,5px 0 12px 16px #B30000, 5px 0 12px 10px #660000';
var altShadow = '8px 0 8px #B30000,5px 0 5px 7px ivory, 5px 0 14px 16px #B30000, 5px 0 10px 11px #660000';
var powermode = "off";
var flashint;
document.body.appendChild(blade);

btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "assets/css/light-theme.css") {
    theme.href = "assets/css/dark-theme.css";
      shadow = '8px 0 8px #B30000,5px 0 5px 8px ivory,5px 0 12px 16px #B30000, 5px 0 12px 10px #660000';
      altShadow = '8px 0 8px #B30000,5px 0 5px 7px ivory, 5px 0 14px 16px #B30000, 5px 0 10px 11px #660000';

  } else {
    theme.href = "assets/css/light-theme.css";
      shadow = '8px 0 8px #4C9A2A,5px 0 5px 8px ivory,5px 0 12px 16px #ACDF87, 5px 0 12px 10px #4C9A2A';
      altShadow = '8px 0 8px #4C9A2A,5px 0 5px 7px ivory, 5px 0 14px 16px #ACDF87, 5px 0 10px 11px #4C9A2A';
  }
});

function power() {
  flashint = setInterval(pulse, 500);
  blade.style.width = '700px';
}
function power_off() {
  flashint = null;
  blade.style.width = '0px';
}

hilt.onclick = function() {
  if (powermode == "off") {
    power();
    powermode = "on";
  } else {
    power_off();
    powermode = "off";
  }
}
var pulse = function() {
 if (powermode == "on") {
    blade.style.boxShadow =  shadow;
    setTimeout(function() {
      blade.style.boxShadow = altShadow;
    }, 250);
}
else   {
   blade.style.boxShadow = 'none';
  }
};