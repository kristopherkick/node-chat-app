var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
date.add(1, 'y').subtract(9, 'M');
console.log(date.format('MMM Do YYYY hh:mm:ss a'));
