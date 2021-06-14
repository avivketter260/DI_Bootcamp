// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom 
//object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch = function () {
        return `${this.uploader} watched all ${this.time}sec of ${this.title}!`
    }
}

let newVideo = new Video('My Video','Aviv Ketter',120)
newVideo.watch()
//  console.log(newVideo)
let secondNewVideo= new Video('Dog Poop On Baby Face','BigBud',220)
let thiredNewVideo= new Video('Dog Poop On Baby Face','BigBud',220)
let foureNewVideo= new Video('Dog Poop On Baby Face','BigBud',220)
let fiveNewVideo= new Video('Dog Poop On Baby Face','BigBud',220)
secondNewVideo.watch()
let store=[]

store.push({1: newVideo.watch()},{2:secondNewVideo.watch()},{3:thiredNewVideo.watch()},{4:foureNewVideo.watch()},{5:fiveNewVideo.watch()});
let disply= store.map((item)=>{
    return item
})
console.log(disply)