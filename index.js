function theBeatlesPlay(musicians, instruments) {
  var storageArray = [];
for (var i = 0; i < musicians.length; i++) {
storageArray.push(musicians[i] + " plays " + instruments[i]);
}
return storageArray;
}

function johnLennonFacts(facts) {
  var storageArray2 = [];
  var index = 0;
  while (index > facts.length) {
  storageArray2.push(facts[index] + "!!!");
  index++;
  }
  return storageArray2;
}