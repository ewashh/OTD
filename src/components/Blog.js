import React, { useEffect, useRef, useState } from 'react';
import Header from './common/Header';
import BlogTile from './common/BlogTile';
import { createClient } from 'contentful';

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

function Blog() {
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
          <Header>
              <h1>Blog</h1>
          </Header>
          <main className="wrapper">
            <ul className="blog-list">
            {
              posts.length ? 
              posts.map(post => {
                return <BlogTile title={post.fields.title} shortDescription={post.fields.shortDescription}
                dateUpdated={post.sys.updatedAt}
                slug={post.fields.slug}
                thumbnail={post.fields.thumbnail?.fields.file}
                />;
              }) : 
              <p>No posts found.</p>
            }
            </ul>
          </main>
      </>
  )
}

export default Blog;