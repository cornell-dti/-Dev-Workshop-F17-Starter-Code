const express = require('express');
const app = express();
var request = require('request');

// TODO: Change the constant below to be your NetID!
const netid = "your-netid-here";

app.get('/', function (req, res) {
  // TODO(shea): render the HTML here
  res.send('Hello World!');
});

// TODO: Implement your API endpoints here! We've started you off with an example...

// /api/clear_backend is used to reset your backend to its empty state.
// This is what makes the 'Clear' button work - it simply deletes everything from the database,
// which could be useful to you while testing.
app.get('/api/clear_backend', function(req, res) {
	request("https://cdti-db.herokuapp.com/"+netid+"/delete", function (error, response, body) {
		if (error) {
			res.send(error);
			return;
		}
		res.send(body);
	});
});

// This tells your server to start listening for requests on localhost:3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});