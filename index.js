import homepage from './index.html'

Bun.serve({
    static : {
        "/": homepage
    },

    development: true,

    fetch : (req, res) => {
        // if(req.url.endsWith("/rss")){
        //     console.log('rss')
        // }
        fetch('https://www.theverge.com/rss/index.xml')
            .then(res => res.text())
            .then(data => console.log(data))

        return new Response(req.url)
    },

    port : 8080
});