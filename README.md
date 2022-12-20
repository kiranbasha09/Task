# Task
Task about interview

Please run below steps to install:

1. run "npm i"



1 task:

Write a simple application that accepts a value (integer) and returns the fibonacci value at that index of the value provided.
The application should be performant at scale to handle larger numbers without slowing down exponentially.


Answer: http://localhost:3000/fibonacci
method: post
payload: {
 "value":79
}

response: {
    "position": 11
}

2 task: 

Write a customized function named: 'sortDoodles(order, list)' that accepts an array of values of different data types. The purpose of the function is to return
the list in a sorted format either ascending or descending. Supported data types are only numbers (integers and doubles), booleans and strings.
Note that the general custom of this function is such that all boolean values are less than all numbers which in turn are less than all strings as denoted thus:
  Boolean < Number < String.
The function should expect two parameters viz;
  - order: This tells the function whether to sort ascending or descending order. Possible values are 'ASC' or 'DESC'
  - list: A list of the items to be sorted.


  Answer: http://localhost:3000/imixedinputsort

method: post
payload: {
 "mixedinput": [
    "test",
     345,
     false,
     0,
     12.00,
     "",
     "ABC",
     -45.16,
     "Kiran",
     true,
     "Basha",
     1,
     -1,
     0.60625,
     "888.87",
     "%($(F"    
   ],
   "order":"ASC"
}

response: {
    "result": [
        false,
        true,
        -45.16,
        -1,
        0,
        0.60625,
        1,
        12,
        345,
        "",
        "%($(F",
        "888.87",
        "ABC",
        "Basha",
        "Kiran",
        "test"
    ]
}


  3 task: 

  Create a recursive function named: 'transformDoodles(list)' that accepts a multi-dimensional array of any data type and converts it to a uni-dimensional
array. For example,
  - transformDoodles([[1, 3], [true, "5"]]) should return [1, 3, true, "5"]
Note, write a clearly defined explainable code for this implementation without using the Array.prototype.flat() in-built function.

Answer: http://localhost:3000/flattern
method: post
payload: {
 "fattern": [[1, 3], [true, "5"]]
}
response: {
    "result": [
        1,
        3,
        true,
        "5"
    ]
}