const allElemnt = document.querySelectorAll('.drumSet > *')
console.log(allElemnt)
const body = document.querySelector('body');


for (let play of allElemnt) {
console.log(play)
    if (play.className === 'drum boom') {
        play.addEventListener('click', e => {
            playDrum("./sounds/boom.wav")
        })
    }

    if (play.className === 'drum clap') {
        play.addEventListener('click', e => {
            playDrum("./sounds/clap.wav")
        })
    }

    if (play.className === 'drum hihat') {
        play.addEventListener('click', e => {
            playDrum("./sounds/hihat.wav")
        })
    }

    if (play.className === 'drum kick') {
        play.addEventListener('click', e => {
            playDrum("./sounds/kick.wav")
        })
    }

    if (play.className === 'drum openhat') {
        play.addEventListener('click', e => {
            playDrum("./sounds/openhat.wav")

        })
    }



    if (play.className === 'drum ride') {
        play.addEventListener('click', e => {
            playDrum("./sounds/ride.wav")

        })
    }

    if (play.className === 'drum share') {
        play.addEventListener('click', e => {
            playDrum("./sounds/snare.wav")
        })
    }

    if (play.className === 'drum tnik') {
        play.addEventListener('click', e => {
            playDrum("./sounds/tink.wav")
        })
    }

    if (play.className === 'drum tom') {
        play.addEventListener('click', e => {
            playDrum("./sounds/tom.wav")
        })
    }
}




// key press
let play = document.querySelectorAll('.drum');
console.log(play)


body.addEventListener('keyup', e => {
    if (e.keyCode === 65) {
        playDrum("./sounds/boom.wav")
        play[0].classList.add("playing")
        setTimeout(function () {
            play[0].classList.remove("playing");
        }, 100)
    }


    if (e.keyCode === 83) {
        playDrum("./sounds/clap.wav")
        play[1].classList.add("playing")
        setTimeout(function () {
            play[1].classList.remove("playing");
        }, 100)
    }

    if (e.keyCode === 68) {
        playDrum("./sounds/hihat.wav")
        play[2].classList.add("playing")
        setTimeout(function () {
            play[2].classList.remove("playing");
        }, 100)
    }
    if (e.keyCode === 70) {
        playDrum("./sounds/kick.wav")
        play[3].classList.add("playing")
        setTimeout(function () {
            play[3].classList.remove("playing");
        }, 100)
    }
    if (e.keyCode === 71) {
        playDrum("./sounds/openhat.wav")
        play[4].classList.add("playing")
        setTimeout(function () {
            play[4].classList.remove("playing");
        }, 100)
    }
    if (e.keyCode === 72) {
        playDrum("./sounds/ride.wav")
        play[5].classList.add("playing")
        setTimeout(function () {
            play[5].classList.remove("playing");
        }, 100)
    }
    if (e.keyCode === 74) {
        playDrum("./sounds/snare.wav")
        play[6].classList.add("playing")
        setTimeout(function () {
            play[6].classList.remove("playing");
        }, 100)
    }

    if (e.keyCode === 75) {
        playDrum("./sounds/tink.wav")
        play[7].classList.add("playing")
        setTimeout(function () {
            play[7].classList.remove("playing");
        }, 100)
    }
    if (e.keyCode === 76) {
        playDrum("./sounds/tom.wav")
        play[8].classList.add("playing")
        setTimeout(function () {
            play[8].classList.remove("playing");
        }, 100)
    }

})





// play audio
function playDrum(sound) {
    let audio = new Audio(sound);
    audio.play();

}

