import homepage from './index.html'

Bun.serve({
    static: {
        "/": homepage
    },

    fetch() {
        return new Response("404!");
    },
    port : 8080
});