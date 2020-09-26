import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

function BlogTile({ slug, title, dateUpdated, thumbnail}){
    return (
        <li>
            <Link to={`/blog/${slug}/`}>
                <img src={thumbnail.url} />
                <div>
                    <div>
                        <time className="min caps time" dateTime={dateUpdated}>{format(dateUpdated)}</time>
                        <header>{title}</header>
                    </div>
                </div>
            </Link>
        </li>
    )
}

BlogTile.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    dateUpdated: PropTypes.string,
    thumbnail: PropTypes.shape({
        url: PropTypes.string
    })
}

BlogTile.defaultProps = {
    thumbnail: {
        url: '../images/image1.png'
    }
}

export default BlogTile;