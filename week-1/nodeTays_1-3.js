var url = require("url");
var parsedURL = url.parse("https://davidtays.github.io/WebPortfolio/profile?name=tays");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);