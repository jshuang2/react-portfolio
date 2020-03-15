import React, {useState} from 'react'

function Form() {

    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = event => {
        event.preventDefault();
        if(!state.name || state.email || state.message) return;
        setState({
            name: "",
            email: "",
            message: ""
        })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input type="text" className="name" name="name" value={state.name} placeholder="Name" onChange={event => setState(event.target.value)}></input>

                <label for="email">Email</label>
                <input type="text" className="email" name="email" value={state.email} placeholder="Email" onChange={event => setState(event.target.value)}></input>

                <label for ="message">Message</label>
                <input type="text" className="message" name="message" value={state.message} placeholder="Message" onChange={event => setState(event.target.value)}></input>
            </form>
        </div>
    )
}

export default Form