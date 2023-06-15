import laptop_data from "./laptop_data.js"

export default function Laptops(props){
    laptop_pics = laptop_data.map(laptop => {
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
            <img className="laptops--background" src="./laptopshelves.png" />
            {laptop_pics}
        </div>
    )
}