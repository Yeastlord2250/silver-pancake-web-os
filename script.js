
dragElement(document.getElementById("welcome.webos_exe"))
dragElement(document.getElementById("helloworld"))



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