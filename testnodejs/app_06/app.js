const http = require('http');
const fs = require('fs');
const path = require('path');
const { log } = require('console');
const PORT = 3500;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4',
  '.txt': 'text/plain',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.docx':
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xls': 'application/vnd.ms-excel',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.woff': 'application/font-woff',
  '.woff2': 'application/font-woff2',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.swf': 'application/x-shockwave-flash',
  '.wasm': 'application/wasm',
};

function staticFile(res, filePath, ext) {
  res.setHeader('Content-type', mimeTypes[ext]);
}

http
  .createServer((req, res) => {
    const url = req.url;
    log(url);
    switch (url) {
      case '/contact':
        log('contact pages');
        staticFile(res, '/contact.html', '.html');
        break;
    }
  })
  .listen(PORT);
