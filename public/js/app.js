
function sendLOC() {
 navigator.geolocation.getCurrentPosition((position)=>{
        const url = 'https://google.com/maps?q='+position.coords.latitude+','+position.coords.longitude;
        location.replace(url)
    })
}