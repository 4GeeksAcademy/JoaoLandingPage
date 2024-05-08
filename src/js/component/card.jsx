import React from "react";

//always components with capital letter
export const Card = (props) => {

    console.log(props)

    //<> ----> React fragment
    return (
        <div class="col">
            <div class="card h-100">
                <img src={props.data.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.data.title}</h5>
                    <p class="card-text">{props.data.content}</p>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary">{props.data.foot}</small>
                </div>
            </div>
        </div>
    )
}

