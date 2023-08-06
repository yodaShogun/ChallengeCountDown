const playIcon = document.querySelector("#prime")
const audioTrack = new Audio()

const backgroundTrack = (track)=>{
    audioTrack.src =  track
    audioTrack.loop = true
}

playIcon.addEventListener('click',()=>{
    playIcon.style.display = "none"
    backgroundTrack("challenge.mp3")
    audioTrack.play()
})

setInterval(()=>{
    let currentDate = new Date().getTime()
    let challengeDate =  new Date("Aug 5, 2023 23:59:59").getTime()

    if(currentDate >= challengeDate){
        document.querySelector('h2').innerHTML =  " The Challenge Is Started"
        audioTrack.pause()
        backgroundTrack("coding.mp3")
        audioTrack.play()
    }else{

        let timeElapsed = challengeDate - currentDate

        let daysLeft = Math.floor(timeElapsed / (1000*60*60*24))
        let hoursLeft = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutesLeft = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        let secondsLeft = Math.floor((timeElapsed % (1000 * 60)) / 1000);
        document.querySelector('h2').innerHTML =  daysLeft+" Days "+hoursLeft+" Hrs "+minutesLeft+" M "+secondsLeft+" S"
    }


    }, 1000)
