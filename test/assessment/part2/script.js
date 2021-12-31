/*
Write your code for this exercise in this file beneath this long comment.
Please be certain to use only syntax and techniques covered in the
assigned freeCodeCamp courses.

1. Write a function named createRiver that expects to receive three arguments:
name, continent, and lengthInKilometers. This function should return an
object. The object it returns should have properties that are also named name,
continent, and lengthInKilometers. The values assigned to these properties
should be the values that are passed to the function. Additionally, the object
that createRiver returns should have two methods:

    isLongerThan - a function that accepts one river object as an argument
        and returns true if the river object the function belongs to is longer
        than the river object that is passed as an argument and false if it is
        not.

    logRiver - a function that logs to the console a sentence that contains
        the values of the river object's name and lengthInKilometers
        properties: "The [name] river is [length] kilometers long." For
        example, if the building were the Amazon, then the sentence that
        logRiver logs would be "The Amazon river is 6575 kilometers long."

2. Create a variable named rivers and assign to it an array. This array
should contain seven objects that are created by calling the createRiver
function. The values you should pass to the createRiver function to create
these objects are:

name        | continent     | lengthInKilometers
------------------------------------------------
Amazon      | South America | 6575
            |               |
Danube      | Europe        | 2850
            |               |
Ganges      | Asia          | 2704
            |               |
Mekong      | Asia          | 4350
            |               |
Mississippi | North America | 3730
            |               |
Nile        | Africa        | 6650
            |               |
Volga       | Europe        | 3530

3. Write the following three functions. All three should use the rivers
array to determine what to return.

    getRiverByName - this function expects a string as an argument and returns
        the object in the rivers array whose name property is equal to the
        string that is passed to it (if there is one).

    getRiversByContinent - this function expects a string as an argument and
        returns an array containing the objects in the rivers array whose
        continent properties are equal to the string that is passed to it.

    getAverageLength - this function returns the average length of all the
        rivers in the array.

You can test your code by opening index.html in Chrome and using the console
(see http://jsforcats.com/ for instructions on using the console). After you
correct any errors you see when you open the console, you can run commands such
as those below and verify the output.

var amazon = getRiverByName('Amazon');
var nile = getRiverByName('Nile');

amazon.isLongerThan(nile);

amazon.logRiver();

getRiversByContinent('Europe');

getAverageLength();
*/
