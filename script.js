var logStat = document.getElementById("logButton");

function changeLog(){
        logStat.innerText="Log Out";
}

var defButton = document.getElementById("defRemove");
function hide(defRemove) {
    defButton.remove();
}


var addLike = 1
var text = "Likes"
var likeInc= document.getElementById("likes-butt1");

function changeLikes(){
    likeInc.innerText= addLike++ + " " + text;
    alert("Ninja has been liked!");
}


var plusLike= 1;
var likeInc2= document.getElementById("likes-butt2")
function changeLikes2(){
    likeInc2.innerText= plusLike++ + " " + text;
    alert("Ninja has been liked!");
}