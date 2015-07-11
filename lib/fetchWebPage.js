var http = require("http");

function fetchWebPage(url, callback) {
    http.get(url, function(res) {
        var data = "";
        res.on("data", function(chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
        res.on("error", function(err) {
            console.error(err);
            callback(null);
        });
    });
}

module.exports = fetchWebPage;
