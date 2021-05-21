import dotenv from 'dotenv';
import pkg from 'react-router-sitemap';
const { sitemapBuilder, paramsApplier } = pkg;
import path from 'path'; // add path which will be needed for file write
import fs from 'fs'; // import file system object
import getPosts from '../getPosts.js'

const routes = [
    '/',
    '/directory',
    '/blog/:slug',
    '/blog',
    '/submit-a-tool',
    '/contact',
    '/cookie-policy',
    '/privacy-policy',
]

dotenv.config({
    path: '../../.env'
})

// use your website root address here. Optimally you can
// include dev and production enviorenments with variable
const hostname = 'https://onlinetool.directory';

// define our destination folder and sitemap file name
const dest = path.resolve('./public', 'sitemap.xml');

// Retrieve the post titles array ['post-title-1', 'post-title-2', ...]

const ppppposts = async () => {
    return await getPosts()
}

const posts = ppppposts().then((a) => {
    const slugs = a.map((v)=>({ 
        slug: v.fields.slug,
    }))
    const posts = slugs.map(function(item) {
        return item['slug'];
    });

    // Replace :slug with post titles
    const config = {
        '/blog/:slug': [
            { slug: posts },
        ],
    };
        
    // Merge our route paths with config pattern    
    const paths = paramsApplier(routes, config);

    // Generate sitemap and return Sitemap instance
    // paste new paths constant with hostname
    const sitemap = sitemapBuilder(hostname, paths);

    // write sitemap.xml file in /public folder
    // Access the sitemap content by converting it with .toString() method
    fs.writeFileSync(dest, sitemap.toString());

});
