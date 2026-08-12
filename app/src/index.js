const http = require('http');
const port = process.env.PORT || 8080;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Govind CI/CD sample-app! Version: ' + (process.env.APP_VERSION || 'dev') + '\n');
}).listen(port, () => console.log(`Listening on ${port}`));
// test change
