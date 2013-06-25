HistoryHelper
==============

HistoryHelper is a simple helper for Backbone applications, where the ux paradigm is that of an application
instead of a web page and the navigation structure is in the form of a tree.

HistoryHelper allows the user to use the browser back button to go up the tree. This is especially helpful
on Android and Windows Phone devices, which have a physical back button.

Usage
-----

Where you would otherwise call ´Backbone.history.navigate(url)´:

    HistoryHelper.go(url);

Inside your router functions:

    HistoryHelper.go(currentUrl, true);

Example
-------

For a simple practical example, see the example folder.

License
-------

This code is licenced under the BSD license.