import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <footer>
            <div className="wrapper">
                <span>© OnlineToolDirectory</span>
                <nav>
                    <ul>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/cookie-policy">Cookie Policy</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;