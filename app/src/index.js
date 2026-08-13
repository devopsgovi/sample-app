const http = require('http');

const port = process.env.PORT || 8080;

http.createServer((req, res) => {

  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK\n');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Fully Automated CI/CD Pipeline!\n');

}).listen(port, () => {
  console.log(`Listening on ${port}`);
});
