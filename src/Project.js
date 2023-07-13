import React from "react"

export default function Project(props){
    return (
        <div className="projects--container blue">
            <img className="projects--back" src="./back.png" onClick={() => props.setSelectedProjectId(-1)} />
            <img className="projects--thumbnail" src={props.thumbnail} />
            <div className="projects--links">
                <a href={props.github}>Github Repository</a>
                <span> | </span>
                <a href={props.demo}>Demonstration Video</a>
            </div>
            <p className="projects--desc">{props.desc}</p>
        </div>
    )
}