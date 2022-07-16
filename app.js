require('dotenv').config();
const axios = require('axios').default;
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public/`));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

// app.post('/weatherData', (req, res) => {
//   const { cityName: city } = req.body;
//   const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0156a8e43019007a4f932d9723ea1f1`;
//   axios.get(apiLink)
//     .then((result) => app.set('data', result.data))
//     .then((e) => res.redirect('/'))
//     .catch((e) => console.log(e));
// });

// app.get('/anjay', (req, res) => {
//   const data = app.get('data');
//   // res.json(app.get('data'));
//   res.render('getData', { data });
// });

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`));
