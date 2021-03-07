window.addEventListener("scroll", function(){
    var navscroll=document.getElementById('scrooll')
    navscroll.classList.toggle("fixed", window.scrollY>10)
})