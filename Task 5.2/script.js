/**
 * Created by Den on 02.06.2016.
 */
 /*
  У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный.
  В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace.

  Первая получает массив как аргумент и выдаёт новый массив – с обратным порядком элементов.
  Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный
  в том массиве, который был ей передан в качестве аргумента.
  Не используйте стандартный метод reverse.

  Если иметь в виду побочные эффекты и чистые функции из предыдущей главы, какой из
  вариантов вам кажется более полезным? Какой более эффективным?
 * */

var testArr = [1,3,5,6,7,8,9,11, 'dfff', true, false, 'Test'];
alert(reverseArray(testArr));
reverseArrayInPlace(testArr);
alert(testArr);


function reverseArray(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr[i] = arr[arr.length - i - 1];
    }
    return newArr;
}


function reverseArrayInPlace(arr){
    var tmp = 0;
    for (var i = 0; i < arr.length/2; i++){
        tmp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = tmp;
    }
}