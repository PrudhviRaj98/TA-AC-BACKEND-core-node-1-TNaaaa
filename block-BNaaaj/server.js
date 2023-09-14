var url = require('url');
parsedUrl = url.parse(
  `https://airindia.com/fares/calculate?from=delhi&to=detroit`,
  true
);
console.log(parsedUrl.query);
console.log(parsedUrl.pathname);
console.log(parsedUrl.protocol);
let old = parsedUrl.query;
var newUrl = url.parse('old');
console.log(newUrl);
