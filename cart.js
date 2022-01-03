var arr = localStorage.getItem("array");
arr = arr.split(",").map(Number);
var h1 = document.createElement("h1");
h1.textContent = `Total items ${arr[arr.length-2]}`;
var totalprice = document.createElement("h1");
totalprice.textContent = `Total price ${(arr[arr.length-2])*250}`;
var maindiv = document.querySelector(".cart2");

maindiv.append(h1,totalprice);

