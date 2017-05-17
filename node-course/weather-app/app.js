// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

//deeab4b2010275e7fd928941f5f48d7d

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/deeab4b2010275e7fd928941f5f48d7d/37.6063621,-122.1178261',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(`It is currently ${body.currently.temperature} degrees.`);
  } else {
    console.log('Unable to fetch weather.');
  }
});
