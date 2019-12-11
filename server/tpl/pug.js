module.exports = `
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport" content="width=device-width, initial-scale=1.0")
        meta(http-equiv="X-UA-Compatible" content="ie=edge")
        title Koa Server Pug
        link(href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet")
    body
        .container
            .row
                .col-md-4
                    h1 hello,#{you}
                .col-md-8
                    h1 hi,#{me}
    script(src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js")
    script(src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.min.js")
`