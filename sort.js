// JavaScript source code
testLexicographicSort = function ()
{
    var arr = ["acb", "abc", "bca"];
    var lexicographicOrder = "abc";
    lexicographicSort(arr, lexicographicOrder);
    print(arr);

    arr = ["acb", "abc", "bca","ffa","aea","def","gh"];
    var lexicographicOrder = "abcdefgh";
    lexicographicSort(arr, lexicographicOrder);
    print(arr);


    arr = ["acb", "abc", "bca"];
    var lexicographicOrder = "cba";
    lexicographicSort(arr, lexicographicOrder);
    print(arr);

    arr = ["aaa", "aa", ""];
    var lexicographicOrder = "a";
    lexicographicSort(arr, lexicographicOrder);
    print(arr);


}();
function print(arr)
{
    var printStr = "";
    for (var i = 0 ; i < arr.length -1; i++)
    {
        printStr += arr[i] + ",";
    }
    printStr += arr[arr.length - 1];
    document.write(printStr);
    document.write("<br/>");
}
function lexicographicSort(arr, lexicographicOrder)
{
    //create hashtable
    var hashTable = {};
    for (var i = 0 ; i < lexicographicOrder.length; i++)
    {
        var c = lexicographicOrder.charAt(i);
        hashTable[c] = i;
    }
    //quickSort
    quickSort(arr, hashTable);
}

function quickSort(arr, hashTable)
{
    
    function quickSortString(arr, left, right)
    {
        var index;

        if (arr.length > 1) {

            index = partition(arr, left, right);

            if (left < index - 1) {
                quickSortString(arr, left, index - 1);
            }

            if (index < right) {
                quickSortString(arr, index, right);
            }

        }

        function swap(arr, firstIndex, secondIndex) {
            var temp = arr[firstIndex];
            arr[firstIndex] = arr[secondIndex];
            arr[secondIndex] = temp;
        }
        function compare(firstStr, secondStr)
        {
            var i = 0;
            var j = 0;
            var minLength = Math.min(firstStr.length,secondStr.length);
            for (; i < minLength; i++)
            {
                var c1 = firstStr.charAt(i);
                var c2 = secondStr.charAt(i);
                if (hashTable[c1] < hashTable[c2])
                    return -1;
                else if (hashTable[c1] > hashTable[c2])
                    return 1;

            }

            //if above for finish without return mean all prefix elements are same in firstStr, secondStr
            if (minLength < firstStr.length)
                return 1;

            if (minLength < secondStr.length)
                return -1;

            return 0;
        }

        function partition(arr, left, right) {

            var pivot = arr[Math.floor((right + left) / 2)],
                i = left,
                j = right;


            while (i <= j) {

                while (compare(arr[i], pivot) === -1) {//arr[i] < pivot
                    i++;
                }

                while (compare(arr[j], pivot) === 1) { //arr[j] > pivot
                    j--;
                }

                if (i <= j) {
                    swap(arr, i, j);
                    i++;
                    j--;
                }
            }

            return i;
        }

        return arr;
    }

    quickSortString(arr,0, arr.length - 1);
}
function quickSortN(items, left, right) {

    var index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSortN(items, left, index - 1);
        }

        if (index < right) {
            quickSortN(items, index, right);
        }

    }

    return items;
}
