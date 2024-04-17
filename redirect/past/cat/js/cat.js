const cat = document.getElementById("CAT")
const lifelog = document.getElementById("lifelog")
let hp = 5000;
console.log(`HP: ${hp}/5000`)

cat.addEventListener("click", life)

function life(){
    if(hp >= 4000){
        var swipe = new Audio("audio/LightSwipe.mp3");
        swipe.play();
        hp -= 250
        lifelog.innerHTML=`CAT SWIPES LIGHTLY!
        <br> You lose 250 HP </br>
        <br> HP: ${hp}/5000 </br>`
    } else if (hp >= 1000) {
        var swipe = new Audio("audio/Swipe.mp3");
        swipe.play();
        hp -= 1250
        lifelog.innerHTML=`CAT SWIPES!
        <br> You lose 1250 HP </br>
        <br> HP: ${hp}/5000 </br>`
    }else if(hp >= 0 ){
        var swipe = new Audio("audio/HeavyFastSwipe.mp3");
        swipe.play();
        hp -= 9999999
        lifelog.innerHTML=`CAT SWIPES WITH A MIGHTY SWIPE!
        <br>CRITICAL HIT!!!!</br>
        <br> You lose 9,999,999 HP </br>
        <br> HP: ${hp}/5000 </br>`
    }else{
    alert(`You fainted, Cat Drags you back to main page`);
    //add a url to go back to
    window.location.href="../../../index.html"
    }
}