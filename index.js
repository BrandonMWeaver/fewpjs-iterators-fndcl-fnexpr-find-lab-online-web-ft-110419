const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(record) {
  let result = record.find(function(record) {
    record.result === 'W';
  });
  return !!result ? result.year : undefined;
}
