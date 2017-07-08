
import {Component} from 'react';

export default class Footer extends Component {
    render() {
        return <div className="blog-footer">
            <p>
                <a href="http://www.linkedin.com/in/socketwiz/">
                    <i className="fa fa-linkedin social"></i>
                </a> <a href="https://github.com/socketwiz">
                    <i className="fa fa-github social"></i>
                </a> <a href="https://twitter.com/socketwiz">
                    <i className="fa fa-twitter social"></i>
                </a>
            </p>
        </div>;
    }
}
