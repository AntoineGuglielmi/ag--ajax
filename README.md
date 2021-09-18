# ag--ajax
An ajax function for ajax calls.

## Install
In the project's root directory, run the command:
```console
npm i ag--ajax
```
If like me you're still discovering the npm univers, I advise you to use the following command in addition:
```console
npm i -g browserify watchify
```
It will globaly install browserify and watchify, which both allow you to test the whole thing in your browser.

## Usage
Suppose that we have a directories architecture like the following:
```tree
js
|--afterBrowserify.js
|--beforeBrowserify.js
index.php
test.php
```

Let's write in our files:

```js
// beforeBrowserify.js
let ajax = require('ag--ajax');

const root = document.getElementById('root');

ajax('test.php',
{
    callback: r =>
    {
        root.innerHTML = r;
    }
})
```

```html
<!-- index.php -->
<!DOCTYPE html>
<html>
<head>
    <!-- ... -->
</head>
<body>
    <div id="root"></div>
    <script src="js/afterBrowserify.js"></script>
</body>
</html>
```

```php
// test.php
<?php

echo 'Hello, ajax!';
```

Back in the terminal, run the following command:
```console
watchify js/beforeBrowserify.js -o js/afterBrowserify.js
```

In the browser:
```browser
<!-- <div id="root">Hello, ajax!</div> -->
Hello, ajax!
```
