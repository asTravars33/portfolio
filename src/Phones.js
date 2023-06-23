import React from "react"
import phone_data from "./phone_data.js"

export default function Phones(props){

    const [rotation, setRotation] = React.useState(0);

    // Create array of html components
    const phone_pics = phone_data.map(phone => {
        if(phone.id%4==0){
            /* front phone */
            return (
                <div className="phones--front">
                    <img className="phones--case" src="./frontcase.png" />
                    <img className="phones--thumbnail" src={phone.thumbnail} />
                </div>
            )
        }
        if(phone.id%4==1){
            /* left phone */
            return (
                <div className="phones--left">
                    <img className="phones--img" src="./leftcase.png" />
                </div>
            )
        }
        if(phone.id%4==2){
            /* right phone */
            return (
                <div className="phones--right">
                    <img className="phones--img" src="./rightcase.png" />
                </div>
            )
        }
        return (
            <div className="phones--back">
                <img className="phones--img" src="./backcase.png" />
            </div>
        )
    })

    // Select the right four-set of phones to display
    const display = phone_pics.slice(rotation, rotation+4);

    // Rendering
    return (
        <div className="phones--div">
            <img className="phones--background" src="./phonesstand.png" />
            {display}
        </div>
        /*{display}*/
    )
}