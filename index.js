var x =document.getElementById("xmark")
x.addEventListener("click" , function(){
     var bar =document.getElementById("top")
     bar.classList.remove("add")
     bar.classList.add("remove")
})