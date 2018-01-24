
import {Component} from 'react';
import Footer from '../components/footer.js';
import Header from '../components/header.js';

export default class Main extends Component {
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

                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-31544835-1"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-31544835-1');
                </script>

            <Footer />
        </div>;
    }
}

