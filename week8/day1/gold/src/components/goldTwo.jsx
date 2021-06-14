import React from 'react'

// function GoldTwo() {
//     const object = {
//         first_name: 'Bob',
//         last_name: 'Dylan'
//     };
//     const data = {
//         image: "https://images-na.ssl-images-amazon.com/images/I/910y3OPZItL._AC_SL1500_.jpg",
//         cardTitle: "Bob Dylan",
//         cardDescription: "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
//         button: {
//           url: "https://en.wikipedia.org/wiki/Bob_Dylan",
//           label: "Go to wikipedia"
//         }
//       };
//     return (
//         <div className="card m-5" style={{width: '30rem'}}>
//         <img className="card-img-top" src={data.image} alt="Card image cap" />
//         <div className="card-body">
//           <h5 className="card-title">{data.cardTitle}</h5>
//           <p className="card-text">{data.cardDescription}.</p>
//           <a href={data.url} class="btn btn-primary">Go to wikipedia</a>
//         </div>
//       </div>
//     )
// }
// export default GoldTwo

function GoldTwoE3() {
 
    const animals = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];
    const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];
    return (
        <div>
            <ul className="list-group">

                {

planets.map((res,i) => {
                        return <li className="list-group-item list-group-item-action" key={i} >{res}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default GoldTwoE3


