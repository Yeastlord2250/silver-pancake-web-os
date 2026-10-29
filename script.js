
dragElement(document.getElementById("welcome.webos_exe"))
dragElement(document.getElementById("helloworld"))
dragElement(document.getElementById("dino.webos_exe"))
DinoGame(document.getElementById("dino.webos_exe"))

function dragElement(element) {

var initialx = 0, initialy = 0, currentx = 0, currenty = 0;

if (document.getElementById(element.id + "_header")){

    document.getElementById(element.id + "_header").onmousedown = startdrag;
} else {
    element.onmousedown = startdrag;
}



function startdrag(e) {
    e = e || window.event;
    e.preventDefault();

    initialx = e.clientX;
    initialy = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;

}


function dragElement(e) {
    e = e || window.event;
    e.preventDefault();

    currentx = initialx - e.clientX;
    currenty = initialy - e.clientY;
    initialx = e.clientX;
    initialy = e.clientY;

    element.style.top = (element.offsetTop - currenty) + "px";
    element.style.left = (element.offsetLeft - currentx) + "px";
  }




  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }


document.getElementById(element.id + "_close").addEventListener("click", function () {element.style.display = "none"});    

document.getElementById(element.id + "_open").addEventListener("click", function () {element.style.display = "block"}); 

}

function DinoGame(element) {
    const ctx = document.getElementById("dinogame").getContext("2d");

    var dinoy = 0;

    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#ffffff";
    ctx.lineWidth = 1;
    
    window.addEventListener("keydown", (jump)  => {
    if (jump.code === "Space") {
        jump.preventDefault();
        dinoy = -35;
    }
    });

    window.addEventListener("keyup", (nojump)  => {
    if (nojump.code === "Space") {
        nojump.preventDefault();
        dinoy = 0;
    }
    });

    function draw() {
    ctx.clearRect(0, 0, 305, 100);
    ctx.beginPath();
    ctx.moveTo(305, 75);
    ctx.lineTo(0, 75);
    ctx.moveTo(23, dinoy + 75);
    ctx.lineTo(23, dinoy + 40);
    ctx.lineTo(48, dinoy + 40);
    ctx.lineTo(48, dinoy + 75);
    if (dinoy == -35) {
        ctx.moveTo(23, 40);
        ctx.lineTo(48, 40);
    }
    ctx.stroke();


}
setInterval(draw, 1000/30);
}