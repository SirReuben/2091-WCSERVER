//1. Installing Express
//2. Installing libraries/dependencies
//3. Require Statements

const express = require('express');
const app = express();

//4. Use the middleware required for serving static
app.use(express.static('public'));

//Create the route to serve a static index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

//Settings the listener to ENV PORT info
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
