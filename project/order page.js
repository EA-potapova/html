function calc() {

var packs = Number(order_form.packs.value);
var classic = 600;
var colombia = 1000;
var peru = 800;
var honduras = 900;
var all = 3000;
var ground = 200;



if (document.getElementById("classic").checked) {
   order_form.Result.value = classic* Number(packs);
}

if (document.getElementById("colombia").checked) {
 order_form.Result.value = colombia* Number(packs);
}

if (document.getElementById("peru").checked) {
  order_form.Result.value = peru * Number(packs);
}

if (document.getElementById("honduras").checked) {
  order_form.Result.value =  honduras * Number(packs);
}

 if (document.getElementById("all").checked) {
  order_form.Result.value =  all * Number(packs);
}


if (document.getElementById("ground").checked) {
 order_form.Result.value =  Number(order_form.Result.value) + Number(ground);
}


}
