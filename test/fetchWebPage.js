var assert = require("assert");
var cheerio = require("cheerio");

var fetchWebPage = require("../lib/fetchWebPage");

describe("fetchWebPage", function() {
    var testUrl = "http://example.com";

    it("should read content", function() {
        fetchWebPage(testUrl, function(data) {
            var $ = cheerio.load(data);
            var titlePattern = "head>title";

            var getTitle = $(titlePattern).text();
            var expectTitle = "Example Domain";
            assert.equal(getTitle, expectTitle);
        });
    });
});
