window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myform");
    form.onsubmit = validateForm;
}

function validateForm() {
        //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var y = document.forms["myform"]["password"];
    var x = document.forms["myform"]["retypepassword"];
    if(y.value == x.value)
    {
        alert("Go to Login");
    }
    else if(y.value != x.value){
        alert("Password doesn't match ");
        return false;
    }
}
// function validateForm() {
//     var pass = document.forms["myform"]["password"];
//     var repass = document.forms["myform"]["retypepassword"];
//     if(pass.value == repass.value)
//     {
//         // myFormfunction();
//         alert("ถะ ถะ ถูกต้องนะค้าบ");
//     }
//     else if(pass.value != repass.value)
//     {
//         alert(" ผะ ผะ ผิดค้าบรหัสผิด ");
        
//         return false;
//     }
// }