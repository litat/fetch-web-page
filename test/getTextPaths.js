var assert = require("assert");
var cheerio = require("cheerio");

var getTextPaths = require("../lib/getTextPaths");

describe("getTextPaths", function(){
    var $ = cheerio.load('<div class="album"> <a href="#"></a> </div>');

    getTextPaths($, function(textPaths) {
        it("should be an array", function() {
            assert.equal(textPaths instanceof Array, true);
        });

        it("should be equal to #", function() {
            textPaths.forEach(function(textPath) {
                assert.equal(textPath, "http://www.saekodive-taiwan.com.tw/#");
            });
        });
    });
});


