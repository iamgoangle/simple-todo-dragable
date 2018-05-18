const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  const userProfile = {
    name: 'Teerapong Singthong'
  };

  res.render('pages/index', {
    userProfile
  });
});

app.get('/logout', (req, res) => {
  res.json({
    test: true
  });
});

app.listen(8080, () => {
  console.log('Application Server listening :8080');
});
