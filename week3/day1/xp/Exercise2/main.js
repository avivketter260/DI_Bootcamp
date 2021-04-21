

 



const dom = () => {
    let firstLi = document.getElementsByClassName('list')[0].getElementsByTagName('li');
    let secondLi = document.getElementsByClassName('list')[1].getElementsByTagName('li');
    console.log(firstLi)
    //In the HTML above change the name “Pete” to “Richard”.
    firstLi[1].innerHTML = 'Richard'
    //Change each first name of the two <ul>'s to your name.
    firstLi[0].innerHTML = 'Aviv';
    secondLi[0].innerHTML = 'Aviv';
    // At the end of each <ul> add a <li> that says “Hey students”.
    ul1();
    ul2();
//Delete the name Sarah from the second <ul>.
let deleteSarah= document.getElementsByClassName('list')[1].removeChild(secondLi[1]);
//Add a class called student_list to both of the <ul>'s.
let firstUl=document.getElementsByClassName('list')[0];
secondUl= document.getElementsByClassName('list')[1];
firstUl.classList.add('student_list');
secondUl.classList.add('student_list');
//Add the classes university and attendance to the first <ul>.
firstUl.classList.add('university');
firstUl.classList.add('attendance');
}
dom()




function ul1() {
    let ul = document.getElementsByClassName("list")[0];
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Hey students"));
    ul.appendChild(li);
}
function ul2() {
    let ul = document.getElementsByClassName("list")[1];
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Hey students"));
    ul.appendChild(li);
}