describe('dowbleElem: передача не массива', function () {

    it('в функцию пришли данные, которые не являются массивом', function () {
           const obj = {
               objEl1: '123',
               objEl2: '123'
           }
        assert.equal(dowbleElem(obj), 'error')
    });

    it('в массиве нечисловые элементы', function () {
        const array1 = ["something","","text",""]
        assert.equal(dowbleElem(array1), Array)
    });

    it('в массиве не только числовые элементы', function () {
        const array2 = [1, 2,'hello', '3']
        assert.equal(dowbleElem(array2), Array)
    });
    })