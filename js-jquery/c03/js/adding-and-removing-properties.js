/**
 * Created by hfeng on 2015/4/8.
 */
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

//////////////////////////////////////////////////////////////////
// Please be careful that the Poll: has a `space` after it      //
// What we are doing is add two classes for the elPool          //
// one is `Poll:`, the other is `false`. You will see following //
// result afterwards:                                           //
// <p id="pool" class="Pool: false">Pool</p>                    //
//////////////////////////////////////////////////////////////////
var elPool = document.getElementById('pool');
elPool.className = 'Pool: ' + hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = 'Gym: ' + hotel.gym;
