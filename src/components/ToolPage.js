import React from 'react';
import Header from './common/Header';
import { useFetch } from "./hooks";

function ToolPage() {
  const [data, loading] = useFetch(
    "/content.json"
  );

  return (
      <>
          <Header>
              <h1>Title</h1>
          </Header>
          <main className="wrapper" id="scroll-container">
            {loading ? (
              <small>Loading...</small>
            ) : (
              data.tools.slice(0,1).map(({ name, shortDescription, link, image }) => (              
                <p>{shortDescription}</p>   
              ))
            )}
          </main>
      </>
  )
}

export default BlogPost;