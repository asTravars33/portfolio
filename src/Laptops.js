import data from "./data.js"

export default function Laptops(props){
    laptop_pics = data.map(laptop => {
        /* host the thumbnail images online */
        return (
            <div className="laptops--laptop" onClick={props.setSelectedProjectId(laptop.id)}>
                <img className="laptops--screen" src="./laptop.jpg" />
                <img className="laptops--thumbnail" src={laptop.thumbnail} />
            </div>
        )
    })
    return (
        <div className="laptops--div">
            {laptop_pics}
        </div>
    )
}