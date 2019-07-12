let counter = 0;

function search() {
    counter++;
    if (counter > 1) {
        $('.main-block__gif').remove();
    }
    let input = document.getElementById('input').value;
    let xhr = $.get("http://api.giphy.com/v1/gifs/search?q='"+input+"'&api_key=3lWEdxKKzvgtnsJQihO4lQvMyL5FnEq4&limit=w30");
    xhr.done(function(data) { 
        let gif = data.data;
        for (i in gif) {
            let gifLink = gif[i].images.original.url;
            let title = gif[i].title;
            let trending = gif[i].trending_datetime;
            $('.main-block').append('<div class="main-block__gif" id="main-block__gif"><img class="gif" src="'+gifLink+'"/><span>Title: "'+title+'"</span><span>Data: "'+trending+'"</span></div>');
        }
        console.log("success got data", data); 
    });
}

