const dowbleElem = (arr) => {
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
      if( typeof(arr) !== Array) {
        return 'error'; }
      arrNew.push(arr[i] * 2);
    }
    return arrNew;
  };
  // let arr1 = dowbleElem([1, 2, 3, 4, 5]);
  // console.log(arr1);
    