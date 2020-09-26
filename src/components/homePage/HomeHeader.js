import React from 'react';
import { useFetch } from "./../hooks";
import { HashLink } from 'react-router-hash-link';
import Animation from './Animation';

const slug = (text) => text.replace(' ', '-').toLowerCase();

function HomeHeader(){
    const [data, loading] = useFetch(
        "/content.json"
    );
    return (
        <>
            <h1>Curated list of <span>online tools</span> and <span>resources</span> made to help you <span>reach&nbsp;your&nbsp;goals</span></h1>
            <ul>
              {loading ? (
              <small>Loading...</small>
              ) : ( 
                data.categories.map((category) => (
                  <li className="filter min caps"><HashLink to={`/directory/#${slug(category)}`}>#{category}</HashLink></li>
                )) 
              )}
            </ul>
            <a href="/directory" className="btn big red">Browse directory</a>
            {/* 
            <img id="cursor-default" src="../images/icons/cursor-default.svg" />
            <img id="cursor-pointer" src="../images/icons/cursor-pointer.svg" />
            <img id="grid" src="../images/grid.svg" />
            <img id="dots" src="../images/dots.svg" /> */}
        </>
    )
}

export default HomeHeader;