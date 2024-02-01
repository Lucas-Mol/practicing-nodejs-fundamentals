const app = require("./src/app.js");

const HOSTNAME = "localhost";
const PORT = 3000;

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
