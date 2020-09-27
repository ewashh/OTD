import React, { createElement, useEffect, useRef, useState } from 'react';
import Header from './common/Header';
import { useFetch } from "./hooks";
import BlogTile from './common/BlogTile';
import { createClient } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { format } from 'timeago.js';


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

function BlogPost({match}) {
  const [ posts, setPosts ] = useState({
    current: {},
    other: []
  });

  const slug = match.params.slug;

  useComponentDidMount(() => {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
    });


    const retrievedPosts = { other: [] }
    client
      .getEntries()
      .then(response => {
        response.items.forEach((item) => {
          const retrievedPost = {
            slug: item.fields.slug,
            id: item.sys.id,
            ...item.fields,
            updatedAt: item.sys.updatedAt,
            imageUrl: item.fields.thumbnail?.fields.file.url
          }
          if (slug === retrievedPost.slug) {
            retrievedPosts.current = retrievedPost
          } else {
            retrievedPosts.other = [
              ...retrievedPosts.other,
              retrievedPost
            ]
          }
        })
        setPosts(retrievedPosts)
      })
      .catch(console.error);
  });

  const [data, loading] = useFetch(
    "/content.json"
  );

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (asset) => {
      console.log(asset)
      if (asset.data.target.fields.file.contentType === 'video/mp4') {
        return `<video src="${asset.data.target.fields.file.url}" alt="${asset.data.target.fields.title}" autoplay loop mute ></video>`
      }
      return `<img src="${asset.data.target.fields.file.url}" alt="${asset.data.target.fields.title}" />` 
    }
  },
}

const morePosts = posts.other.slice(-2)
const currentPost = posts.current
console.log('more posts', morePosts)
  return (
    <>
      {(
          <>
          <Header pageTemplate="post">
            <div>
            <div>
              <h1>{currentPost.title}</h1>
              <h2>{currentPost.shortDescription}</h2>
            </div>
            <img src={currentPost.imageUrl}/>
            </div>
          </Header>
          <main className="wrapper post"> 
            <article>
            <small className="caps smaller update"> 
              <time dateTime={currentPost.updatedAt}> {format(currentPost.updatedAt)}</time>
            </small>
            <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(currentPost.content, options)
            }}></div>
            </article>

          </main>
          </>
      )}

    <section id="read-more">
      <ul className="blog-list wrapper">
        <header className="large center">Read more from the blog</header>
        {
          morePosts.length ? 
          morePosts.map(post => {
            console.log('otherpost', post)
            return <BlogTile title={post.title} shortDescription={post.shortDescription}
            dateUpdated={post.updatedAt}
            slug={post.slug} thumbnail={post.thumbnail.fields.file}/>;
          }) : 
          <p>No posts found.</p>
        }
      </ul> 
    </section>
    </>
    );
  }

export default BlogPost;