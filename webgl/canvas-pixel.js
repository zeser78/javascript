// var img = new Image();
// img.src = "https://mdn.mozillademos.org/files/5397/rhino.jpg";
// var canvas = document.getElementById("canvasPixel");
// var ctx = canvas.getContext("2d");
// img.onload = function() {
//   ctx.drawImage(img, 0, 0);
//   img.style.display = "none";
// };
// var color = document.getElementById("color");
// function pick(event) {
//   var x = event.layerX;
//   var y = event.layerY;
//   var pixel = ctx.getImageData(x, y, 1, 1);
//   var data = pixel.data;
//   var rgba =
//     "rgba(" +
//     data[0] +
//     ", " +
//     data[1] +
//     ", " +
//     data[2] +
//     ", " +
//     data[3] / 255 +
//     ")";
//   color.style.background = rgba;
//   color.textContent = rgba;
// }
// canvas.addEventListener("mousemove", pick);

var img = new Image();
img.src = "./rhino.jpg";
img.onload = function() {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById("canvasPixel");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  var invert = function() {
    for (var i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var grayscale = function() {
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var invertbtn = document.getElementById("invertbtn");
  invertbtn.addEventListener("click", invert);
  var grayscalebtn = document.getElementById("grayscalebtn");
  grayscalebtn.addEventListener("click", grayscale);
}
