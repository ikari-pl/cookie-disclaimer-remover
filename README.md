Cookie Disclaimer Remover
=========================

All websites display the UK and EU visitors these annoying popups and banners 
about using cookies like it was something new/bad. It's annoying as hell, 
it takes up my screen, it requires me to aim at the close button/icon to get 
rid of a message I have never ever wanted in the first place. This userscript 
automatically kills all (well, that's a brave assumption) those annoying 
messages.


Installation
------------

If you are new to this, please see [The Userscript Instalation Manual][1].

To get the script, just click here: [cookieInfo.user.js -- Cookie Disclaimer Remover][2]


How it works (technically)
--------------------------

Right now it naïvely removes all HTML elements that have an ID or a class 
starting with "cookie". Surprisingly, it works for me.


Supported sites (it seems to be working on...)
----------------------------------------------

* demotywatory.pl
* dzienniklodzki.pl
* gazeta.pl
* polskibus.com
* wykop.pl

If you find other sites it proved useful on, don't hesitate to add them here!

TO-DO
-----

* make it click something like "OK" or "I agree" instead of just removing the layer

More information
----------------

* Cookie Law information: http://www.theeucookielaw.com/



[1]: http://userscripts.org/about/installing
[2]: https://raw.github.com/ikari-pl/cookie-disclaimer-remover/master/cookieInfo.user.js