

module.exports.setTime = ()=>{
    // Set the date we’re counting down to
    let countDownDate = new Date("September 6, 2021 00:00:00").getTime();
    // Update the count down every 1 second
    let correctTime = setInterval(function() {
      // Get today’s date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Display the result in the element with id="demo”
    console.log(days + "d " + hours + "h"
      + minutes + "m" + seconds + "s");
      console.log('until Rosh-Hashana')
      // If the count down is finished, write some tecorrectTimet
      if (distance < 0) {
        clearInterval(correctTime);
     console.log('expiared')
    } 
}, 1000);
}


// module.exports.timeConvert = (date) => {
//     let dob = date;
//     let year = Number(dob.substr(0, 4));
//     let month = Number(dob.substr(4, 2)) - 1;
//     let day = Number(dob.substr(6, 2));
//     let today = new Date();
//     let age = today.getFullYear() - year;
//     if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
//         age--;
//     }
//     return console.log(age, month, day);
// }




