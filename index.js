const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(record) {
  return record.find(function(record) {
    return record.result === 'W';
  }).year;
}
