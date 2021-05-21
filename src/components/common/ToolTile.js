import React from 'react';

function ToolTile({type, link, image, name, shortDescription}){
    return (
        <li className={type == "list" ? "tool-list-item" : "tool-tile"}>
            <a href={`${link}?ref=onlinetool.directory`} target="_blank">
                <div>
                    <div className="img-wrapper" style={{backgroundImage: `url(${image || "/images/logos/default.svg"})`}}></div>
                    <h2>{name}</h2>
                    <p>{shortDescription}</p>
                </div>
            </a>
        </li>
    )
}

export default ToolTile;