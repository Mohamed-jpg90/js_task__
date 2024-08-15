
 
var allproducts = document.querySelectorAll(".btn2")
var div = document.querySelector("#broducts")
var button = document.querySelector("#btn7")
var show = document.querySelector("#all")

var total = 0

allproducts.forEach(function(item) {
  item.onclick = function() {
    var price = +(item.getAttribute("price"))
        total += price;
        div.innerHTML += item.textContent + " - "
    if (div.innerHTML != "") { 
        
      button.style.display = "block"
    } 
  };
});

button.onclick = function() { 

show.style.display="block" 
show.innerHTML=total
 
};

