import React from 'react';
import { useFetch } from "./../hooks";
import { HashLink } from 'react-router-hash-link';

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
            <a href="/directory" className="btn big">Browse directory</a>
        </>
    )
}

export default HomeHeader;