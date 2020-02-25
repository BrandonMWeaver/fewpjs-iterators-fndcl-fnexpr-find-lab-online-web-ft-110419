const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(records) {
  records.find(function(record) {
    return record.result === "W";
  });
}
