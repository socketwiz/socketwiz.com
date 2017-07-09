
import {Component} from 'react';
import Link from 'next/link';
import Main from '../layouts/main.js';

export default class Index extends Component {
    render() {
        return <Main title="Thoughts on Tech">
            <div id="home">
                <ul className="posts">
                    
                    <li data-date="2014-08-03">
                        <Link href="/2014-08-03-using-dtrace-to-fix-git">
                            <a>Using dtrace to fix git</a>
                        </Link>
                    </li>
                    
                    <li data-date="2014-07-04">
                        <Link href="/2014-07-04-github-for-blogging">
                            <a>Github for blogging</a>
                        </Link>
                    </li>
                    
                    <li data-date="2012-08-23">
                        <Link href="/2012-08-23-caps-lock">
                            <a>Caps Lock</a>
                        </Link>
                    </li>
                    
                    <li data-date="2012-05-20">
                        <Link href="/2012-05-20-vim-cheat-sheet">
                            <a>Vim cheat sheet</a>
                        </Link>
                    </li>
                    
                    <li data-date="2012-05-08">
                        <Link href="/2012-05-08-un-close-apps-with-mac-task-switcher">
                            <a>Un-close apps with Mac task switcher</a>
                        </Link>
                    </li>
                    
                    <li data-date="2012-05-07">
                        <Link href="/2012-05-07-vi-rediscovered">
                            <a>VI rediscovered</a>
                        </Link>
                    </li>
                    
                    <li data-date="2010-10-04">
                        <Link href="/2010-10-04-use-console-app-to-monitor-any-log-file">
                            <a>Use console.app to monitor any log file</a>
                        </Link>
                    </li>
                    
                    <li data-date="2010-08-02">
                        <Link href="/2010-08-02-how-to-extract-an-icon">
                            <a>How to extract an icon</a>
                        </Link>
                    </li>
                    
                    <li data-date="2010-07-21">
                        <Link href="/2010-07-21-how-to-recover-data-from-a-memory-card-for-free">
                            <a>How to recover data from a memory card for free</a>
                        </Link>
                    </li>
                    
                    <li data-date="2010-07-17">
                        <Link href="/2010-07-17-python-via-cocoa">
                            <a>Python via Cocoa</a>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </Main>;
    }
}
