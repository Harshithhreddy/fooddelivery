// openmenu
const mobile = document.querySelector('.toggle-menu');
const mobileLink = document.querySelector('.sidebar');
const highlightWrapper = document.querySelector('.highlight-wrapper');
const filterWrapper = document.querySelector('.filterwrapper');

mobile.addEventListener("click", function() {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
});

mobileLink.addEventListener("click", function() {
    const menubars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menubars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
});

// sliding arrows
const step = 100;
const stepFilter = 60;

document.querySelector(".back").addEventListener("click", function(e) {
    e.preventDefault();
    highlightWrapper.scrollLeft -= step;
});

document.querySelector(".next").addEventListener("click", function(e) {
    e.preventDefault();
    highlightWrapper.scrollLeft += step;
});

document.querySelector(".leftarrow").addEventListener("click", function(e) {
    e.preventDefault();
    filterWrapper.scrollLeft -= stepFilter;
});

document.querySelector(".rightarrow").addEventListener("click", function(e) {
    e.preventDefault();
    filterWrapper.scrollLeft += stepFilter;
});



let cartBag=document.getElementById("cartBag");

        cartBag.onclick=function(){
            window.location.href="cart.html";
        }


function openBurgers(){
    var div=document.getElementById("hiddenburgers");
    div.style.display="block";div.scrollIntoView({ behavior: 'smooth' });

    
}

