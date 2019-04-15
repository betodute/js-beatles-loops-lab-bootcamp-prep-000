function theBeatlesPlay(musicians, instruments) {
  var storageArray = [];
for (var i = 0; i < musicians.length; i++) {
storageArray.push(musicians[i] + " plays " + instruments[i]);
}
return storageArray;
}

function johnLennonFacts(facts) {
  var storageArray2 = [];
  var count = 0;
  while (count > facts.length) {
  storageArray2.push(facts[count] + "!!!");
  count++;
  }
  return storageArray2;
}