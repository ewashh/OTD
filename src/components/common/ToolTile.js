import React from 'react';

function ToolTile(props){
    return (
        <li className="tool-tile">
            <a href={`${props.link}?ref=onlinetool.directory`} target="_blank">
                <div>
                    <div className="img-wrapper" style={{backgroundImage: `url(${props.image || "/images/logos/default.svg"})`}}></div>
                    <h2>{props.name}</h2>
                    <p>{props.shortDescription}</p>
                </div>
            </a>
        </li>
    )
}

export default ToolTile;