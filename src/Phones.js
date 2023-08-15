import React from "react"

export default function Phones(props){

    const [rotation, setRotation] = React.useState(0);

    // Create array of html components
    /*const phone_pics = phone_data.map(phone => {
        if(phone.id%4==0){
            return (
                <div className="phones--front">
                    <img className="phones--case" src="./frontcase.png" />
                    <img className="phones--thumbnail" src={phone.thumbnail} />
                </div>
            )
        }
        if(phone.id%4==1){
            return (
                <div className="phones--left">
                    <img className="phones--img" src="./leftcase.png" />
                </div>
            )
        }
        if(phone.id%4==2){
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
    })*/
    function rotate(shift){
        setRotation(prevRotation => (prevRotation+props.data.length+shift)%props.data.length);
    }
    // Rendering
    return (
        <div className="phones--div">
            <img className="phones--background" src="./phonesstand.png" />
            <img onClick={() => rotate(-1)} className="phones--arrow--left" src="./arrow-left.png" />
            <img onClick={() => rotate(1)} className="phones--arrow--right" src="./arrow-right.png" />
            <div className="phones--front" onClick={() => props.setSelectedProjectId(props.data[rotation].id)}>
                <img className="phones--case" src="./frontcase.png" />
                <img className="phones--thumbnail" src={props.data[rotation]!==undefined?props.data[rotation].thumbnail:""} />
            </div>
            <div className="phones--left">
                <img className="phones--img" src="./leftcase.png" />
            </div>
            <div className="phones--right">
                <img className="phones--img" src="./rightcase.png" />
            </div>
            <div className="phones--back">
                <img className="phones--img" src="./backcase.png" />
            </div>
        </div>
    )
}