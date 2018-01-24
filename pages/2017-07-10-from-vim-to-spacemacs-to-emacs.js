
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        const emacsConfig = 'https://github.com/socketwiz/dotfiles/tree/master/emacs/.emacs.d';

        return <Main title="From VIM to Spacemacs to Emacs">
            <h2>From VIM to Spacemacs to Emacs</h2>

            <TwitterShare posted="10 Jul 2017"/>

            <h4>VIM</h4>
            <p>
                I&#39;ll always be a VIM user, there&#39;s just no way around that. However I&#39;m always
                on the lookout for something better.  I ran across an article on Quora asking about the best
                editor for programming and my answer to that is generally a solid VIM.  However somebody
                mentioned <a href="http://spacemacs.org/" target="_blank" rel="noopener noreferrer">Spacemacs</a> which
                is simply Emacs configured for VIM users...at least that&#39;s what it started off life as.
                It now seems to cater to Emacs users as well.  At any rate I had to give it a try
                because I&#39;ve always wanted to like Emacs but never really could get into it.  There
                are some areas where VIM is lacking and project management is one of those areas.
                I was curious if Emacs would have more to offer here.
            </p>

            <h4>Spacemacs</h4>
            <p>
                I gave Spacemacs an honest try for around 3 months.  I was immediately productive because
                of the VIM knowledge that I was able to bring with me.  First thing I noticed is that
                it had everything and the kitchen sink bundled with it, I just had to turn on the things
                I cared about so I didn&#39;t have to install many if any packages to get started.  In fact
                my configuration was pretty minimal.  Second thing is I really dig ORG mode.  I like to
                keep various notes on things that I&#39;ve learned over the years so I can go back and reference
                them later and ORG mode is definitely the ticket there.  Thirdly having a package manager
                baked in is really nice for the package or two that I did end up installing.  I really
                wish VIM had gotten this figured out.
            </p>
            <p>
                However it wasn&#39;t long before I started to run into some quirky behaviors.  The worst of them
                is that it seemed like it kept forgetting which mode the file was in.  That#39;s the best way
                I can think to describe it.  I&#39;m a JavaScript developer so I had it all setup for that with
                syntax highlighting and such, and every now and then the syntax highlighting would stop and
                the text would just turn the default gray and all of the various modes that were supposed
                to act on JavaScript text would just stop working, for example indenting.  I could close the
                buffer and re-open but then I&#39;d lose all my undo history and it was really annoying.  Another
                issue was with yasnippets.  I just couldn&#39;t get them to work consistently.  I would create one,
                test it out, it would work how I expected, I would save it, but then the tab wouldn&#39;t trigger it.
                And finally I had a problem with company-mode.  This problem manifested itself over some update I
                think because it worked fine in the beginning.  However it got to where it would force me to choose
                one of its selections and I&#39;d have to come up with creative ways to get around it, I ended up just
                disabling it. I think part of the problem might be that I&#39;m not just a JavaScript developer but a
                React developer which means I use JSX too and that just might be too new for prime time.  It could
                also be something I&#39;ve done to my configuration...I&#39;m totally new to Spacemacs and Emacs in
                general. So I made the decision that I liked Emacs proper enough that I wanted to strip it back down to
                the basics and just install the bare minimum I needed to be productive.
            </p>

            <h4>Emacs</h4>
            <p>
                First thing I installed was Evil mode so I could actually do something other than go on a
                huge learning curve on how Emacs worked.  I&#39;ll probably always have to have some sort of
                VIM emulation to be productive at this point in my life and Evil is as good as any I&#39;ve
                used. Next I grabbed the few packages I thought I might need to do JavaScript development.
                It didn&#39;t take me long to get up to around 15 packages like web-mode, flycheck, tide-mode,
                and helm (not really needed for JavaScript but makes Emacs easier to learn) just to name
                a few. It took me literally all weekend but I finally got things configured the way I wanted it.
                I really liked the spacebar concept that Spacemacs came up with and I tried to replicate it as
                best I could.  I don&#39;t have the menu, but I have recreated the handful of keybinds that I used
                with evil mode.  I made spacebar the leader key, then just made a bunch of spacebar bindings to
                do the things I like in spacemacs.  If I end up sticking it out with Emacs maybe I&#39;ll try to figure
                out that menu.  The verdict so far is that things have improved as I had hoped.  I need to give it
                a little more time but so far it hasn&#39;t lost what mode the file is in and I have not had to close
                and re-open the buffer.  Yasnippets are now working properly, and company-mode is behaving so far.
                I&#39;m starting to wonder if I broke company-mode with some configuration of mine.  At any rate there
                is one small nag that I had in Spacemacs that persists in this minimal Emacs configuration I&#39;ve
                created.  I use evil mode which means I utilize what VIM would call text objects.  One thing Emacs
                doesn&#39;t seem to like is cutting text out of one context and trying to paste it into another.
                For example, di&quot; and try to paste that inside {'{'} or something other than quotes.
                It will refuse to put the text inside the quotes and instead put it on the next line and often
                truncating the text while its at it.  I have not taken the time to try and figure this out but
                I suspect its either a bug in evil mode, or web-mode or a combination of the two.  Another one
                is that I often end up with a bunch of spaces on empty lines.  I have yet to figure out what
                triggers this because it doesn&#39;t happen all the time however here&#39;s what happens.  Say you
                are on a line that is indented 4 spaces, you type out some code, hit enter twice to separate
                the next line of code with a blank line, type out some more code.  The blank line will
                (sometimes) end up with 4 spaces when it shouldn&#39;t have anything.
            </p>

            <p>
                At any rate so far I things have been working well.  No environment is perfect and I have not found
                any show stoppers at this point.  I really love how configurable both VIM and emacs are.  In my opinion
                Emacs has a slight edge in two areas, the built-in package system, and lisp is better than viml IMHO.
                I&#39;m by no means a lisp expert but hey I&#39;m a developer and I&#39;m enjoying learning a new
                language. One thing that#39;s missing from both VIM and Emacs is a JavaScript debugger.  However as a
                frontend developer I find the Chrome dev tools to be more than adequate for the job and don&#39;t
                really need a debugger for that in Emacs.  Even Node utilizes the Chrome dev tools these days so
                I&#39;m all set there.  So if you&#39;re interested to see the configuration I&#39;ve come up with
                for developing JavaScript you can find it
                here: <a href={emacsConfig} target="_blank" rel="noopener noreferrer">{emacsConfig}</a>
            </p>

            <Disqus />
        </Main>;
    }
}
