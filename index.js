import homepage from './index.html'

Bun.serve({
    static : {
        "/": homepage
    },

    development: true,

    fetch : () => new Response("404!"),

    port : 8080
});