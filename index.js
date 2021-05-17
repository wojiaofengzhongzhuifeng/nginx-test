// index.js
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function (req, res) {

  const parseUrl = url.parse(req.url, true);
  if (parseUrl.pathname === '/api/getList') {
    const list = {'a': 1, 'b': 2}
    res.writeHead(200, {'content-Type':'text/html;charset=UTF-8'})
    res.end(JSON.stringify(list))
  }else {
    res.write(`
    port: 666
  `)
    res.end()
  }
});
server.listen(666, function () {
  console.log('server is starting on port 666');
});
