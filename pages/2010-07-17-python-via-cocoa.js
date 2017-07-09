
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        return <Main title="Python via Cocoa">
            <h2>Python via Cocoa</h2>

            <TwitterShare posted="07 Jul 2010"/>

            <p>I have an idea for a Cocoa front-end around a Python script that I recently
                came across. As you may or may not be aware Cocoa has the concept of
                a <a href="https://developer.apple.com/library/mac/DOCUMENTATION/Cocoa/Conceptual/ScriptingBridgeConcepts/Introduction/Introduction.html">scripting bridge</a> for Python. However, almost all of the examples I could find
                were to allow Python to use Cocoa as a GUI interface basically. But I want to
                do is the other way around, use Python for it’s engine from Cocoa. Google being
                the amazing search engine that it is helped me to find an example that
                describes&nbsp;
                <a href="http://www.informit.com/blogs/blog.aspx?uk=Ask-Big-Nerd-Ranch-Adding-Python-Scripting-to-Cocoa-apps">exactly that</a>. Using that example I was able to break out the basic
                concept and build a very simple app that calls a Python script from Cocoa. The
                python script just calls ls and is then able to print the output back into my
                Cocoa app’s text view. So the bridge allows a two way communication from Cocoa
                to Python and back again. This is very cool stuff. Here is a screen shot of my
                little test app</p>

            <p><img src="/static/images/rover.png" alt="Rover test app" /></p>

            <p>Here is the Cocoa script that I executed in it’s entirety:</p>

            <figure className="highlight"><pre><code>{`#
#  RoverExecutor.py
#  Rover
#
#  Created by Ricky Nelson on 7/16/10.
#
from Foundation import *
from AppKit import *

import subprocess

class PythonExecutor(NSObject):
  @classmethod
  def main_(self, args):
    textView = args[0];
    path = args[1]
    p = subprocess.Popen('ls /', shell=True, stdout=subprocess.PIPE).stdout
    textView.textStorage().mutableString().setString_(p.read())
    return YES`}</code></pre></figure>

            <p>Now that I have a basic understanding of how it all works I can move on to
                building my little UI.</p>

            <Disqus />
        </Main>;
    }
}
