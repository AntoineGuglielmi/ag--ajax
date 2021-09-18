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
The ajax function takes 2 parameters:  
- a string URL which to communicate with,
- an object containing 3 keys: 
    - a string method, 'get' by default,
    - a body object (some data to transfer on a post request before receiving the response), null by default,
    - a callback taking the response as unique parameter, null by default

### *The GET method*
For a GET ajax call:
```js
ajax('/some/url?param1=value1&param2=value2',
{
    callback: r =>
    {
        // Some action(s)...
    }
});
```
Deal with the php super global variable `$_GET`;

### *The POST method*
For a POST ajax call:
```js
ajax('/some/url',
{
    method: 'post',
    body:
    {
        key1: 'some data',
        key2: 'some other data'
    },
    callback: r =>
    {
        // Some action(s)...
    }
});
```
Deal with the php super global variable `$_POST`;

## Example
Suppose that we have a directories architecture like the following:
```tree
js
|--afterBrowserify.js
|--beforeBrowserify.js
index.html
test.php
```
Let's add code in our files:
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
});
```
```html
<!-- index.html -->
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
Serving the index.html file, in the browser we'll see:
```browser
<!-- <div id="root">Hello, ajax!</div> -->
Hello, ajax!
```
