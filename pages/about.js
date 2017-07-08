
import {Component} from 'react';
import Link from 'next/link';
import Main from '../layouts/main.js';

export default class About extends Component {
    render() {
        return <Main title="About Ricky Nelson">
            <div id="home">
                <p>
                    I love the outdoors, except when it is cold outside. I like to fish,
                    play basketball, ride my motorcycles, fly radio controlled airplanes,
                    swim, or anything outside. I love to be with my family and friends.
                    I love to play the drums, and I love to play video games...and most
                    of all I love to geek out!
                </p>
                <p><a href="http://stackoverflow.com/users/785005/socketwiz">stack overflow profile</a></p>
                <p><a href="http://www.codeschool.com/users/socketwiz">code school profile</a></p>
            </div>
        </Main>;
    }
}
