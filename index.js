
(function($){

    fetch('../data.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data => console.log(data))
})(jQuery)