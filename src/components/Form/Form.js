import React, { useState } from 'react'

function Form() {

    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = event => {
        event.preventDefault();

        if (!state.name || !state.email || !state.message) {
            console.log("All fields must be completed!")
            return;
        }

        setState({
            name: "",
            email: "",
            message: ""
        })

    }


    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Doe" value={state.name} onChange={event => setState({...state, name: event.target.value})} />
                </div>

                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="email@gmail.com" value={state.email} onChange={event => setState({...state, email: event.target.value})}/>
                </div>

                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Your message..." value={state.message} onChange={event => setState({...state, message: event.target.value})}></textarea>
                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>

            {/* <form onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input type="text" className="name" name="name" value={state.name} placeholder="Name" onChange={event => setState(event.target.value)}></input>

                <label for="email">Email</label>
                <input type="text" className="email" name="email" value={state.email} placeholder="Email" onChange={event => setState(event.target.value)}></input>

                <label for="message">Message</label>
                <input type="text" className="message" name="message" value={state.message} placeholder="Message" onChange={event => setState(event.target.value)}></input>
            </form> */}
        </div>
    )
}

export default Form