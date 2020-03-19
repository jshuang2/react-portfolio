import React, { Component } from 'react'
import projects from "../../projects.json"
import Card from "../Card/Card"
import "./style.css"

class CardList extends Component {

    state = {
        projects
    }

    render() {
        console.log("This is the state", this.state.projects);

        return (
            <div className="container d-flex justify-content-center">
                <div className="cardWrapper">
                    {this.state.projects.map(project => (
                        <Card
                            key={project.id}
                            src={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default CardList
