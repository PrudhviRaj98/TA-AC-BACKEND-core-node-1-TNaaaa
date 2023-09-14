// var url = require('url');
// const parsedUrl = url.parse(
//   'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male',
//   true
// );
// console.log(parsedUrl.pathname);
// console.log(parsedUrl.query);
// console.log(parsedUrl.host);
// console.log(parsedUrl.protocol);

var url = require('url');
const newUrl = url.parse(
  'https://www.google.com/search?q=new&sca_esv=565363226&ei=ETIDZfXZLY2t5NoP2IKowAI&ved=0ahUKEwi1pv2VwKqBAxWNFlkFHVgBCigQ4dUDCBA&uact=5&oq=new&gs_lp=Egxnd3Mtd2l6LXNlcnAiA25ldzIUEC4YigUYsQMYgwEYxwEY0QMYkQIyDhAAGIoFGLEDGIMBGJECMgsQABiKBRixAxiDATILEAAYigUYsQMYgwEyERAuGIAEGLEDGIMBGMcBGNEDMgsQABiABBixAxiDATIREC4YgAQYsQMYgwEYxwEY0QMyCxAAGIoFGLEDGIMBMgsQLhiABBixAxiDATILEC4YigUYsQMYgwEyIxAuGIoFGLEDGIMBGMcBGNEDGJECGJcFGNwEGN4EGOAE2AECSLAFUABYlwVwAXgAkAEAmAFYoAGlAaoBATK4AQPIAQD4AQGoAgrCAhYQLhgDGI8BGOUCGOoCGLQCGIwD2AEBwgIWEAAYAxiPARjlAhjqAhi0AhiMA9gBAcICCBAuGIoFGJEC4gMEGAAgQeIDBRIBMSBAiAYBugYECAEYCroGBggCEAEYFA&sclient=gws-wiz-serp',
  true
);
console.log(newUrl);
