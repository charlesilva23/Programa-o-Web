function extractTitle(i) {
    return $(".product-card__title")[i].innerText;
}

function extractDiscount(i) {
    return $(".promotion__tag-discount")[i].innerText;
}

function extractPrice(i) {
    return $(".promotion-price")[i].innerText;
}

var jsonObj = [{}];

var cards = $(".product-card__link").length;
for (var cont = 0; cont < cards; cont++) {
    var title = extractTitle(cont);
    var discount = extractDiscount(cont);
    var price = extractPrice(cont);

    item = {};
    item["title"] = title;
    item["discount"] = discount;
    item["price"] = price;

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