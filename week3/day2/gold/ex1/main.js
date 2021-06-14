/*
Display the value of the selected option.
Add an additional option to the select tag:
<option value="classic">Classic</option>
The newly added option should be selected by default.
 */
const selectAKindOfMusic = () => {
    let options = document.querySelectorAll('option')
    let selcete = document.querySelector('#genres');
    console.log(selcete)
    console.log(options)
    for (let i of options) {
        if ('selected' in i.attributes) {
           console.log(i.innerHTML)
           document.body.appendChild(document.createTextNode(i.innerHTML))
        }
    } 
    selcete.innerHTML+=`<option value="classic" selected >Classic</option>`
console.log(selcete)

}
selectAKindOfMusic()