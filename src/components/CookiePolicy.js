import React from 'react';
import Header from './common/Header';

function CookiePolicy() {
  return (
    <>
      <Header>
        <h1>Cookie Policy</h1>
      </Header>
      <main className="post wrapper">
        <article>
          <p>We use cookies, pixels and tags on Online Tool Directory website, which we will collectively refer to as "Cookies" in this policy. By using our website you agree to the usage of cookies as described in this Cookies Policy.</p>
          <h2>What are cookies?</h2>
          <p>Cookies are small pieces of data send from a website and stored in a user's browser. They are only created when you visit a website which uses this technology.</p>
          <h2>How do we use cookies?</h2>
          <p>We use cookies to analyse traffic across the site, to keep your personal data secure and to help us understand how you use our website, so we can keep improving your experience.</p>
          <h2>Can I remove cookies?</h2>
          <p>Your browser most likely offers settings that will allow you to decide whether to set cookies and to delete them.</p>
        </article>
      </main>
    </>
  )
}

export default CookiePolicy;