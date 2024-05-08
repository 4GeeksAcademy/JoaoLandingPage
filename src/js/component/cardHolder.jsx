import React from "react";
import {Card} from "./card.jsx"

//always components with capital letter
export const CardHolder = () => {

    const dataSet = [
        {
            title: "anyTitle",
            content: "mycontent",
            foot: "This is my footer",
            img: "https://static.toiimg.com/photo/101136807.cms"
        },
        {
            title: "anyTitle",
            content: "mycontent",
            foot: "This is my footer",
            img: "https://www.designeatrepeat.com/wp-content/uploads/2020/06/cake-batter-icecream-sq.jpg"
        },
        {
            title: "anyTitle",
            content: "mycontent",
            foot: "This is my footer",
            img: "https://carveyourcraving.com/wp-content/uploads/2021/06/chocolate-icecream-in-an-icecream-maker.jpg"
        },
        {
            title: "anyTitle",
            content: "mycontent",
            foot: "This is my footer",
            img: "https://www.allrecipes.com/thmb/SI6dn__pfJb9G5eBpYAqkyGCLxQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg"
        }
    ]
    //<> ----> React fragment
    return (
        <div className="d-flex">
        
        {
            dataSet.map ((el, i) => <Card key = {i} data = {el} />)
        }

        </div>
    )
}

