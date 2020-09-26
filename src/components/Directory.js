import React from "react";
import { Waypoint } from 'react-waypoint';
import { useFetch } from "./hooks";
import Header from './common/Header';
import ToolTile from './common/ToolTile';

const slug = (text) => text.replace(' ', '-').toLowerCase()
function Directory() {
  const [selected, setSelected] = React.useState({ category: null });
  const [data, loading] = useFetch(
    "/content.json"
  );
  
  function scrollTo(e){
    e.preventDefault();
    window.location.hash = e.target.hash;
    setSelected({category: e.target.hash})

    let headerHeight = document.querySelector('#categories-names').offsetHeight;
    window.scrollBy({
      top: document.querySelector(e.target.hash).getBoundingClientRect().top - headerHeight,
      behavior: 'smooth'
    })

    let target = e.target.hash;
    scrollToActiveNavItem(target)
  }

  function scrollToActiveNavItem(target) {
    document.querySelector('#categories-names ul').scrollTo({
      left: document.querySelector(`a[href="${target}"]`).offsetLeft,
      behavior: "smooth"
    });
  }

  return (
      <>
        <Header>
            <h1>Directory</h1>
        </Header>
        <main id="scroll-container" className="wrapper-desktop">
          <aside id="categories-names" className="wrapper-mobile">
            <header>Browse by category</header>
              <ul>
              {loading ? (
              <small>Loading...</small>
              ) : ( 
                data.categories.map((category) => (
                  <li><a href={`#${slug(category)}`} onClick={scrollTo} className={selected.category === slug(category) ? "active" : ""}>{category}</a></li>
                )) 
              )}
              </ul>
          </aside>
          <section id="categories" className="wrapper-mobile">   
            {loading ? (
              <small>Loading...</small>
              ) : (
              data.categories.map((category) => (
                <Waypoint
                onEnter={(args) => {
                  console.log('Entered: '  + category, args)
                  setSelected({category: slug(category)});
                  scrollToActiveNavItem(`#${slug(category)}`)
                }}
                onLeave={(args) => {
                  console.log('left: '  + category, args)
                }}
                
                topOffset={(document.documentElement.clientHeight / 2) - (6.25 * (document.documentElement.clientWidth / 100))}
                bottomOffset="50%"
                >
                  <article className="category" id={slug(category)}>
                    <ul className="tool-list">
                      <header>
                        <h1>{category}</h1>
                      </header>{
                      data.tools.filter((tool) => tool.category.includes(category))
                      .map((tool, category) => (
                        <ToolTile
                        {...tool}
                        />
                      ))}
                    </ul>
                  </article>
                </Waypoint>
              ))
            )}
          </section>
        </main>
      </>
  )
}

export default Directory;
