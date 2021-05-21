import React from "react";
import Header from './common/Header';
import ToolTile from './common/ToolTile';

function ToolPage() {
  return (
      <>
        <Header>
        </Header>
        <div id="tool-page" className="wrapper-desktop">
          <section>
            <article className="wrapper-mobile">
              <h1>Photopea</h1>
              <h2>Advanced image editor. Best alternative to Photoshop.</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </article>
          </section>
          <aside className="wrapper-mobile">
            <section className="visit-site">
              <header>Visit site</header>
              <a className="smaller" href="https://photopea.com">photopea.com</a>             
            </section>
            <section>
              <header>Available plans</header>
              <ul>
                <li>Free</li>
              </ul>               
            </section>
            <section>
              <header>Discover more</header>
              <ul>
              <li className="filter min caps">#Design</li>
              </ul>
              <ul className="discover-more-tool-list">
                <ToolTile name="Figma" link="figma.com" image="/images/logos/figma.svg" shortDescription="Advanced image editor. Best alternative to Photoshop."/>
                <ToolTile name="Figma" link="figma.com" image="/images/logos/figma.svg" shortDescription="Advanced image editor. Best alternative to Photoshop."/>
                <ToolTile name="Figma" link="figma.com" image="/images/logos/figma.svg" shortDescription="Advanced image editor. Best alternative to Photoshop."/>
                <ToolTile name="Figma" link="figma.com" image="/images/logos/figma.svg" shortDescription="Advanced image editor. Best alternative to Photoshop."/>
                <ToolTile name="Figma" link="figma.com" image="/images/logos/figma.svg" shortDescription="Advanced image editor. Best alternative to Photoshop."/>
              </ul>         
            </section>
          </aside>
        </div>
      </>
  )
}

export default ToolPage;
