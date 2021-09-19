var stop = [];
function changeColor() {
  var i = 1;
  while (true) {
    const marker = document.getElementById("blocky" + i);
    if (marker == null) {
      break;
    }
    if (stop[i - 1]) {
      marker.style.color = "red";
    } else {
      marker.style.color = "green";
    }
    i++;
  }
}
changeColor();

function getIframe() {
  const myIframe = document.getElementById("frame");
  console.log(myIframe);
}

//var traffic1 = setInterval(changeColor, 100);

// timer for color change //

window.onload = function () {
  var minute = 1;
  var sec = 10;
  var switching = true;

  var minute2 = 3;
  var sec2 = 10;
  var switching2 = true;
  setInterval(function () {
    changeColor();
    timer = document.getElementById("timer1");
    if (sec < 10) {
      sec = "0" + sec;
    }
    timer.innerHTML = minute + " : " + sec;
    sec--;
    if (sec == 00) {
      sec = 59;
      minute--;

      if (minute == -1) {
        minute = 1;
        sec = 10;
        if (switching == true) {
          stop[1 - 1] = true;
          switching = false;
        } else {
          stop[1 - 1] = false;
          switching = true;
        }
      }
    }

    timer2 = document.getElementById("timer2");
    if (sec2 < 10) {
      sec2 = "0" + sec2;
    }
    timer2.innerHTML = minute2 + " : " + sec2;
    sec2--;
    if (sec2 == 00) {
      sec2 = 59;
      minute2--;

      if (minute2 == -1) {
        minute2 = 3;
        sec2 = 10;
        if (switching2 == true) {
          stop[2 - 1] = true;
          switching2 = false;
        } else {
          stop[2 - 1] = false;
          switching2 = true;
        }
      }
    }
  }, 100);
};

function main() {
  changeColor();
  getIframe();
}
