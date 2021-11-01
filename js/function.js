const dowbleElem = (arr) => {
    let arrNew = [];
    if (Array.isArray(arr) === false) {
        return 'error';
    }
    for (let i = 0; i < arr.length; i++) {
        arrNew.push(arr[i] * 2);
    }
    arrNew = arrNew.filter(Number);
    if (arrNew.length === 0) {
        return ('Введите числовые значения')
    };
    if (Array.isArray(arrNew) === true) {
        return 'Array';
    }
    return arrNew
};
