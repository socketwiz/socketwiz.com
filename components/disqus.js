
import {Component} from 'react';

export default class Disqus extends Component {
    disqus() {
        let disqus_shortname = 'socketwiztechnicalblog';

        if (typeof document !== 'undefined') {
            let dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;

            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        }
    }
    
    render() {
        return <div>{this.disqus()}</div>;
    }
}
