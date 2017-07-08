
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

            <Footer />
        </div>;
    }
}

