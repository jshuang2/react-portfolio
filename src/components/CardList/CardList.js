import React, { Component } from 'react'
import projects from "../../projects.json"
import Card from "../Card/Card"
import "./style.css"

class CardList extends Component {

    state = {
        projects
    }

    render() {
        console.log("This is the state", this.state);

        return (
            <div className="cardWrapper">
                {this.state.projects.map(project => (
                    <Card 
                    key={project.id}
                    src={project.link}
                    image={project.image}
                    />
                ))}
            </div>
        )
    }
}

export default CardList
