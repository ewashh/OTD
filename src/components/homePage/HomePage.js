import React, { useEffect, useRef, useState } from 'react';
import Header from '../common/Header';
import ToolTile from '../common/ToolTile';
import BlogTile from '../common/BlogTile';
import { useFetch } from "./../hooks";
import { createClient } from 'contentful';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

const useComponentDidMount = func => useEffect(func, {});

const useComponentWillMount = willMountCallback => {
  const willMount = useRef(true);
  if (willMount.current) {
    willMountCallback();
  }
  useComponentDidMount(() => {
    willMount.current = false;
  });
};

function HomePage() {
    const [data, loading] = useFetch(
        "/content.json"
    );

    const [ posts, setPosts ] = useState([]);
    useComponentWillMount(() => {
      const client = createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN
      });
  
      client
        .getEntries({})
        .then(response => {
          console.log('response')
          console.log(response)
          setPosts(response.items);
        })
        .catch(console.error);
    });
    return (
        <>
        <Header pageTemplate="home"/>
        <section id="whats-new">
        <div id="tools" className="wrapper">
            <header>
              <span className="bigger">Recently added tools</span>
              <a className="btn min" href="/directory/">See all tools</a>
            </header>
            <ul className="tool-list">
            {loading ? (
              <small>Loading...</small>
            ) : (
              data.tools.slice(-6).reverse().map((tool) => (              
                <ToolTile name={tool.name} link={tool.link} image={tool.image} />   
              ))
            )}
            </ul>
          </div>    
          <ul className="blog-list wrapper">
            <header className="caps desktop-hidden">Latest posts</header>
            {
              posts.length ? 
              posts.slice(0, 2).map(post => {
                  return <BlogTile title={post.fields.title} shortDescription={post.fields.shortDescription}
                  dateUpdated={post.sys.updatedAt}
                  slug={post.fields.slug}
                  thumbnail={post.fields.thumbnail?.fields.file} />;
              }) : 
              <p>No posts found.</p>
            }
            <li id="more-latest-posts">
              <ul>
                <header className="caps mobile-hidden">Latest posts</header>
                {
                posts.length && 
                posts.slice(2, 5).map(post => {
                    return (
                      <li>
                        <Link to={`/blog/${post.fields.slug}/`}>
                          <time className="min caps time" dateTime={post.sys.updatedAt}>{format(post.sys.updatedAt)}</time>
                          <header className="smaller">{post.fields.title}</header>
                        </Link>
                      </li>
                    );
                })
              }
                <a className="btn min" href="/blog/">See all posts</a>
              </ul>
            </li>
          </ul>
        </section>
        <section id="why">
            <div className="wrapper">
              <header>
                <span className="caps min">Plenty of reasons why</span>
                <span className="h1">Get it done online</span>
              </header>
                <ul>
                    <li>
                        <img src="../images/small-planet.png" />
                        <header className="bigger">Do it from anywhere</header>
                        <p className="smaller">Work took you by surprise and your computer didn't follow? You can use any. All you need is a browser.</p>
                    </li>
                    <li>
                        <img src="../images/team.png" />
                        <header className="bigger">Make team work a&nbsp;breeze</header>
                        <p className="smaller">No one you can work with in the area? Using online tools, you can share them with anyone across the globe.</p>
                    </li>
                    <li>
                        <img src="../images/clean.png" />
                        <header className="bigger">Keep your computer clean</header>
                        <p className="smaller">Browser native apps don't require installing. Avoid the clutter and keep your machine working smoothly for longer.</p>
                    </li>
                </ul>
            </div>
        </section>
    </>
);
}

export default HomePage;