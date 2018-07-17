const http = require('http'),
      express = require('express'),
      app = express(),
      hbs = require('express-handlebars'),
      D = __dirname,
      url = require('url'),
      port = process.env.PORT || 3000,
      publicPath = `${D}/public`,
      fs = require('fs'),
      server = http.createServer(app),
      bodyParser = require('body-parser');


app.use(express.static(publicPath));
app.use(bodyParser.json())

app.set('views', publicPath);
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');


server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server is up on localhost:${port}`);
});
