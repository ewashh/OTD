import React from 'react';
import Header from './common/Header';

function PrivacyPolicy() {
  return (
    <>
      <Header>
        <h1>Privacy Policy</h1>
      </Header>
      <main className="post wrapper">
        <article>
          <p>This privacy policy describes how Online Tool Directory uses and protects information you give us when using our website<span> </span><a href="http://onlinetooldirectory.com/">onlinetooldirectory.com</a>. This policy will get updated as required. The latest version will always be published on this page.</p>
          <h2>What data do we collect?</h2>
          <p>The only type of information we collect using this website is your email address, which you submit using the sign up for our mailing list.</p>
          <h2>How we use this data?</h2>
          <p>Collecting this data allows us to stay in touch with you.</p>
          <h3>Specifically, we may use data:</h3>
          <ul>
          <li>To keep you up to date with what we post</li>
          <li>To send you informational emails about products you might be interested in</li>
          <li>To improve our services</li>
          </ul>
          <p>We will not share your personal information with or sell it to third-party marketers.</p>
          <h2>Our service partners</h2>
          <p>We use Klaviyo to manage email marketing subscriber lists and send emails to our subscribers.<span> </span><a href="https://www.klaviyo.com/privacy/policy">Read their privacy policy</a>.</p>
          <p>We will not share your personal information with any other third-party unless we have your permission or the law requires us to.</p>
          <p>Any personal information we hold about you is stored and processed in accordance with the UK’s Data Protection Act 1998 and the General Data Protection Regulation (GDPR).</p>
          <h2>How to make a request about your data?</h2>
          <p>You can contact us to ask us what data we hold about you, who has access to it and how it is being used. We will also delete any data about you that we hold if you ask us to.</p>
          <p>To make a request please contact us at <a href="mailto:hi@onlinetooldirectory.com">hi@onlinetooldirectory.com</a>.</p>
        </article>
      </main>
    </>
  )
}

export default PrivacyPolicy;