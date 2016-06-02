/**
 * Created by Den on 02.06.2016.
 */

var obj = {here: {is: "an"}, object: 2};
var obj1 = {prop1: 33, prop2: {test: 'test'}, prop3: 'касатка'};
var obj2 = {prop1: 33, prop2: {test: 'test'}, prop3: 'касатка', tes: 1};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual('1',1 ));
console.log(deepEqual(obj1,obj1));
console.log(deepEqual(obj1,obj2));



function deepEqual(firstValue, secondValue){
    //Проверяю, что значения указаны
    if (firstValue == null || secondValue == null){
        return 'Значение не введено';
    }
    //Проверяю, что получаю объекты
    if (typeof(firstValue) == 'object' && typeof(secondValue) == 'object'){
        //Проверяю, что кол-во свойств одинаково, экономлю время
        if(countProp(firstValue) != countProp(secondValue)){
            return false;
        }
        //Перебираю циклом for все элементы, prop - имя свойства(НЕ ЗНАЧЕНИЕ)
        for (var prop in firstValue){
            //hasOwnProperty возвращает true, если свойство есть у данного объекта

            if(firstValue.hasOwnProperty(prop) && secondValue.hasOwnProperty(prop)){
                //Получаю значение свойства по его имени и рекурсивно дергаю
                if (!deepEqual(firstValue[prop],secondValue[prop])){
                    return false;
                }
            }
            //Если свойста не совпали
            else {
                return false;
            }

        }
        return true;
    }
    else {
        if (firstValue === secondValue)
            return true;
        else
            return false;
    }
}

//Считаем кол-во свойств у объекта
function countProp(myObj){
    var counter = 0;
    for (var k in myObj){
        counter++;
    }
    return counter;
}