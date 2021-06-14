import React from 'react'

function Form() {
    return (
        <div>
            <footer>

                <h1>Keep In Touch</h1>
                <div className="form-container">


                    <div className="logos-left">
                        <span>Contact us and we will get back to you within 24 hours.</span><br />
                        <br />
                        <i className="fas fa-briefcase" >  Company Name</i><br />
                        <i className="fas fa-phone-alt">  +256 778 800 900</i><br />
                        <i className="far fa-envelope-open">  company.gmail.com</i><br />
                    </div>
                    <div className="form-right">
                        <form action="">

                            <input type="text" placeholder="Name" /> <br /> <br />
                            <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
                            <br /><br />
                            <button>Send</button>
                        </form>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Form
