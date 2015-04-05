/**
 * Created by hfeng on 2015/4/5.
 */
var msg = 'Sign up to receive our newsletter for 10% off!';

var area = function () {
    return 'size is 99'
};

msg = area();
function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}

updateMessage();