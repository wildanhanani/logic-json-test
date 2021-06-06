const fs = require('fs');

fs.readFile('data.json', function (err, data) {
  if (err) throw err;

  const user = JSON.parse(data);

  let electronics = user.filter((user) => user.type == 'electronic');
  console.log('electronic:', electronics);

  let furniture = user.filter((user) => user.type === 'furniture');
  console.log('furniture:', furniture);

  let colour = user.filter((user) => user.tags === 'brown');
  console.log('colour:', furniture);

  let meeting = user.filter((user) => user.placement.name === 'Meeting Room');
  console.log('Room:', meeting);

  let date = user.filter((user) => user.purchased_at === 1579190642);
  console.log('Date:', date);

  // karena tanggal 16 januari 2020 tidak saya temukan diantara timestamp di file json maka saya mengambil timestamp secara acak
});

// var timestamp = 1579190471;
// var date = new Date(timestamp);
// console.log(date.getTime());
// console.log(date);

// var timestamp = 1579190471;
// var date = new Date(timestamp);

// console.log(
//   'Date: ' +
//     date.getDate() +
//     '/' +
//     (date.getMonth() + 1) +
//     '/' +
//     date.getFullYear() +
//     ' ' +
//     date.getHours() +
//     ':' +
//     date.getMinutes() +
//     ':' +
//     date.getSeconds()
// );
