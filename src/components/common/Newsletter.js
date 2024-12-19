import React from 'react';
import { Link } from 'react-router-dom';
import Input from './input/Input';
import Button from './button/Button';

function Newsletter(){
    return (
        <section id="newsletter">
            <div className="wrapper center">
                <img src="/../images/mail.png" />
                <div>
                <header className="large">Be the first to know</header>
                <p>Sign up for latest tools and guides sent to your inbox.</p>
                <form id="email_signup" className="klaviyo_gdpr_embed_Y8jB9i" action="//manage.kmail-lists.com/subscriptions/subscribe" data-ajax-submit="//manage.kmail-lists.com/ajax/subscriptions/subscribe" method="GET" target="_blank" noValidate="noValidate">
                    <input type="hidden" name="g" value="Y8jB9i" />
                    <div className="input-group">
                    <Input className="" type="email" name="email" placeholder="Your best email" />
                    </div>
                    <small>We value your <Link to="/privacy-policy">privacy</Link> and won't misuse your data.</small>
                    <div className="klaviyo_messages">
                        <small className="success_message"></small>
                        <small className="error_message"></small>
                    </div>
                    <div className="klaviyo_form_actions">
                        <Button type="submit" text="Subscribe" color="red" size="big"></Button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;