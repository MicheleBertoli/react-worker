[![Build Status](https://travis-ci.org/MicheleBertoli/react-worker.svg?branch=master)](https://travis-ci.org/MicheleBertoli/react-worker)

React Worker
============

Using [Service Workers](http://www.w3.org/TR/2014/WD-service-workers-20141118/) to render [React](http://facebook.github.io/react/) components.

Rendered components are cached (thanks to [@sandropaganotti](https://github.com/sandropaganotti)) and the cache is cleared everytime `build.js` is updated.

It works in [Chrome Canary](https://www.google.co.uk/intl/en/chrome/browser/canary.html) with the "experimental Web Platform features" flag enabled.

[Demo](https://react-worker.herokuapp.com/)

Run
---------------

```
$ npm install
$ npm start
```

Test
---------------

```
$ npm test
```