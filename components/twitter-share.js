
import {Component} from 'react';
import PropTypes from 'prop-types';

export default class TwitterShare extends Component {
    twitterShare(s, id) {
        if (typeof document !== 'undefined') {
            let js, fjs = document.getElementsByTagName(s)[0], p = /^http:/.test(document.location) ? 'http' : 'https';

            if(!document.getElementById(id)) {
                js = document.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }
    }

    componentDidMount() {
        this.twitterShare('script', 'twitter-wjs');
    }
    
    render() {
        const {posted} = this.props;
        
        return <div>
            <p className="blog-post-meta">
                <span className="glyphicon glyphicon-calendar"></span> {posted} <a href="https://twitter.com/share"
                                                                                   className="twitter-share-button"
                                                                                   data-via="socketwiz">Tweet</a>
            </p>
        </div>;
    }
}

TwitterShare.propTypes = {
    'posted': PropTypes.string
};
