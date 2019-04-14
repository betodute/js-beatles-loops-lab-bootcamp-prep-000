
function theBeatlesPlay(musicians, instruments) {
  var storageArray = [];
for (var i = 0; i < musicians.length; i++) {
storageArray.push(musicians[i] + " plays " + instruments[i]);
}
return storageArray;
}