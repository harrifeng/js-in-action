/**
 * Created by hfeng on 2015/4/5.
 */
var price;
var quantity;
var total;

price = 5;
quantity = 14;

total = price * quantity;

var el = document.getElementById('cost');
el.textContent = '$' + total;
