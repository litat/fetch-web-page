var assert = require("assert");
var cheerio = require("cheerio");

var getTitles = require("../lib/getTitles");

describe("getTitles", function() {
    var $ = cheerio.load('<div class="album"> <p>TitleText </p> </div>');

    getTitles($, function(titles) {
        it("should be an array", function() {
            assert.equal(titles instanceof Array, true);
        });

        it("should be equal to TitleText", function() {
            titles.forEach(function(title) {
                assert.equal(title, "TitleText");
            });
        });
    });
});
