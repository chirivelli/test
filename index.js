import homepage from './index.html'

Bun.serve({
    static : {
        "/": homepage,
        '/list.json': Response.json({msg : 'my msg'})
    },

    fetch : () => new Response("404!"),

    port : 8080
});