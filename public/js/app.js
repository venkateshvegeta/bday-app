function secondpage() {
    location.replace("conts")
}

document.getElementById('wish-vid').addEventListener('ended',myHandler,false);

function myHandler(){
    setTimeout(()=> {
        document.getElementById('wish-card').style.display ="block";
    },1000)
    setTimeout(()=> {
        document.getElementById('sig-name').style.display ="block";
        document.getElementById('sig-div').style.display ="block";
    },2000)
}