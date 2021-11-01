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
        assert.equal(dowbleElem(array1), 'Введите числовые значения')
    });

    it('в массиве не только числовые элементы', function () {
        const array2 = ['hello',3]
        assert.deepEqual(dowbleElem(array2), [6])
    });

    it('проверка элементов', function () {
        const array3 = [2,3,4]
        assert.deepEqual(dowbleElem(array3), [4,6,8])
    });
    })