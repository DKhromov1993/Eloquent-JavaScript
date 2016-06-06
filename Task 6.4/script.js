/**
 * Created by Den on 06.06.2016.
 */
/*
* Every и some

 У массивов есть ещё стандартные методы every и some. Они принимают как аргумент некую функцию, которая, будучи вызванной с элементом массива в качестве аргумента, возвращает true или false.
 Так же, как && возвращает true, только если выражения с обеих сторон оператора возвращают true, метод every возвращает true, когда функция возвращает true для всех элементов массива.
 Соответственно, some возвращает true, когда заданная функция возвращает true при работе хотя бы с одним из элементов массива.
 Они не обрабатывают больше элементов, чем необходимо – например, если some получает true для первого элемента, он не обрабатывает оставшиеся.
 Напишите функции every и some, которые работают так же, как эти методы, только принимают массив в качестве аргумента.
 // Ваш код тут

 console.log(every([NaN, NaN, NaN], isNaN));
 // → true
 console.log(every([NaN, NaN, 4], isNaN));
 // → false
 console.log(some([NaN, 3, 4], isNaN));
 // → true
 console.log(some([2, 3, 4], isNaN));
 // → false
*
* */

function every(arr, func) {
    for (var i = 0; i < arr.length; i++){
        if (func(arr[i]) === false) return false;
    }
    return true;
}

function some(arr, func) {
    for (var i = 0; i < arr.length; i++){
        if (func(arr[i]) === true) return true;
    }
    return false;
}

/*
function every(arr, func){
    var result = 0;
    arr.forEach(function(elem){
        result += func(elem);
    });
    return result === arr.length ? true : false;
}

function some(arr, func){
    var result = 0;
    arr.forEach(function(elem){
        result += func(elem);
    });
    return result > 0 ? true : false;
}
 */

console.log(every([1, NaN, NaN], isNaN));
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false