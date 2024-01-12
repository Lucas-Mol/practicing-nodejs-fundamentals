import http from "http"

const HOSTNAME = "localhost"
const PORT = 3000

const routes = {
    "/": "Root resource",
    "/stupid": "This is a stupid text",
    "/hello": "Can't miss our 'Hello World'",
    "/live-reload": "Is it workin?"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain"})
    res.end(routes[req.url])
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})