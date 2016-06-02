/**
 Created by Den on 02.06.2016.
 Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую массив, который
 содержит все числа из него, включая начальное и конечное.
 Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию
 и убедитесь, что она возвращает 55.
 В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для
 построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
 Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].
 */

alert(sum(range(-1, 13)));
alert(range(-1, 13));
alert(range(2,22, -1));
alert(range(1, 10, 2));
alert(range(1, 10));

//Функция перегоняет все числа в массив
function range(first, second){
    var min = mini(first, second);
    var max = maxi(first, second);
    var step = 1;
    var temp;
    var arr = [];
    //Проверка на кол-во аргументов функции
    if (arguments.length > 2)
        step = arguments[2];

    //Проверка на положительность step
    if (step > 0)
        temp = min;
    else
        temp = max;

    for (var i = 0; i <= Math.abs((max - min)/step); i++){
        arr.push(temp);
        temp += step;
    }
    return arr;
}

function mini(f,s){
    if (f > s)
        return s;
    else
        return f;
}

function maxi(f,s){
    if (f > s)
        return f;
    else
        return s;
}

//Суммирует полученый массив
function sum(array){
    var result = 0;
    for (var i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}
