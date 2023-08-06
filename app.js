const playIcon = document.querySelector("#prime")
const audioTrack = new Audio()

const backgroundTrack = (track)=>{
    audioTrack.src =  track
    audioTrack.loop = true
}

playIcon.addEventListener('click',()=>{
    playIcon.style.display = "none"
    backgroundTrack("two_steps_from_hell_heart_of_courage_extended_version_mp3_15520.mp3")
    audioTrack.play()
})

setInterval(()=>{
    let currentDate = new Date().getTime()
    let challengeDate =  new Date("Sep 24, 2023 23:59:59").getTime()

    if(currentDate >= challengeDate){
        document.querySelector('h2').innerHTML =  " The Challenge Has Started"
    }else{

        let timeElapsed = challengeDate - currentDate

        let daysLeft = Math.floor(timeElapsed / (1000*60*60*24))
        let hoursLeft = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutesLeft = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        let secondsLeft = Math.floor((timeElapsed % (1000 * 60)) / 1000);
        document.querySelector('h2').innerHTML =  daysLeft+" Days "+hoursLeft+" Hrs "+minutesLeft+" M "+secondsLeft+" S"
    }


    }, 1000)
