setInterval(()=>{
    let currentDate = new Date().getTime()
    let challengeDate =  new Date("Aug 6, 2023 8:0:0").getTime()

    if(currentDate >= challengeDate){
        document.querySelector('h2').innerHTML =  " The Challenge Is Started"
    }else{

        let timeElapsed = challengeDate - currentDate

        let daysLeft = Math.floor(timeElapsed / (1000*60*60*24))
        let hoursLeft = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutesLeft = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
        let secondsLeft = Math.floor((timeElapsed % (1000 * 60)) / 1000);
        document.querySelector('h2').innerHTML =  daysLeft+" Days "+hoursLeft+" Hrs "+minutesLeft+" M "+secondsLeft+" S"
    }


    }, 1000)