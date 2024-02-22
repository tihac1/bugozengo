var sifre1 = document.getElementById("sifre");
var sifre = 629546;
function sifreaccept(){
    var girilenps = Number(sifre1.value);
    if(girilenps == sifre){
        alert("adamsın :crown:");
        window.location.href="ozel.html";
        }
        else
        {
            alert("aptal domuz şifre bu değil")
        }
}