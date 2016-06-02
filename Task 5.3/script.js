/**
 * Created by Den on 02.06.2016.
 */

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 5));

function arrayToList(arr){
    var list = {};
    list.value = arr.shift();
    if (arr.length > 0) {
        list.rest = arrayToList(arr);
    } else {
        list.rest = null;
    }

    return list;
}

function listToArray(list) {
    var arr = [];
    for (var tmp = list; tmp; tmp = tmp.rest)
        arr.push(tmp.value);
    return arr;
}

function prepend(num, list){
    var newList = {};
    newList.value = num;
    newList.rest = list;
    return newList;
}

function nth(list, num){
    if (list == null) {
        return undefined;
    } else if (num == 0){
        return list.value;
    } else {
        return nth(list.rest, num - 1);
    }
}
