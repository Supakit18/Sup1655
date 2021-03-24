const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
const UsernameCon = urlParams.get('username');
console.log(UsernameCon);
const passwordCon = urlParams.get('password');

window.onload = loginLoad;
function loginLoad() {
  var form = document.getElementById("LoginAss6");
  form.onsubmit = checkLogin;
}

function checkLogin() {
  var username = document.forms["LoginAss6"]["username"];
  var password = document.forms["LoginAss6"]["password"];
  if (username.value != UsernameCon || password.value != passwordCon) {
    alert(" รหัสผ่านไม่ถูกต้อง ");

    return false ;
  }
  else {
    alert("ยินดีต้อนรับ");
  }
}

