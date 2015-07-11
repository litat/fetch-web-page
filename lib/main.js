var writeProductsSinglePage = require("./writeProductsSinglePage");

var productListUrls = process.argv.slice(2);

productListUrls.forEach(function(productListUrl){
    writeProductsSinglePage(productListUrl);
});
