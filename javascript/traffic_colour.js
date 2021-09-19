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
