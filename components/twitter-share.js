
import {Component} from 'react';

export default class TwitterShare extends Component {
    twitterShare(s, id) {
        if (typeof document !== 'undefined') {
            let js, fjs = document.getElementsByTagName(s)[0], p = /^http:/.test(document.location) ? 'http' : 'https';

            if(!document.getElementById(id)) {
                js = document.createElement(s);
                js.id = id;
                js.src = p+'://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }
    }
    
    render() {
        return <div>{this.twitterShare('script', 'twitter-wjs')}</div>;
    }
}
