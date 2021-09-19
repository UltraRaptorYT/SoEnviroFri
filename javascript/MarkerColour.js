const data = [
  {
    Title: "Traffic Light 1",
    Long: 103.8048,
    Lat: 1.44269,
    Description: "<#>",
    "Red timing": 120,
    "Green timing": 120,
    Link: "https://www.google.com/maps/@1.4425667,103.8047095,3a,75y,12.48h,64.95t/data=!3m7!1e1!3m5!1sAs_lgItILAmqhlsKMJ9ziQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DAs_lgItILAmqhlsKMJ9ziQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D324.92834%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  },
  {
    Title: "Traffic Light 2",
    Long: 103.804006,
    Lat: 1.444289,
    Description: "`=||",
    "Red timing": 35,
    "Green timing": 35,
    Link: "https://www.google.com/maps/@1.444146,103.8040864,3a,75y,315.24h,75.46t/data=!3m7!1e1!3m5!1sb04PKIWRrL8sx4nEYi_Llg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Db04PKIWRrL8sx4nEYi_Llg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D323.08984%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  },
  {
    Title: "Traffic Light 3",
    Long: 103.801892,
    Lat: 1.441442,
    Description: "<#>",
    "Red timing": 60,
    "Green timing": 60,
    Link: "https://www.google.com/maps/@1.4414596,103.8017118,3a,75y,75.52h,80.64t/data=!3m7!1e1!3m5!1sSBZlF1h8q36oMyG1FlV32g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DSBZlF1h8q36oMyG1FlV32g%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D249.44417%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  },
  {
    Title: "Traffic Light 4",
    Long: 103.79573,
    Lat: 1.439214,
    Description: "<#>",
    "Red timing": 60,
    "Green timing": 60,
    Link: "https://www.google.com/maps/@1.4391502,103.7954746,3a,75y,80.68h,80.7t/data=!3m7!1e1!3m5!1s_-u81hKe1Zfp_TuzLKgoiw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D_-u81hKe1Zfp_TuzLKgoiw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D355.09595%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  },
  {
    Title: "Traffic Light 5",
    Long: 103.792056,
    Lat: 1.438999,
    Description: "`=||",
    "Red timing": 35,
    "Green timing": 35,
    Link: "https://www.google.com/maps/@1.4390873,103.7921231,3a,75y,165.09h,65.47t/data=!3m6!1e1!3m4!1s9wzNTXkBYlq--_NRwF4vdg!2e0!7i16384!8i8192",
  },
  {
    Title: "Traffic Light 6",
    Long: 103.788915,
    Lat: 1.438187,
    Description: "<#>",
    "Red timing": 60,
    "Green timing": 60,
    Link: "https://www.google.com/maps/@1.4381181,103.7888233,3a,75y,134.09h,62.41t/data=!3m6!1e1!3m4!1szRCz2s5n27_WpqGfctBupA!2e0!7i16384!8i8192",
  },
  {
    Title: "Traffic Light 7",
    Long: 103.787213,
    Lat: 1.437625,
    Description: "`=||",
    "Red timing": 35,
    "Green timing": 35,
    Link: "https://www.google.com/maps/@1.4374825,103.7872641,3a,75y,343.21h,59.19t/data=!3m6!1e1!3m4!1ssoiTwhV3tSAfIjD4SEfK8g!2e0!7i16384!8i8192",
  },
  {
    Title: "Traffic Light 8",
    Long: 103.808216,
    Lat: 1.445679,
    Description: "<#>",
    "Red timing": 60,
    "Green timing": 60,
    Link: "https://www.google.com/maps/@1.4456078,103.8081699,3a,75y,295.73h,56.64t/data=!3m7!1e1!3m5!1s7q2Zt6FxLCAuMzjTQeDNIQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D7q2Zt6FxLCAuMzjTQeDNIQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D179.32768%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  },
  {
    Title: "Traffic Light 9",
    Long: 103.807534,
    Lat: 1.439402,
    Description: "<=||",
    "Red timing": 30,
    "Green timing": 30,
    Link: "https://www.google.com/maps/@1.439278,103.8077461,3a,75y,315.57h,92.58t/data=!3m7!1e1!3m5!1slhaCRuQ1Yp7T3-mcv6Neew!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DlhaCRuQ1Yp7T3-mcv6Neew%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D322.2711%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  },
  {
    Title: "Traffic Light 10",
    Long: 103.803093,
    Lat: 1.438828,
    Description: "#",
    "Red timing": 45,
    "Green timing": 45,
    Link: "https://www.google.com/maps/@1.4388483,103.8030394,3a,75y,204.39h,90t/data=!3m7!1e1!3m5!1s0SfyN29HHpOqV_fI2lPeBQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D0SfyN29HHpOqV_fI2lPeBQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D68.48648%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  },
  // {
  //   Title: "Traffic Light 11",
  //   Long: 103.803261,
  //   Lat: 1.436151,
  //   Description: "`=||",
  //   "Red timing": 35,
  //   "Green timing": 35,
  //   Link: "https://www.google.com/maps/@1.4360744,103.8032456,3a,75y,6.23h,87.12t/data=!3m7!1e1!3m5!1skckfMC6ltplbROs-qX0yNA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DkckfMC6ltplbROs-qX0yNA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D46.969673%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 12",
  //   Long: 103.802261,
  //   Lat: 1.435101,
  //   Description: "`=||",
  //   "Red timing": 35,
  //   "Green timing": 35,
  //   Link: "https://www.google.com/maps/@1.435208,103.8022933,3a,75y,188.1h,62.42t/data=!3m7!1e1!3m5!1sB5a0sJFwytcjKcL7JJjHSw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DB5a0sJFwytcjKcL7JJjHSw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D258.19946%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 13",
  //   Long: 103.801538,
  //   Lat: 1.43315,
  //   Description: "<#>",
  //   "Red timing": 60,
  //   "Green timing": 60,
  //   Link: "https://www.google.com/maps/@1.4332024,103.8016122,3a,75y,189.5h,86.71t/data=!3m7!1e1!3m5!1ssob4feKnkfKApmxAqTMI8g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Dsob4feKnkfKApmxAqTMI8g%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D179.61127%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 14",
  //   Long: 103.799259,
  //   Lat: 1.430429,
  //   Description: "`=||",
  //   "Red timing": 35,
  //   "Green timing": 35,
  //   Link: "https://www.google.com/maps/@1.4304801,103.7993592,3a,75y,244.5h,75.55t/data=!3m7!1e1!3m5!1szJFzvByBrMZ9p4sDSRM6pQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DzJFzvByBrMZ9p4sDSRM6pQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D59.838024%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 15",
  //   Long: 103.797041,
  //   Lat: 1.431766,
  //   Description: "`=||",
  //   "Red timing": 35,
  //   "Green timing": 35,
  //   Link: "https://www.google.com/maps/@1.4318107,103.7969841,3a,75y,115.26h,69.05t/data=!3m7!1e1!3m5!1si-7fl1i1gl6oYDpoLdVb1g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Di-7fl1i1gl6oYDpoLdVb1g%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D124.72016%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 16",
  //   Long: 103.794927,
  //   Lat: 1.433809,
  //   Description: "<#>",
  //   "Red timing": 60,
  //   "Green timing": 60,
  //   Link: "https://www.google.com/maps/@1.4338454,103.7949686,3a,74.1y,72.15h,82.71t/data=!3m6!1e1!3m4!1sbFQyoUH07LSYvBhrZRoPdA!2e0!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 17",
  //   Long: 103.790937,
  //   Lat: 1.435303,
  //   Description: "`=||",
  //   "Red timing": 35,
  //   "Green timing": 35,
  //   Link: "https://www.google.com/maps/@1.4353492,103.791012,3a,53.3y,107.41h,76.64t/data=!3m7!1e1!3m5!1sJecEemALTYkGTHWIlpsHJg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DJecEemALTYkGTHWIlpsHJg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D141.84128%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 18",
  //   Long: 103.788604,
  //   Lat: 1.435042,
  //   Description: "<#>",
  //   "Red timing": 60,
  //   "Green timing": 60,
  //   Link: "https://www.google.com/maps/@1.4349798,103.7885293,3a,48y,219.88h,89.24t/data=!3m6!1e1!3m4!1s65x2OtMtdfajAz0ak_0mOw!2e0!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 19",
  //   Long: 103.785375,
  //   Lat: 1.434437,
  //   Description: "<=||",
  //   "Red timing": 45,
  //   "Green timing": 45,
  //   Link: "https://www.google.com/maps/@1.4345115,103.7852103,3a,75y,55.03h,70.82t/data=!3m6!1e1!3m4!1snK9UfrsSJxGiJjPlykOqXQ!2e0!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 20",
  //   Long: 103.783295,
  //   Lat: 1.435306,
  //   Description: "<#>",
  //   "Red timing": 60,
  //   "Green timing": 60,
  //   Link: "https://www.google.com/maps/@1.4353214,103.7832305,3a,82.4y,280.55h,73.65t/data=!3m7!1e1!3m5!1sR0nnisTnY0rtpWTACeB4eA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DR0nnisTnY0rtpWTACeB4eA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D296.06158%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 21",
  //   Long: 103.782725,
  //   Lat: 1.437844,
  //   Description: "`=||",
  //   "Red timing": 35,
  //   "Green timing": 35,
  //   Link: "https://www.google.com/maps/@1.4379813,103.7827487,3a,75y,136.55h,93.22t/data=!3m6!1e1!3m4!1saTGnMh-TKwvdoF-ybDmVcQ!2e0!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 22",
  //   Long: 103.785052,
  //   Lat: 1.441135,
  //   Description: "<#>",
  //   "Red timing": 60,
  //   "Green timing": 60,
  //   Link: "https://www.google.com/maps/@1.4410176,103.7848711,3a,75y,41.49h,89.49t/data=!3m7!1e1!3m5!1s-O-IfMMDe27mOnt7Hiz2Mg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D-O-IfMMDe27mOnt7Hiz2Mg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D148.24266%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 23",
  //   Long: 103.788158,
  //   Lat: 1.443614,
  //   Description: "<#>",
  //   "Red timing": 60,
  //   "Green timing": 60,
  //   Link: "https://www.google.com/maps/@1.4435315,103.7883085,3a,75y,260.96h,73.27t/data=!3m7!1e1!3m5!1s3q2EXbAg9j2wAcYiD0-tPA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D3q2EXbAg9j2wAcYiD0-tPA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D292.01117%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 24",
  //   Long: 103.792452,
  //   Lat: 1.446083,
  //   Description: "<#>",
  //   "Red timing": 60,
  //   "Green timing": 60,
  //   Link: "https://www.google.com/maps/@1.4459856,103.792343,3a,75y,43.9h,82.16t/data=!3m7!1e1!3m5!1sBFIF8KVoglhqy7C91Tepcw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DBFIF8KVoglhqy7C91Tepcw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D20.963028%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 25",
  //   Long: 103.796887,
  //   Lat: 1.447519,
  //   Description: "<#>",
  //   "Red timing": 60,
  //   "Green timing": 60,
  //   Link: "https://www.google.com/maps/@1.447553,103.7969199,3a,75y,327.07h,81.22t/data=!3m7!1e1!3m5!1sCGbqtU7MEnTIlG1OQS3w_Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DCGbqtU7MEnTIlG1OQS3w_Q%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D182.9172%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 26",
  //   Long: 103.795357,
  //   Lat: 1.441653,
  //   Description: "#",
  //   "Red timing": 45,
  //   "Green timing": 45,
  //   Link: "https://www.google.com/maps/@1.4416187,103.7953596,3a,75y,28.02h,79.99t/data=!3m7!1e1!3m5!1s_eJR3dqmEMeFo1ifmCYXCQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D_eJR3dqmEMeFo1ifmCYXCQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D158.48006%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 27",
  //   Long: 103.795855,
  //   Lat: 1.43687,
  //   Description: "#",
  //   "Red timing": 45,
  //   "Green timing": 45,
  //   Link: "https://www.google.com/maps/@1.4371294,103.7957769,3a,75y,137.34h,82.97t/data=!3m7!1e1!3m5!1sOVXaCnb9Gri4U5KSLmdZUQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DOVXaCnb9Gri4U5KSLmdZUQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D131.13077%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
  // {
  //   Title: "Traffic Light 28",
  //   Long: 103.802879,
  //   Lat: 1.450327,
  //   Description: "<#>",
  //   "Red timing": 120,
  //   "Green timing": 60,
  //   Link: "https://www.google.com/maps/@1.4503403,103.8029501,3a,75y,23.56h,95.54t/data=!3m7!1e1!3m5!1s3ls2WY1V9GFpOYgfg4mfAA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D3ls2WY1V9GFpOYgfg4mfAA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D264.4928%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
  // },
];

// require("../TL_locations_Final.json");
function changeColor() {
  var trafficArr = document.querySelectorAll("img");
  // console.log(trafficArr);
  /*   var i = 1;
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
  } */
}

function getIframe() {
  const myIframe = document.getElementById("frame");
  const iframeWindow = myIframe.contentWindow;
  const iframeDocument = myIframe.contentDocument;
  console.log(myIframe);
  console.log(iframeDocument);
  console.log(iframeWindow);
}

//var traffic1 = setInterval(changeColor, 100);

// Getting the light timings
var timingArr = [];
var boolArr = [];
for (var i = 0; i < data.length; i++) {
  timingArr.push([data[i]["Red timing"], data[i]["Green timing"]]);
  boolArr.push(true);
}
// trying to get the img from the iframe to edit the colour

// console.log(iframeDocument)
// console.log(iframeWindow)
// var divArr = iframeWindow.document.getElementsByTags("DIV");
// console.log(divArr)
// var imgArr = divArr.getElementsByTagName("IMG");
// console.log(imgArr)
// console.log(timingArr[0])

// timer for color change //
class PinTime {
  constructor(greenTime, redTime, bool) {
    this.greenTime = greenTime;
    this.redTime = redTime;
    this.bool = bool;
  }
  startTimer(x) {
    var greenSec = this.greenTime;
    var greenMin = 0,
      redMin = 0;

    while (greenSec >= 60) {
      greenMin++;
      greenSec -= 60;
    }
    var redSec = this.redTime;
    var redMin = 0;
    while (redSec >= 60) {
      redMin++;
      redSec -= 60;
    }

    var sec = greenSec;
    var minutes = greenMin;
    var counter = 0;

    setInterval(function () {
      changeColor();
      getIframe();
      var timer = document.getElementById("div" + x);
      if (sec < 10) {
        sec = "0" + sec;
      }
      if (minutes < 10) {
        minutes = "0" + parseInt(minutes);
      } else {
        minutes = minutes;
      }
      //console.log(sec);
      timer.innerHTML = minutes + " : " + sec;
      sec = parseInt(sec) - 1;
      if (sec <= 0) {
        sec = 59;
        //console.log(minutes);
        minutes = parseInt(minutes) - 1;
        if (minutes == -1) {
          counter++;
          if (counter > 1) {
            minutes = greenMin;
            sec = greenSec;
            counter -= 2;
          } else {
            minutes = redMin;
            sec = redSec;
          }
          // if (switching == true) {
          //   stop[1 - 1] = true;
          //   switching = false;
          // } else {
          //   stop[1 - 1] = false;
          //   switching = true;
          // }
        }
      }
    }, 1000);
  }
}
var PinObjArr = [];
window.onload = function () {
  for (var i = 0; i < timingArr.length; i++) {
    PinObjArr.push(new PinTime(timingArr[i][1], timingArr[i][0], boolArr[i]));
  }
  for (var x = 0; x < PinObjArr.length; x++) {
    PinObjArr[x].startTimer(x);
  }
  createTimer();
  changeColor();
  // getIframe();
};

function createTimer() {
  var timerDiv = document.getElementById("timers");
  for (var i = 0; i < timingArr.length; i++) {
    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "d-flex");
    var timer1 = document.createElement("div");
    timer1.setAttribute("class", "timer1");
    var timer2 = document.createElement("div");
    timer2.setAttribute("class", "timer2");
    var content1 = document.createTextNode("00:00");
    var content2 = document.createTextNode("00:00");
    timer1.appendChild(content1);
    timer2.appendChild(content2);
    div.appendChild(timer1);
    div.appendChild(timer2);
    timerDiv.appendChild(div);
  }
}
/*
  var sec = 70;
  var switching = true;

  var sec2 = 190;
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
 */

// var greenSec = this.greenTime;
//     var greenMin = 0,
//       redMin = 0;

//     while (greenSec >= 60) {
//       greenMin++;
//       greenSec -= 60;
//     }

//     while (this.redTime >= 60) {
//       redMin++;
//       this.redTime -= 60;
//     }
//     var redSec = this.redTime;

//     var sec = greenSec;
//     var minutes = greenMin;
//     setInterval(function () {
//       changeColor();
//       var timer = document.getElementById("timer1");
//       if (sec < 10) {
//         sec = "0" + sec;
//       }
//       //console.log(sec);
//       timer.innerHTML = minutes + " : " + sec;
//       sec = parseInt(sec) - 1;
//       if (sec <= 0) {
//         sec = 59;
//         console.log(minutes);
//         minutes = parseInt(minutes) - 1;
//         if (minutes == -1) {
//           minutes = redMin;
//           sec = redSec;
//           if (switching == true) {
//             stop[1 - 1] = true;
//             switching = false;
//           } else {
//             stop[1 - 1] = false;
//             switching = true;
//           }
//         }
//       }
//     }, 100);
