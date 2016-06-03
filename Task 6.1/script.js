/**
 * Created by Den on 03.06.2016.
 */
/*
 Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив,
  у которого есть все элементы входных массивов.
 var arrays = [[1, 2, 3], [4, 5], [6]];
 // Ваш код тут
 // → [1, 2, 3, 4, 5, 6]
* */


var arrays = [[1, 2, 3], [4, 5], [6], ['Блалалайка', 'Лыжи', false] ];

var arr = arrays.reduce(function(lastResult, currentItem){
    return lastResult.concat(currentItem);
});

alert(arr);