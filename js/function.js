const dowbleElem = (arr) => {
    let arrNew = [];
    if( Array.isArray(arr) === false) {
        console.log('error'); }
    for (let i = 0; i < arr.length; i++) {
      arrNew.push(arr[i] * 2);
    }
    return arrNew;
  };
  // let arr1 = dowbleElem([1, 2, 3, 4, 5]);
  // console.log(arr1);
    