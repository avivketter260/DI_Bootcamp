const bottelsSong = () => {
    let askUserForNumner = prompt('Type umber to begin counting down bottles');
    const userNumber = parseInt(askUserForNumner);
    if (!(userNumber)) return bottelsSong();
    let countdown = 0;
    let lessBottels;
    while (lessBottels !== 0) {
        countdown++
        lessBottels = userNumber - countdown
        if (countdown <= 1) {
            console.log(`${userNumber} bottles of beer on the wall`);
            console.log(`${userNumber} bottles of beer`)
            console.log(`Take ${countdown} down, pass it around`);
            console.log(`${lessBottels} bottles of beer`)
        } else {
            console.log(`${lessBottels} bottles of beer on the wall`);
            console.log(`${lessBottels} bottles of beer`)
            console.log(`Take ${countdown} down, pass them around`);
            console.log(`${lessBottels} bottles of beer`)
        }



    }
}

bottelsSong()