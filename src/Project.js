import React from "react"

export default function Project(props){
    function getTags(tagsList){
        const tags = tagsList.split(' ');
        return tags.map( elem => <div className="tag-div">
            <p>{elem}</p>
        </div>)
    }
    return (
       /* <div className="projects--container blue">
            <img className="projects--back" src="./back.png" onClick={() => props.setSelectedProjectId(-1)} />
            <img className="projects--thumbnail" src={props.thumbnail} />
            <div className="projects--links">
                <a href={props.github}>Github Repository</a>
                <span> | </span>
                <a href={props.demo}>Demonstration Video</a>
            </div>
            <p className="projects--desc">{props.desc}</p>
        </div>*/
        <div className="projects--container blue">
            <img className="projects--back" src="./back.png" onClick={() => props.setSelectedProjectId(-1)} />
            <div id="carouselExampleControls" className="carousel slide projects--thumbnail" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src={props.pic1} alt="First slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={props.pic2} alt="Second slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={props.pic3} alt="Third slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={props.pic4} alt="Third slide" />
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={props.pic5} alt="Third slide" />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            <div className="projects--links">
                <a href={props.github}>Github Repository</a>
                <span> | </span>
                <a href={props.demo}>Demonstration Video</a>
            </div>
            {props.skills !== undefined && <div className="tags">
                {getTags(props.skills)}
            </div>}
            <p className="projects--desc">{props.desc}</p>
        </div>
    )
}