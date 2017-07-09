
import {Component} from 'react';
import Disqus from '../components/disqus.js';
import Main from '../layouts/main.js';
import TwitterShare from '../components/twitter-share.js';

export default class Article extends Component {
    render() {
        return <Main title="How to recover data from a memory card for free">
            <h2>How to recover data from a memory card for free</h2>

            <TwitterShare posted="21 Jul 2010"/>

            <p>So a friend of mine took some pictures on her camera which contains an SD card but for some reason was unable to retrieve the pictures off of it.  I have a similar camera and a Mac she has Windows.  Many times I’ve been able to access data on removable drives on my Mac that were inaccessible on Windows but not this time.</p>

            <p>So my first hurdle was how to mount this drive under the file system.  I put the card in my camera but it does a great job of masking that there is a removable drive inside of it.  Normally I don’t care.  I just plug it in and up comes iPhoto ready to pull the images off and remove them from my camera.  So when I plugged her card in, iPhoto dutifully came up…but no pictures.  So I found a free piece of software called <a href="http://www.cgsecurity.org/wiki/PhotoRec">PhotoRec</a> that would supposedly extract the data from the memory card if I could only see it.  So with iPhoto up and running I ran the app, but there was no drive to be seen.  For some reason I decided to look around on my Mac to see if by any chance there might be a card reader of some sort and lo and behold right under the CD drive is an SD card reader.  Who knew?  So I plugged her card into the reader and finally it was properly mounted.</p>

            <p>The website for PhotoRec says that as long as you can see the card and the proper size of the card is detected, then there is a very good chance that the data can be recovered.  Luckily this card was reporting the proper size.  Now PhotoRec is a free application and as such it doesn’t have a fancy user interface that just anybody can click around and figure out.  You have to run this utility from the command line.</p>

            <p>The drive that is 1000GB is my hard drive, the one that is 513MB is the memory card.  So I choose the first one /dev/disk2, not the /dev/rdisk2. And I’m given a screen with more options:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>{`Disk /dev/disk2 - 513 MB / 489 MiB (RO)

Please select the partition table type, press Enter when done.
[Intel  ]  Intel/PC partition
[EFI GPT]  EFI GPT partition map (Mac i386, some x86_64…)
[Mac    ]  Apple partition map
[None   ]  Non partitioned media
[Sun    ]  Sun Solaris partition
[XBox   ]  XBox partition
[Return ]  Return to disk selection`}</code></pre>
            </div>

            <p>Intel seems like the most reasonable out of the choices so I select that one.  I’m then prompted with more choices:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>{`Disk /dev/disk2 - 513 MB / 489 MiB (RO)

Partition                  Start        End    Size in sectors
No partition                   0    1002495    1002496 [Whole disk]
1 P FAT16 &gt;32M                   233    1002495    1002263 [NO NAME]`}</code></pre>
            </div>

            <p>I’m pretty sure that memory sticks for most cameras are formatted as FAT so I choose that. I’m then prompted with more choices:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>1 P FAT16 &gt;32M                   233    1002495    1002263 [NO NAME]</code></pre>
            </div>

            <p>To recover lost files, PhotoRec need to know the filesystem type where the file were stored:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>{`[ ext2/ext3 ]  ext2/ext3/ext4 filesystem
[ Other     ]  FAT/NTFS/HFS+/ReiserFS/...`}</code></pre>
            </div>

            <p>Again, I choose anything that says FAT, and again I prompted with more choices:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>1 P FAT16 &gt;32M                   233    1002495    1002263 [NO NAME]</code></pre>
            </div>

            <p>Please choose if all space need to be analysed:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>{`[   Free    ]  Scan for files from FAT16 unallocated space only
[   Whole   ]  Extract files from whole partition`}</code></pre>
            </div>

            <p>You know me, I’m going with FAT.  Now I’m asked where I would like to save the recovered files.  This is starting to look promising.</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>Do you want to save recovered files in /Users/socketwiz/bin ? [Y/N]</code></pre>
            </div>

            <p>Do not choose to write the files to the same partition they were stored on.  I choose to store the files on my desktop and then select Y and it begins to attempt to restore the files…FINALLY.  A folder is created on my desktop called recup_dir.1 and PhotoRec appears to be recovering the files:</p>

            <div className="highlighter-rouge"><pre className="highlight"><code>{`Disk /dev/disk2 - 513 MB / 489 MiB (RO)
Partition                  Start        End    Size in
sectors
1 P FAT16 &gt;32M                   233    1002495    1002263
[NO NAME]


Pass 1 - Reading sector     384119/1002263, 151 files found
Elapsed time 0h01m41s - Estimated time for achievement 0h02m42
jpg: 151 recovered`}</code></pre>
            </div>

            <p>After around 10-15 minutes all 412 files are properly recovered.  Your mileage may vary but I would say if you can mount your card, and the operating system is reporting back the proper size of your card, then you have a pretty good chance of recovering you data from it.  This software also runs on Windows and I would expect you would receive the same choices I described above.  At any rate, if you or a friend end up with a corrupted memory card give these steps a try, I hope this helps.</p>



            <Disqus />
        </Main>;
    }
}
