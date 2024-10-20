const http = require('http');
const fs = require('fs');
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
        let data = fs.readFileSync('./cotact.html', {
          encoding: 'utf-8',
          flag: 'r',
        }); //читаем файл и получаем его как текст
        res.write(data); // записываем файл на сайт
        break;
      default:
        console.log('404');
        res.write('<h1>404</h1>');
    }
    res.end();
  })
  .listen(PORT);
