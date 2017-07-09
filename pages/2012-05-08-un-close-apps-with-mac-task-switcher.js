
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        return <Main title="Un-close apps with Mac task switcher">
            <h2 className="blog-post-title">Un-close apps with Mac task switcher</h2>
            <TwitterShare posted="08 May 2012"/>

            <p>
                Everyone knows you can switch between apps with cmd-tab. You can
                even do several things on an application such as cmd-q to quit,
                cmd-h to hide or cmd-w to close. I find myself doing the latter on
                apps quite often because its easier to get to than cmd-h (at least for me).
                However thats where I get myself into trouble. If I used cmd-h instead,
                then when you cmd-tab to that app it will pop back to the foreground...not
                the case if you closed it with cmd-w. So what is one to do? It took
                me like 5 years to figure it out, but if you hold down option when
                you select an application that has been closed, it too will pop
                back to the foreground. You’ll give yourself a cramp if you try
                to do all of this with your left hand, so use your right hand to
                hold down the option key. So it goes like this. Command tab to the
                app that is closed, hold down option with your right hand, let
                go of command with your left hand, the app will pop to the foreground.
            </p>

            <Disqus />
        </Main>;
    }
}
