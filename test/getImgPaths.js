var assert = require("assert");
var cheerio = require("cheerio");

var getImgPaths = require("../lib/getImgPaths");

describe("getImgPaths", function() {
    var $ = cheerio.load('<div class="album"> <a><img src="src"/></a> </div>');

    getImgPaths($, function(imgPaths) {
        it("should be an array", function() {
            assert.equal(imgPaths instanceof Array, true);
        });
	
        it("should be equal to src", function() {
            imgPaths.forEach(function(imgPath) {
                assert.equal(imgPath, "src");
            });
        });
    });
});
