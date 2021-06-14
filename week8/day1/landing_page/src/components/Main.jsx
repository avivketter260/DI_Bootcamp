import React from 'react'

function Main() {
    const pusme = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
       pariatur.`;
       
    return (
        <div>
                <main>
                    <div className="info">
                        <div className="small-div">
                            <i className="fas fa-4x fa-globe"></i>
                        </div>
                        <div className="big-div">
                            <h3 >Title </h3>
                            <p>{pusme}</p>
                        </div>

                    </div>
                    <div className="info greyBackgrounf">


                        <div className="small-div">
                            <i className="fas fa-4x fa-city"></i>
                        </div>
                        <div className="big-div">
                            <h3 >Title </h3>
                            <p>{pusme}</p>
                        </div>

                    </div>
                    <div className="info">
                        <div className="small-div">
                            <i class="fas fa-4x fa-coffee"></i>
                        </div>
                        <div className="big-div">
                            <h3 >Title </h3>
                            <p>{pusme}</p>
                        </div>
                    </div>
                </main>
        </div>
    )
}

export default Main
