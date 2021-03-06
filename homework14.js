// Task1
function lcm(num1, num2) {
    var mltp = 1;
    while (mltp % num1 != 0 | mltp % num2 != 0) {
        mltp += 1;
    }
    return mltp;
}


// Task2
var myArray = [1, 'sds', 3, 4, 'qwe'];

function countTypes(array) {
    var objTypes = {};
    for (var i in array) {
        var key = typeof(array[i]);
        if (!(typeof(array[i]) in objTypes)) {
            objTypes[key] = 1;
        }
        else (objTypes[key] += 1);
    }
    return objTypes;
}


// Task3
var A = {1: 'asd', 2: 'sdf', 3: 'tyu'};
var B = {1: 'sdf', 2: 'qwe', 3: 3};


function countKeys(obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    var count = 0;
    for (var i in keys1) {
        for (var j in keys2) {
            if (keys1[i] === keys2[j]) {
                count += 1;
            }
        }
    }
    return count;
}


// Task4
function getTypes() {
    var objectsTypes = [];
    for (var i in arguments) {
        objectsTypes[i] = typeof(arguments[i]);
    }
    return objectsTypes;
}


// Task5
myMatrix = [[1, 2, 3, 4], ['a', 'b', 'c', 'd'], [66, 77, 88, 99]];


function printMatrix(matrix) {
    for (var row in matrix) {
        console.log(matrix[row].join(' '));
    }
}


// Task6
function intersecArrays() {
    var commonArray = [];
    var newArray = [];
    var k = 0;
    for (var i in arguments) {
        for (var j in arguments[i]) {
            if (!(arguments[i][j] === commonArray[k])) {
                commonArray.push(arguments[i][j]);
            }
        }
    }
    commonArray.forEach(function (item) {
        if (!(~newArray.indexOf(item))) {
            newArray.push(item);
        }
    });
    return newArray;
}
