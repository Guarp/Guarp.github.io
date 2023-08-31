function check() {
    let pwdg=document.getElementById("pwd").value;
    // console.log(pwdg);
    if(pwdg == 114514){
        alert("密码正确！！！");
        window.location = "./6.html"
    }else if(pwdg.length == 0){
        document.getElementById("errpwd").style.display = "inline";
        document.getElementById("errpwd2").style.display = "none";
    }else{
        document.getElementById("errpwd").style.display = "none";
        document.getElementById("errpwd2").style.display = "inline";
    }
}
