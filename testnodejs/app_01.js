const http = require('http'); //этот модуль имеет метод создания сервера
//request, response
//Объект request можно использовать для получения информации о текущем HTTP-запросе
//Объект response можно использовать для отправки ответа на текущий HTTP-запрос.
http
  .createServer((req, res) => {
    console.log('server work');
    res.end('1');
  })
  .listen(3500); //метод listen говорит о том что сервер будет прослушивать порт 3500
