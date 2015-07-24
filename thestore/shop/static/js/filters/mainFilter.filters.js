angular.module('storeApp')
    .filter('startFrom', function()
    {
        return function(input, start)
        {
            if(input)
            {
                start = +start; //parse to int
                end = start + 3;
                // appended = input.slice(0,start);
                finalArray = input.slice(start, end);
                // finalArray= initialArray.concat(appended);
                console.log(finalArray);
                return finalArray;
            }
        }
    });