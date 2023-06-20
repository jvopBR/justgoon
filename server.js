
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  const answer = req.query.ans;
  const id = req.query.id;

  let response = {
    success: false,
    suspicious: false,
    finished: false
  };

  if (id === '1' && answer === 'correspondances') {
    response.success = true;
    response.finished = true;
  } else if (id === '2' && answer === 'saudade') {
    response.success = true;
    response.finished = true;
  } else if (id === '3' && answer === 'Night_40px') {
    response.success = true;
    response.finished = true;
  } else if (id === '4' && answer === 'wildgoosechase26') {
    response.success = true;
    response.finished = true;
  } else {
    response.suspicious = true;
  }

  res.json(response);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
