const express = require('express')
const app = express()
const port = 3000

var fs = require('fs') // this engine requires the fs module
app.engine('ntl', function (filePath, options, callback) { // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err)
    // this is an extremely simple template engine
    var rendered = content.toString()
      .replace('#title#', options.title)
      .replace('#message#', '<h1>' + options.message + '</h1>')
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'ntl') // register the template engine

app.get('/', (req, res) => {
    let html = '<h1>Moja strona</h1>';
    res.send(html)
});

app.get('/o-mnie', (req, res) => {
    res.render('o_mnie', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});