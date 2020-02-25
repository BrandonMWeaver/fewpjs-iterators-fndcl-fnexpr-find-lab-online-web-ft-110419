const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(record) {
  return record.find(function(record) {
    let result = record.result === 'W';
    return !!result ? result.year : undefined;
  });
}
