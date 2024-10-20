const http = require('http');
const PORT = 3500;

http
  .createServer((req, res) => {
    const url = req.url;
    console.log(url);

    switch (url) {
      case '/': //работает пока мы на главной странице
        console.log('main page');
        res.write('<h1>Main</h1>');
        break;
      case '/contact': //работает пока мы на главной странице
        console.log('contact page');
        res.write('<h1>contact</h1>');
        break;
      default:
        console.log('404');
        res.write('<h1>404</h1>');
    }
    res.end();
  })
  .listen(PORT);