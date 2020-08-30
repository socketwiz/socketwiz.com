
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        return <Main title="Caps Lock">
            <h2>Caps Lock</h2>

            <TwitterShare posted="23 Aug 2012"/>

            <p>To all my VI and Terminal users out there…Your not using your caps lock anyway,
                remap it to control and keep that pinky on the home row and save yourself some
                carpal tunnel, hehe:
            </p>
            <p><img src="/images/caps_lock.png" alt="Caps Lock" /></p>

            <Disqus />
        </Main>;
    }
}
