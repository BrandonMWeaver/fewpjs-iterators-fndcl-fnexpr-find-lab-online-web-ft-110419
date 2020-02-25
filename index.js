const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(records) {
  records.find(function(record) {
    if (record.result === 'W')
      return record.year;
  });
}
