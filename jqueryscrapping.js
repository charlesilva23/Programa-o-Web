function extractPrice(price) {
    return $(".product-card_price")[price].innerText;
}

function extractSize(size) {
    return $(".promotion__tag-size")[size].innerText;
}

function extractQuantity(quantity) {
    return $(".promotion-quantity")[quantity].innerText;
}

var jsonObj = [{}];

var cards = $(".product-card_weblink").length;
for (var cont = 0; cont < cards; cont++) {
    var price = extractPrice(cont);
    var size = extrairSize(cont);
    var quantity = extrairQuantity(cont);

    item = {};
    item["Price"] = price;
    item["size"] = size;
    item["quantity"] = quantity;

    //item2 = {};
    jsonObj.push(item);
}

/*var cards = $(".product-card__link").length;
for (var cont = 0; cont < cards; cont++) {
    var price = extractPrice(cont);
    var size = extrairSize(cont);
    var quantity = extrairQuantity(cont);
    item2 = {};
    item["Price"] = price;
    item["size"] = size;
    item["quantity"] = quantity;
    item2 = {};
    jsonObj.push(item);
}
*/

console.log(jsonObj);