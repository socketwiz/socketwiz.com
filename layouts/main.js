
import {Component} from 'react';
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import ReactGA from 'react-ga';

export default class Main extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-31544835-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        const {children, title} = this.props;

        return <div>
            <Header title={title} />

                <div className="container">
                    <div className="row">
                        <div className="blog-main">
                            {children}
                        </div>
                    </div>
                </div>

            <Footer />
        </div>;
    }
}

