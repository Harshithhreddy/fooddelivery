
let signinBtn = document.getElementById("signinBtn");
let signupBtn = document.getElementById("signupBtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinBtn.onclick=function(){
    namefield.style.maxHeight="0";
    title.innerHTML="Sign in";
    signupBtn.classList.add("but2");
    signinBtn.classList.remove("but2");
}
signupBtn.onclick=function(){
    namefield.style.maxHeight="60px";
    title.innerHTML="Sign up";
    signupBtn.classList.remove("but2");
    signinBtn.classList.add("but2");
}

signupBtn.onclick=function(){
    window.location.href="index.html";
}