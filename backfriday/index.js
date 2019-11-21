const request = require("request");
const cheerio = require("cheerio");

const urlShop = "https://www.pccomponentes.com";
const searchParams = "/buscar/?query=";
const keywords = "nintendo+switch";

// Configure the request
var options = {
  //url: "https://www.pccomponentes.com/buscar/?query=nintendo+switch",
  url: urlShop + searchParams + keywords,
  headers: {}
}

// Start the request
request(options, function (error, response, body) {

  if (!error && response.statusCode == 200) {

    // Parse HTML code
    const $ = cheerio.load(body);

    // Print out the response body
    //console.log(body);

    var url2 = $("#articleListContent").find("a").attr("href");
    //console.log(url2);

    // Configure the request
    var options2 = {
      url: urlShop + url2,
      headers: {}
    }

    request(options2, function (error, response, body) {

      if (!error && response.statusCode == 200) {

        // Parse HTML code
        const $ = cheerio.load(body);

        // Print out the response body
        //console.log(body);
        console.log($("#precio-main > span.baseprice").text());
      }
    });
  }
});