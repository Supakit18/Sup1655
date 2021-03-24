var topic1 = document.getElementById("topic1");
var comment1 = document.getElementById("comment1");
var comment2 = document.getElementById("comment2");

topic1 = 0;
comment1 = 0;
comment2 = 0;

// alert("นึกถึงใครอยู่");
// function headchatFunction() { 
    
//     var chat = document.getElementById("chat").value
//     if (headchat == 0) {
//         document.getElementById("headchat").innerText = text1
//         topic1 = chat
//         alert("อ่านไม่ตอบ //เอาใหม่");
//     }
    
// }

alert("มีอะไรที่อยากพิมพ์ไหม");
function postFunction() { 
    
    var text1 = document.getElementById("text1").value
    if (topic1 == 0) {
        document.getElementById("topic1").innerText = text1
        topic1 = text1
        alert("อ่านไม่ตอบ //เอาใหม่");
    }
    else if (comment1 == 0) {
        document.getElementById("comment1").innerText = text1
        comment1 = text1
       alert("ทักอีกๆ");
    }
    else if (comment2 == 0) {
        document.getElementById("comment2").innerText = text1
        comment2 = text1
        alert("เมนต์เเทบตายสุดท้ายเธอบอกพี่น้อง");
    }
}

function clearFunction() { 
    alert("ลบไม่ได้ช่วยให้ลืม - Ink waruntorn");
    topic1 = 0;
    comment1 = 0;
    comment2 = 0;
    document.getElementById("topic1").innerText = "";
    document.getElementById("comment1").innerText = "";
    document.getElementById("comment2").innerText = "";
    document.getElementById("text1").value = "";
}


