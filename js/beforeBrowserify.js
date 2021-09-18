let ajax = require('ag--ajax');

const root = document.getElementById('root');

ajax('test.php',
{
    callback: r =>
    {
        root.innerHTML = r;
    }
})