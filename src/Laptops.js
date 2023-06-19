import React from "react"

export default function Laptops(props){
    const laptop_data = [
        {
            id: 1,
            thumbnail: "https://i.imgur.com/dZhzaD9.jpg"
        },
        {
            id: 2,
            thumbnail: "https://i.imgur.com/dZhzaD9.jpg"
        },
        {
            id: 3,
            thumbnail: "https://i.imgur.com/dZhzaD9.jpg"
        },
        {
            id: 4,
            thumbnail: "https://i.imgur.com/dZhzaD9.jpg"
        },
        {
            id: 5,
            thumbnail: "https://i.imgur.com/dZhzaD9.jpg"
        },
        {
            id: 6,
            thumbnail: "https://i.imgur.com/dZhzaD9.jpg"
        },
        {
            id: 7,
            thumbnail: "https://i.imgur.com/dZhzaD9.jpg"
        },
        {
            id: 8,
            thumbnail: "https://i.imgur.com/dZhzaD9.jpg"
        },
        {
            id: 9,
            thumbnail: "https://i.imgur.com/dZhzaD9.jpg"
        }
    ]
    const laptop_pics = laptop_data.map(laptop => {
        return (
            <div className="laptops--laptop" onClick={() => props.setSelectedProjectId(laptop.id)}>
                <img className="laptops--screen" src="./laptop.png" />
                <img className="laptops--thumbnail" src={laptop.thumbnail} />
            </div>
        )
    })
    return (
        <div className="laptops--div">
            <img className="laptops--background" src="./laptopshelves.jpg" />
            <div className="laptops--laptops">
                {laptop_pics}
            </div>
        </div>
    )
}