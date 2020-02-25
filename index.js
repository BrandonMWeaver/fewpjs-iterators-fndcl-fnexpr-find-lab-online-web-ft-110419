const testVar = {};

function testFunc() {
  return "hi";
}

function superBowlWin(records) {
  records.find(function(record) {
    return record.result === "W";
  });
}
