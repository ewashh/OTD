import React, { useState } from 'react';
import HomePage from './components/homePage/HomePage';
import Directory from './components/Directory';
import PageNotFound from './components/PageNotFound';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import SubmitATool from './components/SubmitATool';
import Contact from './components/Contact';
import CookiePolicy from './components/CookiePolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import Newsletter from './components/common/Newsletter';
import Footer from './components/common/Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  const [newsletter, setNewsletter] = useState ({
      firstNname: '',
      email: ''
  });

  function handleChange(target) {
    setNewsletter({
      ...newsletter,
      [target.name]: target.value
    });
  }

  return (
      <Router forceRefresh={true}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/directory" component={Directory} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/blog/" component={Blog} />
          <Route path="/submit-a-tool" component={SubmitATool} />
          <Route path="/contact" component={Contact} />
          <Route path="/cookie-policy" component={CookiePolicy} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route component={PageNotFound} />
        </Switch>
        <Newsletter newsletter={newsletter} onChange={handleChange} />
        <Footer />
      </Router>
  );
}

export default App;