
var x =document.getElementById("xmark")
x.addEventListener("click" , function(){
     var bar =document.getElementById("top")
     bar.classList.remove("add")
     bar.classList.add("remove")
})
var checkbox = document.getElementsByName("occasion")

checkbox[0].addEventListener("click", function () {
    var product01 = document.querySelector(".product01")
    var product02 = document.querySelector(".product02")
    var product03 = document.querySelector(".product03")
    var product04 = document.querySelector(".product04")
    var product05 = document.querySelector(".product05")
    var product06 = document.querySelector(".product06")
    var product08 = document.querySelector(".product08")

    if (checkbox[0].checked) {
        product01.style.display = "none";
        product02.style.display = "none";
        product03.style.display = "none";
        product04.style.display = "none";
        product05.style.display = "none";
        product06.style.display = "none";
        product08.style.display = "none";



    }
    else {
        product01.style.display = "block";
        product02.style.display = "block";
        product03.style.display = "block";
        product04.style.display = "block";
        product05.style.display = "block";
        product06.style.display = "block";
        product08.style.display = "block";

    }
})
checkbox[1].addEventListener("click", function () {
    var product01 = document.querySelector(".product01")
    var product0 = document.querySelector(".product0")
    var product03 = document.querySelector(".product03")
    var product04 = document.querySelector(".product04")
    var product07 = document.querySelector(".product07")

    if (checkbox[1].checked) {
        product0.style.display = "none";
        product01.style.display = "none";
        product03.style.display = "none";
        product04.style.display = "none";
        product07.style.display = "none";
        console.log("works")



    }
    else {
        product0.style.display = "block";
        product01.style.display = "block";
        product03.style.display = "block";
        product04.style.display = "block";
        product07.style.display = "block";
        

    }
})
checkbox[2].addEventListener("click", function () {
    var product02 = document.querySelector(".product02")
    var product0 = document.querySelector(".product0")
    var product05 = document.querySelector(".product05")
    var product06 = document.querySelector(".product06")
    var product07 = document.querySelector(".product07")
    var product08 = document.querySelector(".product08")
    if (checkbox[2].checked) {
        product0.style.display = "none";
        product02.style.display = "none";
        product05.style.display = "none";
        product06.style.display = "none";
        product07.style.display = "none";
        product08.style.display = "none";


    }
    else {
        product0.style.display = "block";
        product02.style.display = "block";
        product05.style.display = "block";
        product06.style.display = "block";
        product07.style.display = "block";
        product08.style.display = "block";

    }
})

checkbox[3].addEventListener("click", function () {
    var product01 = document.querySelector(".product01")
    var product0 = document.querySelector(".product0")
    var product03 = document.querySelector(".product03")
    var product04 = document.querySelector(".product04")
    var product08 = document.querySelector(".product08")

    if (checkbox[3].checked) {
        product0.style.display = "none";
        product01.style.display = "none";
        product03.style.display = "none";
        product04.style.display = "none";
        product08.style.display = "none";
        



    }
    else {
        product0.style.display = "block";
        product01.style.display = "block";
        product03.style.display = "block";
        product04.style.display = "block";
        product08.style.display = "block";
        

    }
})
checkbox[4].addEventListener("click", function () {
    var product01 = document.querySelector(".product01")
    var product02 = document.querySelector(".product02")
    var product03 = document.querySelector(".product03")
    var product04 = document.querySelector(".product04")
    var product05 = document.querySelector(".product05")
    var product06 = document.querySelector(".product06")
    var product08 = document.querySelector(".product08")

    if (checkbox[4].checked) {
        product01.style.display = "none";
        product02.style.display = "none";
        product03.style.display = "none";
        product04.style.display = "none";
        product05.style.display = "none";
        product06.style.display = "none";
        product08.style.display = "none";



    }
    else {
        product01.style.display = "block";
        product02.style.display = "block";
        product03.style.display = "block";
        product04.style.display = "block";
        product05.style.display = "block";
        product06.style.display = "block";
        product08.style.display = "block";

    }
})

checkbox[5].addEventListener("click", function () {
    var product01 = document.querySelector(".product01")
    var product02 = document.querySelector(".product02")
    var product0 = document.querySelector(".product0")
    var product07 = document.querySelector(".product07")
    var product05 = document.querySelector(".product05")
    var product06 = document.querySelector(".product06")
    var product08 = document.querySelector(".product08")

    if (checkbox[5].checked) {
        product01.style.display = "none";
        product02.style.display = "none";
        product0.style.display = "none";
        product07.style.display = "none";
        product05.style.display = "none";
        product06.style.display = "none";
        product08.style.display = "none";



    }
    else {
        product01.style.display = "block";
        product02.style.display = "block";
        product0.style.display = "block";
        product07.style.display = "block";
        product05.style.display = "block";
        product06.style.display = "block";
        product08.style.display = "block";

    }
})
checkbox[6].addEventListener("click", function () {
    var product03 = document.querySelector(".product03")
    var product02 = document.querySelector(".product02")
    var product0 = document.querySelector(".product0")
    var product04 = document.querySelector(".product04")
    var product05 = document.querySelector(".product05")
    var product06 = document.querySelector(".product06")
    var product07 = document.querySelector(".product07")
    var product08 = document.querySelector(".product08")

    if (checkbox[6].checked) {
        product0.style.display = "none";
        product02.style.display = "none";
        product03.style.display = "none";
        product04.style.display = "none";
        product05.style.display = "none";
        product06.style.display = "none";
        product07.style.display = "none";
        product08.style.display = "none";


    }
    else {
         product0.style.display = "block";
        product02.style.display = "block";
        product03.style.display = "block";
        product04.style.display = "block";
        product05.style.display = "block";
        product06.style.display = "block";
        product07.style.display = "block";
        product08.style.display = "block";
    }
})
checkbox[7].addEventListener("click", function () {
    
    var product02 = document.querySelector(".product02")
    var product03 = document.querySelector(".product03")
    var product04 = document.querySelector(".product04")
    var product05 = document.querySelector(".product05")
    var product06 = document.querySelector(".product06")
    var product08 = document.querySelector(".product08")

    if (checkbox[7].checked) {
       
        product02.style.display = "none";
        product03.style.display = "none";
        product04.style.display = "none";
        product05.style.display = "none";
        product06.style.display = "none";
        product08.style.display = "none";



    }
    else {
        
        product02.style.display = "block";
        product03.style.display = "block";
        product04.style.display = "block";
        product05.style.display = "block";
        product06.style.display = "block";
        product08.style.display = "block";

    }
})
checkbox[8].addEventListener("click", function () {
    var product01 = document.querySelector(".product01")
    var product0 = document.querySelector(".product0")
    var product07 = document.querySelector(".product07")

    if (checkbox[8].checked) {
        product0.style.display = "none";
        product01.style.display = "none";
        product07.style.display = "none";
        



    }
    else {
        product0.style.display = "block";
        product01.style.display = "block";
        product07.style.display = "block";
        

    }
})   
var search = document.getElementById("search")
search.addEventListener("input",function(){
    var entervalue = event.target.value.toLowerCase()
    var product = document.querySelectorAll(".product")
    for(i =0 ; i < product.length; i=1+i){
   var productName = product[i]
            .querySelector("h3")
            .textContent
            .toLowerCase();

  if(productName.indexOf(entervalue)<0){
    product[i].style.display = "none";
  }else{
    product[i].style.display = "block"
    }
}
})