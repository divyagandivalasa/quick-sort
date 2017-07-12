var startValue, endValue;

function quickSort(input) {
    
    if(Array.isArray(input))
    {
        if(input.length === 0)
        {
            return input;
        }
        else
        {
            var start = 0;
            var end = input.length-1;
            var result = sortArray(input, start, end);
        }
        return result;
    }
    else
    {
        throw "Expected result to be array";
    }

};
var sortArray = function (array, start, end)
{
    startValue = partition(array, start, end);

    if (start < startValue - 1) {
        sortArray(array, start, startValue - 1);
    }

    if (end > startValue) {
        sortArray(array, startValue, end);
    }

    return array;
}

var swap = function (array, start, end)
{
    var temp = array[startValue];
    array[startValue] = array[endValue];
    array[endValue] = temp;
}

var partition = function (array, start, end)
{
    var pivotIndex = Math.floor((start + end) / 2);
    var pivot = array[pivotIndex];

    startValue = start;
    endValue = end;

    while (startValue <= endValue) {
        while (array[startValue] < pivot) {
            startValue++;
        }

        while (array[endValue] > pivot) {
            endValue--;
        }

        if (startValue <= endValue) {
            swap(array, start, end);
            startValue++;
            endValue--;
        }
    }
    return startValue;
}

module.exports = quickSort;