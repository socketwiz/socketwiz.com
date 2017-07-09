
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import EmbeddedGist from '../components/gist.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        return <Main title="Vim cheat sheet">
            <h2 className="blog-post-title">Vim cheat sheet</h2>
            <TwitterShare posted="05 May 2012"/>
            <p>
                Since I have been using Vim almost exclusively lately I made myself
                a cheat sheet to help me remember some stuff.  This is certainly not
                an exhaustive list, just some things that I don’t know how to do off
                the top of my head that I wrote down and ended up getting a little
                carried away.  Just thought I would share:
            </p>

            <EmbeddedGist gist="socketwiz/2645891"></EmbeddedGist>

            <Disqus />
        </Main>;
    }
}
