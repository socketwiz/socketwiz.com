
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        return <Main title="Github for blogging">
            <h2 className="blog-post-title">Github for blogging</h2>
            <TwitterShare posted="07 Jul 2014"/>

            <p>
                Over the years I’ve had several blogs from <a href="https://www.tumblr.com/"> Tumblr </a> to
                my own platform.  Today my blog has a new home on <a href="https://pages.github.com/">Github Pages</a>.  There
                are several advantages to using Github as a blogging platform, you can use your own editor,
                publish is as simple as doing a “git push”, and adding images is not nearly as cumbersome
                as something like Tumblr.  However there are a couple disadvantages that you have to consider,
                first and foremost is the fact that there is no backend, so you have to figure out how you’re
                going to manage your templates.  You have a couple of options, you could use something like
                Dreamweaver which will handle a template for you, use a client side JavaScript framework like
                AngularJS or better yet Bootstrap for its baked in routing, or finally you can settle
                for <a href="http://jekyllrb.com/">Jekyll</a> which is Github’s solution to the problem.
                I settled for Jekyll because its a Ruby app, and I like Ruby, it allows you to create content with either
                Markdown or HTML, and it comes with a server that will help you preview your work before you publish.
                And your not locked down to a particular structure, you can put stuff in whatever kind of structure you
                like, you can use JavaScript, you can embed whatever kind of content you like, the sky is the limit.
            </p>

            <Disqus />
        </Main>;
    }
}
