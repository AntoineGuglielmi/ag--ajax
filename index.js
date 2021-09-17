// Ajax function
exports.ajax = (url,u_params) =>
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