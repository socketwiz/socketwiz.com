
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        return <Main title="Use console.app to monitor any log file">
            <h2>Use console.app to monitor any log file</h2>

            <TwitterShare posted="04 Oct 2010"/>

            <p>I just discovered something pretty cool on my mac this morning and wanted to share. I use Symfony (http://www.symfony-project.org/) to develop web apps and it has a log file that you can use during development to help you debug certain aspects. I discovered that you can open the log file with the mac console.app:</p>

            <div className="highlighter-rouge">
                <pre className="highlight"><code>open log/backend_dev.log</code></pre>
            </div>

            <p>and it will automatically refresh. I normally open up a second terminal and run tail on it:</p>

            <div className="highlighter-rouge">
                <pre className="highlight"><code>tail -f log/backend_dev.log</code></pre>
            </div>

            <p>but this is pretty neat as well. You can also use all of the console features such as clear display, insert marker, and filter. I imagine this works with any type of log file. I just happen to stumble upon it with the symfony log I was working on. At any rate, give it a try and see how you like it.</p>

            <Disqus />
        </Main>;
    }
}
