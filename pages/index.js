
import {Component} from 'react';
import Link from 'next/link';
import Main from '../layouts/main.js';

export default class Index extends Component {
    render() {
        return <Main title="Thoughts on Tech">
            <div id="home">
                <ul className="posts">
                    
                    <li data-date="2014-08-03">
                        <Link href="/2014-08-03-using-dtrace-to-fix-git">Using dtrace to fix git</Link>
                    </li>
                    
                    <li data-date="2014-07-04">
                        <Link href="/2014/07/04/github-for-blogging">Github for blogging</Link>
                    </li>
                    
                    <li data-date="2012-08-23">
                        <Link href="/2012/08/23/caps-lock">Caps Lock</Link>
                    </li>
                    
                    <li data-date="2012-05-20">
                        <Link href="/2012/05/20/vim-cheat-sheet">Vim cheat sheet</Link>
                    </li>
                    
                    <li data-date="2012-05-08">
                        <Link href="/2012/05/08/un-close-apps-with-mac-task-switcher">Un-close apps with Mac task switcher</Link>
                    </li>
                    
                    <li data-date="2012-05-07">
                        <Link href="/2012/05/07/vi-rediscovered">VI rediscovered</Link>
                    </li>
                    
                    <li data-date="2010-10-04">
                        <Link href="/2010/10/04/use-console-app-to-monitor-any-log-file">Use console.app to monitor any log file</Link>
                    </li>
                    
                    <li data-date="2010-08-02">
                        <Link href="/2010/08/02/how-to-extract-an-icon">How to extract an icon</Link>
                    </li>
                    
                    <li data-date="2010-07-21">
                        <Link href="/2010/07/21/how-to-recover-data-from-a-memory-card-for-free">How to recover data from a memory card for free</Link>
                    </li>
                    
                    <li data-date="2010-07-17">
                        <Link href="/2010/07/17/python-via-cocoa">Python via Cocoa</Link>
                    </li>
                    
                </ul>
            </div>
        </Main>;
    }
}
