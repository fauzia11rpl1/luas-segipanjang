var panjangInput = document.querySelector(".panjang-input-field");
var lebarInput = document.querySelector(".lebar-input-field");
var rectangleButton = document.querySelector(".rectangle");
var result = document.querySelectorAll(".result");
var Luas, panjang, lebar;

function myFunction() {
  panjang = panjangInput.value;
  lebar = lebarInput.value;
  Luas = panjang * lebar;
  alert("Luasnya adalah : " + Luas);
}
