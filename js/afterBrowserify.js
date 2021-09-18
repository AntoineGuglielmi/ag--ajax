(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let ajax = require('ag--ajax');

const root = document.getElementById('root');

ajax('test.php',
{
    callback: r =>
    {
        root.innerHTML = r;
    }
})
},{"ag--ajax":2}],2:[function(require,module,exports){
// Ajax function
module.exports = function(url,u_params)
{
    let d_params = {
        method: 'get',
        body: null,
        callback: null
    };
    let params = {...d_params, ...u_params};
    
    params.method = params.method.toLowerCase();
    
    if(params.method === 'post' && params.body !== null && typeof params.body === 'object')
    {
        let data = new FormData();
        for(const [key, value] of Object.entries(params.body))
        {
            data.append(key,value);
        }
        params.body = data;
    }

    fetch(url,params)
        .then(res => res.text())
        .then((text) => {
            if(params.callback !== null)
            {
                params.callback(text);
            }
        });
}
},{}]},{},[1]);
