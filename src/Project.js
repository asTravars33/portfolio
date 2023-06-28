import React from "react"

export default function Project(props){
    return (
        <div className="app--devices blue">
            <img className="project--thumbnail" src={props.thumbnail} />
            <p className="project--links">{props.github} | {props.demo}</p>
            <p className="project--desc">{props.desc}</p>
        </div>
    )
}