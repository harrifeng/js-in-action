/**
 * Created by hfeng on 2015/4/5.
 */
var msg = 'Sign up to receive our newsletter for 10% off!';

function updateMessage() {
    var el = document.getElementById('message');
    el.textContent = msg;
}

updateMessage();