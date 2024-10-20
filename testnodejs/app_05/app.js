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
        let data = fs.readFileSync('./public/cotact.html', {
          encoding: 'utf-8',
          flag: 'r',
        }); //читаем файл и получаем его как текст
        res.write(data); // записываем файл на сайт
        break;
      default:
        if (url.includes('/images')) {
          console.log('images =>');
          let data2 = fs.readFileSync(`./public  ${url}`);
          res.write(data2);
        } else {
          console.log('404');
          res.write('<h1>404</h1>');
        }
    }
    res.end();
  })
  .listen(PORT);
