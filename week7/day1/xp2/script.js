console.log('sfsdf')
fetch(`http://localhost:3001`)
.then((response) => {
    //console.log(response);
    response.json().then((data) => {
        console.log('Object:', data);
    });
});
