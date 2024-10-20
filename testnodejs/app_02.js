const http = require('http'); //этот модуль имеет метод создания сервера
//request, response
//Объект request можно использовать для получения информации о текущем HTTP-запросе
//Объект response можно использовать для отправки ответа на текущий HTTP-запрос.
http
  .createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log('server work');
    res.setHeader('Content-Type', 'text/html; charset=utf-8;'); //мы говорим серверу о том что будем давать ему информацию в формате text/html и ее кодировка utf-8
    res.write('<h2>Hello world</h2>'); //выводим в локалке
    res.write('<p>Hello hello</p>'); //выводим в локалке

    res.end();
  })
  .listen(3500); //метод listen говорит о том что сервер будет прослушивать порт 3500
