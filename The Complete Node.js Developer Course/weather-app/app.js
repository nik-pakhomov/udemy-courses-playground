const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=3b88940dfbdb3c79a7a9b0ce3b85ce4c&query=Saint-Petersburg";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
