import React from 'react'

function goldOne() {
    return (
        <div>
            <h1>This is a Header</h1>
            <p>This is a Paragraph</p>
        <a href="http://" target="_blank" rel="noopener noreferrer">This is a Link</a>
       
       <form action="">
           <h1>This is a Form</h1>
           <label htmlFor="">Enter your name:</label>
           <input type="text" />
           <button type="submit">Submit
           </button>
       </form>
       <h4>Here a Image:</h4>
       <img src="https://images.unsplash.com/photo-1622711768193-945e72bcf118?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" srcset="" style={{height:'150px',width:'150px'}}/>
      <ul>This is a List
          <li>Coffe</li>
          <li>Tea</li>
          <li>Milk</li>
      </ul>
        </div>
    )
}

export default goldOne
