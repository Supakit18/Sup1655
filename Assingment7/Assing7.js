window.onload = pageLoad;

function pageLoad(){
    document.getElementById('start').onclick = startGame;
}

function startGame(){ 
    alert("Start!");
    clearScreen();
    addBox();
    timeStart();
    // JS อันไหนเสร็จทำก่อน
}

function timeStart(){
    var TIMER_TICK = 1000;
    var timer = null; //null = 0
    var second = 30; //เวลาเริ่ม
    var x = document.getElementById('clock');
    x.innerHTML = second;
    timer = setInterval(timeCount,TIMER_TICK);

    function timeCount(){
        var allbox = document.querySelectorAll("#game-layer div");
        second = second-1; //ลบเวลา
        x.innerHTML = second;

        if (allbox.length == 0 && second !=0)
        {
            alert("You win!")
            clearInterval(timer);
        }

        else if (allbox.length != 0 && second == 0){
            alert("Time Out")
            clearInterval(timer);
            clearScreen();
        }
    }
}

//สุ่มกล่อง
function addBox(){
    var numbox = document.getElementById('numbox').value;
    var gameLayer = document.getElementById('game-layer');
    var colorDrop = document.getElementById('color').value;
    for (var i =0; i<numbox;i++){
        var tempbox = document.createElement('div');
        tempbox.className = 'square'; // 
        tempbox.id = "box"+i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        tempbox.style.backgroundColor = colorDrop;
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

//ลบกล่อง
function bindBox(box){
    var gameLayer = document.getElementById('game-layer'); 
    box.onclick = function(){
    gameLayer.removeChild(box);
    }
}

//ล้าง
function clearScreen(){
    var allbox = document.querySelectorAll("#game-layer div");
    var gameLayer = document.getElementById('game-layer');
    for (var i=0;i<allbox.length;i++){
        gameLayer.removeChild(allbox[i])
    }
}