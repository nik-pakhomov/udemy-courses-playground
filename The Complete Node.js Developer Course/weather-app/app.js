const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=3b88940dfbdb3c79a7a9b0ce3b85ce4c&query=Saint-Petersburg&units=f";

request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It's currently " +
      response.body.current.temperature +
      " degrees out. It feels like " +
      response.body.current.feelslike +
      " degrees out."
  );
});
