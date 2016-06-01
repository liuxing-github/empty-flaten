'use strict';
function double_to_one(collection) {

  //在这里写入代码
  var arr = [];
  for(var i = 0 ; i < collection.length ; i++)
  {
    for(var j = 0 ; j< collection[i].length ; j++)
    {
      arr.push(collection[i][j]);
    }
  }
  var temArr = [];
  for(var k = 0 ; k < arr.length ; k++ )
  {
    if(temArr.indexOf(arr[k]) === -1)
    {
      temArr.push(arr[k]);
    }
  }
  return temArr;
}

module.exports = double_to_one;
