function check() {
    let pwdg=document.getElementById("pwd").value;
    let myElement = document.getElementById("myDiv");
    // console.log(pwdg);
    if(pwdg == 114514){
        alert("6");
        myElement.innerHTML = ";)";
        alert("6");
        window.location = "./6.html"
    }else if(pwdg.length == 0){
        document.getElementById("errpwd").style.display = "inline";
        document.getElementById("errpwd2").style.display = "none";
        myElement.innerHTML = ":/";
    }else{
        document.getElementById("errpwd").style.display = "none";
        document.getElementById("errpwd2").style.display = "inline";
        myElement.innerHTML = ":(";
    }
}