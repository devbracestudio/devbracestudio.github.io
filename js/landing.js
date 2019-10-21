/*$(document).ready(function(){
    $('.header').height($(window).height());
   })
   */
function btnClick() {
    inputPhone = document.getElementById('phone');
    inputEmail = document.getElementById('email');
    inputInfo = document.getElementById('info');
    var xhr = new XMLHttpRequest();
    var json = JSON.stringify({
        phone: inputPhone.value,
        email: inputEmail.value,
        info: inputInfo.value
    });
    xhr.open("POST", 'http://127.0.0.1:3000/form', true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);
    
}