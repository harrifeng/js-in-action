/**
 * Created by hfeng on 2015/4/6.
 */

var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
var elRoom = document.getElementById('rooms');

elName.textContent = hotel.name;
elRoom.textContent = hotel.checkAvailability();